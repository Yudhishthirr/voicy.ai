import mongoose, { Schema, Document } from "mongoose";

export interface CreditTransaction extends Document {
  user: mongoose.Types.ObjectId;
  credits: number;
  type: "credit" | "debit";
  reason: string;
  createdAt: Date;
}

const CreditTransactionSchema =
  new Schema<CreditTransaction>({
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    credits: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },

    reason: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export default mongoose.models.CreditTransaction ||
mongoose.model("CreditTransaction", CreditTransactionSchema);