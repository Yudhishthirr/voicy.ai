import mongoose, { Schema, Document } from "mongoose";

export interface TextToVoice extends Document {
  userId: string;
  text: string;
  voiceId: string;
  audioUrl: string;
  duration?: number;
  createdAt: Date;
}

const TextToVoiceSchema: Schema<TextToVoice> = new Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
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

  audioUrl: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    required: false,
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