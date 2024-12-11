import generateString from "../utils/generateString.js";
import URL from "../models/url.js";
import { validationResult } from "express-validator";

export const shortUrl = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  try {
    const { url } = req.body;
    let checkNewUrl;
    let newUrl;
    do {
      newUrl = generateString();
      checkNewUrl = await URL.find({
        short_url: newUrl,
      });
    } while (!checkNewUrl);
    const generatedUrl = new URL({
      long_url: url,
      short_url: newUrl,
    });
    await generatedUrl.save();
    res.status(201).json({
      message: "Generated successfully.",
      new_url: newUrl,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal Server Error",
    });
  }
};

export const getUrl = async (req, res) => {
  const url = req.params.url;
  try {
    const checkUrl = await URL.findOne({
      short_url: url,
    });
    if (!checkUrl) {
      return res.status(404).json({
        message: "URL not found.",
      });
    }
    res.redirect(`${checkUrl.long_url}`);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal Server Error",
    });
  }
};
