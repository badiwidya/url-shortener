import crypto from "crypto";

export default generateString = () => {
  return crypto.randomBytes(4).toString("hex");
};
