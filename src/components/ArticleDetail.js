import React from "react";

import styles from "./ArticleDetail.module.css";
import { dateStrFromSql } from "../utils/utils";

const ArticleDetail = ({ article }) => {
  const { author, title, topic, created_at, body, comment_count, votes } =
    article;

  const dateStr = dateStrFromSql(created_at);

  return (
    <section>
      <div className={styles.ArticleDetail}>
        <p className={styles.topic}>topic {topic}</p>
        <p className={styles.posted}>Posted by {author}</p>
        <p className={styles.date}>{dateStr}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.body}>{body}</p>
        <p className={styles.comments}>{comment_count} Comments</p>
        <p className={styles.votes}>{votes} Votes</p>
      </div>
    </section>
  );
};

export default ArticleDetail;
