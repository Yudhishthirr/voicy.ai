import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import connectDB from "@/db/dbconfig";
import TextToVoiceModel from "@/model/TextToSpeech";
import UserModel from "@/model/Users";

import { TextToSpeech } from "@/lib/TextToSpeech";
import { uploadGeneratedAudio } from "@/lib/uploadGeneratedAudio";

/**
 * ======================================
 * ✅ CREATE TEXT → VOICE
 * ======================================
 */
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    /**
     * ✅ Clerk Auth
     */
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    /**
     * ✅ Find Mongo User
     */
    const user = await UserModel.findOne({
      clerk_id: userId,
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    /**
     * ✅ Request Body
     */
    const { text, voiceId, voiceSampleUrl } =
      await request.json();

    console.log("text",text)
    console.log("voiceId",voiceId)
    console.log("voiceSampleUrl",voiceSampleUrl)
    
    if (!text || !voiceId || !voiceSampleUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /**
     * ======================================
     * ✅ STEP 1 — Generate Voice (Replicate)
     * ======================================
     */
    const generated = await TextToSpeech({
      text,
      voiceSampleUrl,
    });
    console.log("generated");
    console.log(generated);

    /**
     * ======================================
     * ✅ STEP 2 — Upload to UploadThing
     * ======================================
     */
    const permanentAudioUrl =
      await uploadGeneratedAudio(
        generated.audioUrl
      );
      
    console.log("permanentAudioUrl")
    console.log(permanentAudioUrl)
    /**
     * ======================================
     * ✅ STEP 3 — Save Database
     * ======================================
     */
    const newVoice =
      await TextToVoiceModel.create({
        user: user._id,
        text,
        voiceId,
        genratedvoice: permanentAudioUrl,
        duration: generated.duration ?? 0,
      });

    return NextResponse.json(
      {
        message: "Voice generated successfully",
        data: newVoice,
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error(
      "TextToVoice POST Error:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to generate voice",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

/**
 * ======================================
 * ✅ GET USER GENERATED VOICES
 * ======================================
 */
export async function GET() {
  try {
    await connectDB();

    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await UserModel.findOne({
      clerk_id: userId,
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    /**
     * ✅ Fetch History
     */
    const voices =
      await TextToVoiceModel.find({
        user: user._id,
      }).sort({ createdAt: -1 });

    return NextResponse.json(
      { voices },
      { status: 200 }
    );

  } catch (error: any) {
    console.error(
      "TextToVoice GET Error:",
      error
    );

    return NextResponse.json(
      { error: "Failed to fetch voices" },
      { status: 500 }
    );
  }
}