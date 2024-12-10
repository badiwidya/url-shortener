import { Router } from "express";
import { shortUrl } from "../controllers/urlController.js";
const router = Router();

router.post("/url", shortUrl);

export default router;
