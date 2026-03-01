import mongoose, { Schema, Document } from "mongoose";

export interface PricingPlan extends Document {
  name: string;
  price: number; // INR
  credits: number;
  description?: string;
  isActive: boolean;
  createdAt: Date;
}

const PricingPlanSchema = new Schema<PricingPlan>({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  credits: {
    type: Number,
    required: true,
  },

  description: String,

  isActive: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.PricingPlan ||
  mongoose.model<PricingPlan>("PricingPlan", PricingPlanSchema);