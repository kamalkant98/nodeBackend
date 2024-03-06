import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // we can define any column type and properties
    },
    email: {
      type: String,
      required: true,
      unique: true, // we can define any column type and properties
    },
    password: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const user = mongoose.model("user", userSchema);
