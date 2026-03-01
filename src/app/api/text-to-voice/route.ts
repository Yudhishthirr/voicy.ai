import { inngest } from "@/lib/inngest/client";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/dbconfig";
import UserModel from "@/model/Users";
import TextToVoiceModel from "@/model/TextToSpeech";
import { auth } from "@clerk/nextjs/server";
import { MY_CONSTANTS } from "@/constant";



export async function POST(request: NextRequest) {
  await connectDB();

  const { userId } = await auth();

  const user = await UserModel.findOne({
    clerk_id: userId,
  });

  const { text, voiceId, voiceSampleUrl } =
    await request.json();

  
    let creditsRequired = 0;
    creditsRequired = Math.ceil((text.length / 100) * 2);

    console.log("CREDITS_REQUIRED",creditsRequired);
   
    if (user.credit < creditsRequired) {

      await TextToVoiceModel.create({
        user: user?._id,
        text,
        voiceId,
        status: MY_CONSTANTS.FAILED,
      });



      return NextResponse.json({
        message: MY_CONSTANTS.INSUFFICIENT_CREDITS,
        success: false,
      });
    }
 
    const record = await TextToVoiceModel.create({
        user: user?._id,
        text,
        voiceId,
        status: MY_CONSTANTS.PENDING,
    });

  
    const result = await inngest.send({
      name: "voice/generate",
      data: {
        recordId: record._id.toString(),
        text,
        userId, // ⭐ VERY IMPORTANT
        voiceSampleUrl,
      },
    });


    console.log("result of inggest");
    console.log(result);


    return NextResponse.json({
      message: MY_CONSTANTS.GENERATION_STARTED,
      result,
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
      status: { $in: ["ready", MY_CONSTANTS.READY] },
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