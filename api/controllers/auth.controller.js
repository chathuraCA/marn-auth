import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const singup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashpassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created sucsessfull" });
  } catch (error) {
    next(errorHandler(500, "bla bla"));
  }
};

export const singin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid crudentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
   const {password:hashpassword,...rest}=validUser._doc;
   
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
