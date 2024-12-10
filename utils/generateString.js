import crypto from "crypto";

const generateString = function () {
  return crypto.randomBytes(4).toString("hex");
};

export default generateString;
