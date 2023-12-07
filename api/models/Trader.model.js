import mongoose from "mongoose";

const traderSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      default: 0,
    },
    crypto: {
      type: String,
      required: true,
      enum: ["BTC", "ETH", "USDT"],
      default: "BTC",
    },
    residence: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    phoneNumber: {
      type: String,
      required: true,
      min: 0,
      max: 99999999999999,
      unique: true,
      default: 221778543652,
    },
    nationalIdentityNumber: {
      type: String,
      required: true,
      min: 0,
      max: 99999999999999999999,
      unique: true,
      default: 1783456901267890,
    },
    levelExperience: {
      type: Number,
      default: 0,
      min: 0,
      max: 20,
      required: true,
    },
    sourceOfIncome: {
      type: String,
      required: true,
    },
    bankAccountInfos: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trader", traderSchema);
