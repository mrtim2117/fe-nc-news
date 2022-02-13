import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Articles.module.css";

import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleFilter from "./ArticleFilter";
import TopicsNav from "./TopicsNav";
import { UserContext } from "../contexts/UserProvider";

const Articles = () => {
  const { loggedIn } = useContext(UserContext);

  const navigate = useNavigate();
  if (!loggedIn) navigate("/", { replace: true });

  const [articles, setArticles] = useState([]);

  const [topic, setTopic] = useState();
  const [sort_by, setSortBy] = useState();
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort_by, order)
      .then((articlesFromApi) => {
        setIsLoading(false);
        setArticles(articlesFromApi);
      })
      .catch((error) => {
        setErr(true);
        setIsLoading(false);
      });
  }, [order, sort_by, topic]);

  return (
    <section>
      <ArticleFilter
        className={styles.Filter}
        setOrder={setOrder}
        setSortBy={setSortBy}
      />
      <TopicsNav
        className={styles.TopicsNav}
        topic={topic}
        setTopic={setTopic}
      />
      {err ? (
        <p>Oops...error trying to load articles!</p>
      ) : isLoading ? (
        <p>Loading articles...</p>
      ) : (
        <ul className={styles.ul}>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Articles;
