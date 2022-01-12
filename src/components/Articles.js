import styles from "./Articles.module.css";

import React from "react";
import { useState, useEffect } from "react";

import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  console.log("RENDERING: ", articles);

  return (
    <section>
      <p>Some Articles</p>
      <ul className={styles.ul}>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
