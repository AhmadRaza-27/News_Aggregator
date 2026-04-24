import { useState, useEffect } from "react";
import { fetchNews } from "../services/newsService";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";

function Search() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();

        const cleanArticles = data.filter(
          (article) => article.title && article.url
        );

        setArticles(cleanArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const filteredNews = articles.filter((article) =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <div className="search-page">
      <h1>Search News</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="news-grid">
        {filteredNews.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Search;