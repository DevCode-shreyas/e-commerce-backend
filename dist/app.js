import express from "express";
// import routes
import userRoute from "./routes/user.js";
const app = express();
// using routes
app.use("/api/v1/user", userRoute);
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
