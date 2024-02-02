import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, _id, dob } = req.body;
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });
        return res.status(201).json({
            status: "success",
            cuccess: true,
            message: `User created successfully, welcome, ${user.name}`,
        });
    }
    catch (error) {
        return res.status(400).json({
            cuccess: false,
            message: error,
        });
    }
};
