import React from "react";
import { Link } from "react-router-dom";

import styles from "./ArticleCard.module.css";
import { dateStrFromSql } from "../utils/utils";

const ArticleCard = ({ article }) => {
  const {
    author,
    title,
    topic,
    created_at,
    article_id,
    body,
    comment_count,
    votes,
  } = article;

  const dateStr = dateStrFromSql(created_at);

  return (
    <li className={styles.li}>
      <Link to={`/articles/${article_id}`}>
        <div className={styles.div_container}>
          <p className={styles.topic}>topic {topic}</p>
          <p className={styles.posted}>Posted by {author}</p>
          <p className={styles.date}>date: {dateStr}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.body}>{body}</p>
          <p className={styles.comments}>{comment_count} Comments</p>
          <p className={styles.votes}>{votes} Votes</p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
