import React from "react";
import { Link } from "react-router-dom";

import Vote from "./Vote";
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
      <div className={styles.div_container}>
        <div className={styles.header_container}>
          <p className={styles.topic}>topic {topic}</p>
          <p className={styles.posted}>Posted by {author}</p>
          <p className={styles.date}>date: {dateStr}</p>
        </div>

        <Link to={`/articles/${article_id}`}>
          <div className={styles.link_container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.body}>{body}</p>
          </div>
        </Link>

        <div className={styles.footer_container}>
          <p className={styles.comments}>{comment_count} Comments</p>
          <Vote
            className={styles.votes}
            votes={votes}
            updateUrl={`/articles/${article_id}`}
          />
        </div>
      </div>
    </li>
  );
};

export default ArticleCard;
