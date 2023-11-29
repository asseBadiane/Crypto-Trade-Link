
import User from "../models/User.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt";

export const user = (req, res) => {
  res.send("Hello World!, this is a test user");
};


export const updateUser = async (req, res, next )  => {
  if (req.user.id !== req.params.id ) return next(errorHandler(401,"You can update only your own account!"));
    try {
      if (req.body.password) {
          req.body.password = await bcrypt.hash(req.body.password, 10)
      }
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
          $set:{
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              role: req.body.role,
              avatar: req.body.avatar,
          },
      }, {new: true}
      )
      
     const { password: pass, ...rest } = updatedUser._doc
      res.status(200).json(rest)
  } catch (error) {
      next(error)
  }
}

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id ) return next(errorHandler(401,"You can update only your own account!"));
    try {
       await User.findByIdAndDelete(req.params.id)
       res.clearCookie('access_token') // delete cookie
      res.status(200).json("User deleted successfully!" )
    } catch (error) {
        next(error)
    }
}