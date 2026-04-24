import express from "express";
import cors from "cors";
import newsRoutes from "./routes/newsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", newsRoutes);

app.get("/", (req, res) => {
  res.send("News API is running...");
});

export default app;