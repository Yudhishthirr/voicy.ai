
import { inngest } from "@/lib/inngest/client";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/dbconfig";
import UserModel from "@/model/Users";
import TextToVoiceModel from "@/model/TextToSpeech";
import { auth } from "@clerk/nextjs/server";
import { MY_CONSTANTS } from "@/constant";




export async function GET() {
  try {
    // ✅ Get logged in user
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
     // ✅ Connect DB
    await connectDB();

    const user = await UserModel.findOne({
      clerk_id: userId,
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

   

    // ✅ Fetch user created by user
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Fetch Voice Error:", error);

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}



export async function POST(request: NextRequest) {
  try {
    // ✅ Auth user
    const { userId } = await auth();
    const { status } = await request.json();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    // ✅ Find user
    const user = await UserModel.findOne({
      clerk_id: userId,
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // ✅ Fetch generated voices + populate voice name
    const voices = await TextToVoiceModel.find({
      user: user._id,
      status: { $in: ["failled", MY_CONSTANTS.FAILED] },
    })
    .populate({
      path: "voiceId",
      select: "voiceName -_id", // only voiceName
    })
      .select("text voiceId genratedvoice duration createdAt")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: voices,
    });

  } catch (error) {
    console.error("Fetch Voice Error:", error);

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}