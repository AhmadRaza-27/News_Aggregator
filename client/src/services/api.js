import axios from "axios";

const api = axios.create({
  // Make sure you keep the /api at the very end!
  baseURL: "https://YOUR-EXACT-WORKER-NAME.ahmadraza-bckk.workers.dev/api/news", 
});

export default api;