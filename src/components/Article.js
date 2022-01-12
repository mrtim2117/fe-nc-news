import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../utils/api";

const Article = () => {
  // Use params to get id
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  console.log("Article: ", article);

  return (
    <section>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.title}</p>
      <p>{article.body}</p>
      <p>{article.topic}</p>
      <p>{article.comment_count} Comments</p>
    </section>
  );
};

export default Article;
