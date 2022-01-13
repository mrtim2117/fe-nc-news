import React from "react";

import styles from "./CommentCard.module.css";
import { dateStrFromSql } from "../utils/utils";

const CommentCard = ({ comment }) => {
  const { comment_id, votes, created_at, author, body } = comment;

  const dateStr = dateStrFromSql(created_at);

  return (
    <li className={styles.li}>
      <p className={styles.body}>{body}</p>
      <p className={styles.vote}>{votes} Votes</p>
      <button>+ Vote</button>
      <button>- Vote</button>
      <p className={styles.author}>{author}</p>
      <p className={styles.date}>{dateStr}</p>
    </li>
  );
};

export default CommentCard;
