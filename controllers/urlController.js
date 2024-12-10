import generateString from "../utils/generateString.js";
import URL from "../models/url.js";

export const shortUrl = async (req, res) => {
  const url = req.body.url;
  try {
    const checkUrl = new URL(url);
    if (!checkUrl) {
      return res.status(400).json({
        error: "Request must a valid url.",
      });
    }
    let checkNewUrl;
    let newUrl;
    do {
      newUrl = generateString();
      checkNewUrl = await URL.find({
        short_url: newUrl,
      });
    } while (checkNewUrl);
    const generatedUrl = await URL.create({
      long_url: url,
      short_url: newUrl,
    });
    res.status(201).json({
      message: "Generated successfully.",
      new_url: newUrl,
    });
  } catch (err) {
    res.status(500).json({
      code: err.code,
      type: err.type,
      message: "AN ERROR OCCURED",
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
      code: err.code,
      type: err.type,
      message: "AN ERROR OCCURED",
    });
  }
};
