import { Router } from "express";
import { shortUrl, getUrl } from "../controllers/urlController.js";
const router = Router();

router.post("/short-req", shortUrl);
router.get("/:url", getUrl);

export default router;
