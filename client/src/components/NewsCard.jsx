import { useState, useEffect } from "react";

function NewsCard({ article }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedNews")) || [];

    const alreadySaved = savedArticles.find(
      (item) => item.url === article.url
    );

    if (alreadySaved) {
      setSaved(true);
    }
  }, [article.url]);

  const handleSave = () => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedNews")) || [];

    const alreadySaved = savedArticles.find(
      (item) => item.url === article.url
    );

    if (!alreadySaved) {
      const updated = [...savedArticles, article];
      localStorage.setItem("savedNews", JSON.stringify(updated));
      setSaved(true);
    }
  };

  return (
    <div className="news-card">
      <img
        src={article.urlToImage || "https://via.placeholder.com/300"}
        alt={article.title}
      />

      <div className="news-content">
        <h3>{article.title}</h3>

        <p>
          <strong>Source:</strong> {article.source?.name}
        </p>

        <p>{article.description}</p>

        <div className="news-actions">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>

          <button
            className={`bookmark-btn ${saved ? "saved" : ""}`}
            onClick={handleSave}
            title="Save article"
          >
            <svg
              className="bookmark-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M6 3H18C18.5523 3 19 3.44772 19 4V21L12 16L5 21V4C5 3.44772 5.44772 3 6 3Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;