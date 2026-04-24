import axios from "axios";

const API_URL = "http://localhost:5000/api/news";

export const fetchNews = async (category = "") => {
  const response = await axios.get(API_URL, {
    params: { category }
  });

  return response.data;
};