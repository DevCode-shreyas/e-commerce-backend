import express from "express";
// import routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello from express");
});
// using routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
