import { inngest } from "@/lib/inngest/client";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/dbconfig";
import UserModel from "@/model/Users";
import TextToVoiceModel from "@/model/TextToSpeech";
import { auth } from "@clerk/nextjs/server";



export async function POST(request: NextRequest) {
  await connectDB();

  const { userId } = await auth();

  const user = await UserModel.findOne({
    clerk_id: userId,
  });

  const { text, voiceId, voiceSampleUrl } =
    await request.json();

  /**
   * ✅ Create Pending Record
   */
  const record =
    await TextToVoiceModel.create({
      user: user?._id,
      text,
      voiceId,
      status: "pending",
    });

  /**
   * ✅ Trigger Background Job
   */
  await inngest.send({
    name: "voice/generate",
    data: {
      recordId: record._id.toString(),
      text,
      voiceSampleUrl,
    },
  });

  return NextResponse.json({
    message: "Generation started",
  });
}