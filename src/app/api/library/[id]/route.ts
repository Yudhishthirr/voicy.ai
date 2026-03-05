import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import  connectDB from "@/db/dbconfig";
import UserModel from "@/model/Users";
import TextToVoiceModel from "@/model/TextToSpeech";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log("benchooo.....voiceId")
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

    const { id } = await params;
    console.log("voiceId",id)
    // // ✅ Delete record
    const deletedVoice = await TextToVoiceModel.findOneAndDelete({
      _id: id,
      user: user._id,
    });

    // if (!deletedVoice) {
    //   return NextResponse.json(
    //     { success: false, message: "Voice not found" },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json({
      success: true,
      message: "Voice deleted successfully",
    });

  } catch (error) {

    console.error("Delete Voice Error:", error);

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );

  }
}