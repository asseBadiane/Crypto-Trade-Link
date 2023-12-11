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
      imageUrls,
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
      imageUrls,
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

export const updateTrader = async (req, res, next) => {
  const trader = await Trader.findById(req.params.id);
  if (!trader) return next(errorHandler(404, "Trader not found!"));
  if (req.user && req.user.email !== trader.email)
    return next(errorHandler(401, "You can update only your own Trader!"));
  try {
    const updatedTrader = await Trader.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          description: req.body.description,
          star: req.body.star,
          residence: req.body.residence,
          like: req.body.like,
          phoneNumber: req.body.phoneNumber,
          nationalIdentityNumber: req.body.nationalIdentityNumber,
          picture: req.body.picture,
          levelExperience: req.body.levelExperience,
          sourceOfIncome: req.body.sourceOfIncome,
          bankAccountInfos: req.body.bankAccountInfos,
          imageUrls: req.body.imageUrls,
        },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      trader: updatedTrader,
      message: "Trader updated successfully ✅",
    });
  } catch (error) {
    next(error);
  }
};

export const getTrader = async (req, res, next) => {
  try {
    const trader = await Trader.findById(req.params.id);
  if (!trader) return next(errorHandler(404, "Trader not found!"));
  res.status(200).json(trader);
  } catch (error) {
    next(error);
  }
  
};