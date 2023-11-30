import mongoose from "mongoose";

const traderSchema = mongoose.Schema({
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
        default: 0
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
        default: 0
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 12,
        max: 14,
        unique: true,
        default: "221778543652",
    },
    nationalIdentityNumber: {
        type: Number,
        required: true,
        min: 12,
        max: 20,
        unique: true,
        default: "12345678901234567890",

    },
    picture: {
        type: String,
        required: true,
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
})

export default mongoose.model("Trader", traderSchema)