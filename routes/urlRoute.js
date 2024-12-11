import { Router } from "express";
import { shortUrl } from "../controllers/urlController.js";
import { body } from "express-validator";
const router = Router();

router.post(
  "/url",
  [
    body("url")
      .notEmpty()
      .trim()
      .isURL({
        require_protocol: false,
        require_tld: true,
      })
      .withMessage("Invalid URL format"),
  ],
  shortUrl
);

export default router;
