import generateString from "../utils/generateString.js";
import URL from "../models/url.js";

export const shortUrl = async (req, res) => {
  const url = req.body.url;
  try {
    const checkUrl = new URL(url);
    if (!checkUrl) {
      return res.json({
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
    res.json({
      message: "Generated successfully.",
      new_url: newUrl,
    });
  } catch (err) {
    res.json({
      code: err.code,
      type: err.type,
      message: "AN ERROR OCCURED",
    });
  }
};
