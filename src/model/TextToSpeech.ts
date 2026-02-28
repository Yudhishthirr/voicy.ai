import mongoose, { Schema, Document } from "mongoose";

export interface TextToVoice extends Document {
  user: mongoose.Types.ObjectId;
  text: string;
  voiceId: string;
  genratedvoice?: string;
  duration?: number;
  status: string;
  createdAt: Date;
}

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
    type: String,
    required: true,
    trim: true,
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
    enum: ["pending", "ready", "failed"],
    default: "pending",
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