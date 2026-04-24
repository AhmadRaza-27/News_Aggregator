import { useParams } from "react-router-dom";
import dummyNews from "../data/dummyNews";

function ArticleDetails() {
  const { id } = useParams();
  const article = dummyNews.find((item) => item.id === Number(id));

  if (!article) return <p>Article not found.</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p><strong>Source:</strong> {article.source}</p>
      <p><strong>Category:</strong> {article.category}</p>
      <p><strong>Sentiment:</strong> {article.sentiment}</p>
      <p>{article.summary}</p>
    </div>
  );
}

export default ArticleDetails;