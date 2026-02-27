import mongoose, { Schema, Document } from "mongoose";

export interface CloneVoice extends Document {
  userId: string;
  voiceName: string;
  voiceSampleUrl: string;
  clonedVoiceId: string;
  duration?: number;
  createdAt: Date;
}

const CloneVoiceSchema: Schema<CloneVoice> = new Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },

  voiceName: {
    type: String,
    required: true,
    trim: true,
  },

  voiceSampleUrl: {
    type: String,
    required: true,
  },

  clonedVoiceId: {
    type: String,
    required: true,
    trim: true,
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

const CloneVoiceModel =
  (mongoose.models.CloneVoice as mongoose.Model<CloneVoice>) ||
  mongoose.model<CloneVoice>("CloneVoice", CloneVoiceSchema);

export default CloneVoiceModel;