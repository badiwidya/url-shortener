import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import urlRoute from "./routes/urlRoute.js";
import "dotenv/config";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.use("/api", urlRoute);
app.get("/", (req, res) => {
  res.status(200).json({
    endpoint: "/api/url",
    method: "POST",
    "header-type": "application/json",
  });
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_HOST)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => console.log(err));
  console.log(`Server started at ${process.env.PORT}`);
});
