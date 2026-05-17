import axios from "axios";

// Swapping localhost for your live Cloudflare Worker URL
const API_URL = "https://YOUR-EXACT-WORKER-NAME.ahmadraza-bckk.workers.dev/api/news";

export const fetchNews = async (category = "") => {
  const response = await axios.get(API_URL, {
    params: { category }
  });

  return response.data;
};