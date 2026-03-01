import mongoose, { Schema, Document } from "mongoose";
import "@/model/CloneVoice";
import { MY_CONSTANTS } from "@/constant";


export interface TextToVoice extends Document {
  user: mongoose.Types.ObjectId;
  text: string;
  voiceId: mongoose.Types.ObjectId;
  genratedvoice?: string;
  duration?: number;
  status: string;
  createdAt: Date;
}

export const JOB_STATUS = Object.freeze({
  PENDING: MY_CONSTANTS.PENDING,
  READY: MY_CONSTANTS.READY,
  FAILED: MY_CONSTANTS.FAILED,
});

const TextToVoiceSchema: Schema<TextToVoice> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // ✅ LINK USER MODEL
    required: true,
  },

  text: {
    type: String,
    required: true,
    trim: true,
  },

  voiceId: {
    type: Schema.Types.ObjectId,
    ref: "CloneVoice",
    required: true,
  },
  genratedvoice:{
    type:String,
  },
  duration: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    enum: Object.values(JOB_STATUS),
    default: JOB_STATUS.PENDING,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TextToVoiceModel =
  (mongoose.models.TextToVoice as mongoose.Model<TextToVoice>) ||
  mongoose.model<TextToVoice>("TextToVoice", TextToVoiceSchema);

export default TextToVoiceModel;