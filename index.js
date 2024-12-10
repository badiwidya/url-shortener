import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_HOST)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
  console.log(`Server started at ${process.env.PORT}`);
});
