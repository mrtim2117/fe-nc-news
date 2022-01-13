import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../utils/api";
import ArticleDetail from "./ArticleDetail";
import ArticleComments from "./ArticleComments";

const Article = () => {
  // Use params to get id
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <section>
      <ArticleDetail article={article} />
      <ArticleComments />
    </section>
  );
};

export default Article;
