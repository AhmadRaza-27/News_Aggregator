import express from "express";
import { fetchNews } from "../controllers/newsController.js";

const router = express.Router();

// GET /api/news
router.get("/news", fetchNews);

export default router;