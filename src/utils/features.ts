import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "Ecommerece_24",
    })
    .then((c) => console.log(`Connected to DB: ${c.connection.host}`))
    .catch((err) => console.log(err));
};
