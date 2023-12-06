import Trader from "../models/Trader.model.js";
import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const createTrader = async (req, res, next) => {
  try {
    const {
      username,
      email,
      description,
      star,
      crypto,
      residence,
      like,
      phoneNumber,
      nationalIdentityNumber,
      picture,
      levelExperience,
      sourceOfIncome,
      bankAccountInfos,
      imageUrls
    } = req.body;

    // Vérify if trader already exists in database
    const existingTrader = await Trader.findOne({ email });
    if (existingTrader) {
      return next(errorHandler(400, "Trader already exists"));
    }

    // Vérify user is a trader
    const existingRoleTrader = await User.findOne({ role: "trader" });
    if (!existingRoleTrader) {
      return next(errorHandler(400, "Error, you should be a trader first"));
    }

    // Create a new Trader
    const newTrader = new Trader({
      username,
      email,
      description,
      star,
      crypto,
      residence,
      like,
      phoneNumber,
      nationalIdentityNumber,
      picture,
      levelExperience,
      sourceOfIncome,
      bankAccountInfos,
      imageUrls
    });

    // Enregistrer le nouveau trader dans la base de données
    await newTrader.save();

    return res.status(200).json({
      success: true,
      trader: newTrader,
      message: "Trader created successfully ✅",
    });
  } catch (error) {
    console.error(error);
    return next(errorHandler(500, "Trader creation failed"));
  }
};
