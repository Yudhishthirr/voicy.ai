import { inngest } from "./client";

import connectDB from "@/db/dbconfig";
import TextToVoiceModel from "@/model/TextToSpeech";

import { TextToSpeech } from "@/lib/TextToSpeech";
import { uploadGeneratedAudio } from "@/lib/uploadGeneratedAudio";

export const generateVoiceJob = inngest.createFunction(
  { id: "generate-voice-job" },

  { event: "voice/generate" },

  async ({ event, step }) => {

    const {
      recordId,
      text,
      voiceSampleUrl,
    } = event.data;

    await connectDB();

    /**
     * STEP 1 — Generate Voice
     */
    const generated = await step.run(
      "replicate-generation",
      async () => {
        return await TextToSpeech({
          text,
          voiceSampleUrl,
        });
      }
    );
    console.log("genrated voice funnation called");
    console.log(generated);
    console.log("Replicate URL:", generated.url);



     const uploadedUrl = await step.run(
      "upload-audio",
      async () => {
        return await uploadGeneratedAudio(
          generated.url
        );
      }
    );

    /**
     * STEP 3 — Update DB
     */
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