import { useEffect, useState } from "react";

function Saved() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedArticles(stored);
  }, []);

  const removeBookmark = (url) => {
    const updated = savedArticles.filter(
      (article) => article.url !== url
    );

    setSavedArticles(updated);

    localStorage.setItem(
      "savedNews",
      JSON.stringify(updated)
    );
  };

  return (
    <div>
      <h1>Saved Articles</h1>

      {savedArticles.length === 0 ? (
        <p>No saved articles yet.</p>
      ) : (
        <div className="news-grid">
          {savedArticles.map((article, index) => (
            <div key={index} className="news-card">
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
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>

                  <button
                    className="bookmark-btn saved"
                    onClick={() => removeBookmark(article.url)}
                    title="Remove from saved"
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;