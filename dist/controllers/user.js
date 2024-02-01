import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({});
        return res.status(201).json({
            status: "success",
            cuccess: true,
            message: `User created successfully, welcome, ${user.name}`,
        });
    }
    catch (error) { }
};
