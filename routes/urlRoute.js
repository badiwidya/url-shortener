import { Router } from "express";
import { shortUrl, getUrl } from "../controllers/urlController.js";
const router = Router();

router.post("/url", shortUrl);
router.get("/:url", getUrl);

export default router;
