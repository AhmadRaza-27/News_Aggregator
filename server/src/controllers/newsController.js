import { getNews } from "../services/newsService.js";

export const fetchNews = async (req, res) => {
  try {
    const { category } = req.query;

    const articles = await getNews(category);

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news" });
  }
};