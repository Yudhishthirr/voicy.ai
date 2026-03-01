import { inngest } from "./client";

import connectDB from "@/db/dbconfig";
import TextToVoiceModel from "@/model/TextToSpeech";

import {
  TextToSpeech,
  DummyTextToSpeech,
} from "@/lib/TextToSpeech";

import { uploadGeneratedAudio } from "@/lib/uploadGeneratedAudio";

import UserModel from "@/model/Users";
import CreditTransaction from "@/model/CreditHistory";

export const generateVoiceJob = inngest.createFunction(
  { id: "generate-voice-job" },
  { event: "voice/generate" },

  async ({ event, step }) => {

    const {
      recordId,
      text,
      voiceSampleUrl,
      userId,
    } = event.data;

    await connectDB();

    let creditsRequired = 0;

    
    const creditResult = await step.run(
      "deduct-credits",
      async () => {

        if (!userId)
          throw new Error("Unauthorized");

        const user = await UserModel.findOne({
          clerk_id: userId,
        });

        if (!user)
          throw new Error("User not found");

        creditsRequired = Math.ceil((text.length / 100) * 2);
        console.log("CREDITS_REQUIRED",creditsRequired);
       
        if (user.credit < creditsRequired) {
         

          await TextToVoiceModel.findByIdAndUpdate(
            recordId,
            {
              status: "failed",
            }
          );
          return {
            success: false,
            reason: "INSUFFICIENT_CREDITS",
          };
        }

        user.credit -= creditsRequired;
        await user.save();

        await CreditTransaction.create({
          user: user._id,
          credits: creditsRequired,
          type: "debit",
          reason: "Voice Generation",
        });

        return { success: true };
      }
    );

   
    if (!creditResult?.success) {
      console.log(
        "Job stopped:",
        creditResult?.reason
      );
      return creditResult;
    }

    
    const generated = await step.run(
      "replicate-generation",
      async () => {

        // replace DummyTextToSpeech with real later
        return await DummyTextToSpeech({
          text,
          voiceSampleUrl,
        });
      }
    );

    console.log("Generated:", generated.url);

   
    const uploadedUrl = await step.run(
      "upload-audio",
      async () => {
        return await uploadGeneratedAudio(
          generated.url
        );
      }
    );

    
    await step.run("update-db", async () => {

      await TextToVoiceModel.findByIdAndUpdate(
        recordId,
        {
          genratedvoice: uploadedUrl,
          status: "ready",
        }
      );
    });

    return { success: true };
  }
);