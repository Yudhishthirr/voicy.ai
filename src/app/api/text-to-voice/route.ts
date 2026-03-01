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


// export async function GET() {
//   try {
//     // ✅ Get logged in user
//     const { userId } = await auth();

//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const user = await UserModel.findOne({
//       clerk_id: userId,
//     });

//     if (!user) {
//       return NextResponse.json(
//         { error: "User not found" },
//         { status: 404 }
//       );
//     }

//     // ✅ Connect DB
//     await connectDB();

//     // ✅ Fetch voices created by user
//     const voices = await TextToVoiceModel.find({
//       user: user._id,
//       status: "ready",
//     })
//       .select("text voiceId genratedvoice duration createdAt")
//       .sort({ createdAt: -1 });

//     return NextResponse.json({
//       success: true,
//       data: voices,
//     });
//   } catch (error) {
//     console.error("Fetch Voice Error:", error);

//     return NextResponse.json(
//       { success: false, message: "Server Error" },
//       { status: 500 }
//     );
//   }
// }



export async function GET() {
  try {
    // ✅ Auth user
    const { userId } = await auth();

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
      status: "ready",
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