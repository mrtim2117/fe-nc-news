import styles from "./ArticleCard.module.css";

import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <li className={styles.li}>
      <Link to={`/articles/${article_id}`}>
        <p>Topic {topic}</p>
        <p>Posted by {author}</p>
        <p>{created_at}</p>

        <p>{title}</p>

        <p>{body}</p>
        <p>{comment_count} Comments</p>
        <p>{votes} Votes</p>
      </Link>
    </li>
  );
};

export default ArticleCard;
