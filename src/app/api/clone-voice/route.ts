import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import connectDB from "@/db/dbconfig";
import CloneVoiceModel from "@/model/CloneVoice";
import UserModel from "@/model/Users";

export async function POST(request: NextRequest) {
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

    
    const body = await request.json();

    const {
      voiceName,
      voiceSampleUrl,
    //   clonedVoiceId,
      duration,
    } = body;

   
    if (!voiceName || !voiceSampleUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    
    const newVoice = await CloneVoiceModel.create({
      user: user._id, // 🔥 relation here
      voiceName,
      voiceSampleUrl,
    //   clonedVoiceId,
      duration,
    });

    return NextResponse.json(
      {
        message: "Voice cloned successfully",
        voice: newVoice,
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Voice Clone Error:", error);

    return NextResponse.json(
      {
        error: "Failed to create voice clone",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// get voices

export async function GET() {
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
       * ✅ Fetch User Voices
       */
      const voices = await CloneVoiceModel
        .find({ user: user._id })
        .sort({ createdAt: -1 });
  
      return NextResponse.json(
        {
          voices,
        },
        { status: 200 }
      );
  
    } catch (error: any) {
      console.error(error);
  
      return NextResponse.json(
        { error: "Failed to fetch voices" },
        { status: 500 }
      );
    }
  }