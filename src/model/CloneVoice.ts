import mongoose, { Schema, Document } from "mongoose";

export interface CloneVoice extends Document {
  user: mongoose.Types.ObjectId;
  voiceName: string;
  voiceSampleUrl: string;
  // clonedVoiceId?: string;
  duration?: number;
  createdAt: Date;
}

const CloneVoiceSchema: Schema<CloneVoice> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // ✅ LINK USER MODEL
    required: true,
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

  duration: {
    type: Number,
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