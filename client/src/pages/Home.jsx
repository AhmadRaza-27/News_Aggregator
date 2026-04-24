import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";
import NewsCard from "../components/NewsCard";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const categories =
        JSON.parse(localStorage.getItem("newsCategories")) || [];

      let allNews = [];

      if (categories.length === 0) {
        const data = await fetchNews();
        allNews = data;
      } else {
        for (let category of categories) {
          const data = await fetchNews(category);
          allNews = [...allNews, ...data];
        }
      }

      setArticles(allNews);
    };

    loadNews();
  }, []);

  return (
    <div>
      <h1>Top News</h1>

      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;