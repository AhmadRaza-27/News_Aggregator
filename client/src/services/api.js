import axios from "axios";

const api = axios.create({
  // Make sure you keep the /api at the very end!
  baseURL: "https://YOUR-BACKEND-URL-HERE.ahmadraza-bckk.workers.dev/api", 
});

export default api;