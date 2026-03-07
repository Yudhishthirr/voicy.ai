import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  clerk_id: string;
  username: string;
  avatar: string;
  email: string;
  password?: string;

  plan: mongoose.Types.ObjectId;

  isPaid: boolean;
  credit: number;

  planExpiresAt?: Date;

  createdAt: Date;
}

const UserSchema: Schema<User> = new Schema({
  clerk_id: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
   
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  avatar:{
    type:String,
    required:false,
  },
  password: {
    type: String,
    required: false,
    trim: true,
  },
  plan: {
    type: Schema.Types.ObjectId,
    ref: "PricingPlan",
    required: true,
  },

  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  credit:{
    type:Number,
    default:10,
    required:true
  },
  planExpiresAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default UserModel;