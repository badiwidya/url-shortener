import mongoose from "mongoose";
const { Schema } = mongoose;

const urlSchema = new Schema(
  {
    long_url: { type: String, required: true },
    short_url: { type: String },
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);

export default URL;
