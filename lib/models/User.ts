import { Role, Status } from "@/lib/enum";
import mongoose from "mongoose";

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  role: Role;
  status: Status;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

UserSchema.index({ fullName: 1 });
UserSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
