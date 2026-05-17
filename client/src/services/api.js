import axios from "axios";

const api = axios.create({
  // Point this to the base /api folder on Vercel
  baseURL: "https://news-aggregator-backend.vercel.app/api", 
});

export default api;