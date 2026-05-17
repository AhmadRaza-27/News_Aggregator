import axios from "axios";

// Point this directly to the full news endpoint on Vercel
const API_URL = "https://news-aggregator-backend.vercel.app/api/news";

export const fetchNews = async (category = "") => {
  const response = await axios.get(API_URL, {
    params: { category }
  });

  return response.data;
};