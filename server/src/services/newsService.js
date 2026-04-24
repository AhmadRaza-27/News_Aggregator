import axios from "axios";

export const getNews = async (category = "") => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await axios.get(url);

    return response.data.articles;
  } catch (error) {
    console.error("News API error:", error.message);
    throw error;
  }
};