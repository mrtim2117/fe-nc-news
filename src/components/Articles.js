import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Articles.module.css";

import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleFilter from "./ArticleFilter";
import TopicsNav from "./TopicsNav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [topic, setTopic] = useState();
  const [sort_by, setSortBy] = useState();
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const searchTopic = searchParams.get("topic");
  const searchSortBy = searchParams.get("sort_by");
  const searchOrder = searchParams.get("order");

  console.log("queries", topic, sort_by, order);

  useEffect(() => {
    getArticles(topic, sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [order, sort_by, topic]);

  return (
    <section>
      <ArticleFilter setOrder={setOrder} setSortBy={setSortBy} />
      <TopicsNav topic={topic} setTopic={setTopic} />
      <ul className={styles.ul}>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
