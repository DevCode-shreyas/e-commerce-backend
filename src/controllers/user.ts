import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";

export const newUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({});

    return res.status(201).json({
      status: "success",
      cuccess: true,
      message: `User created successfully, welcome, ${user.name}`,
    });
  } catch (error) {}
};
