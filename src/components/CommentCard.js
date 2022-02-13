import React from "react";

import Vote from "./Vote";

import styles from "./CommentCard.module.css";
import { dateStrFromSql } from "../utils/utils";

const CommentCard = ({ comment }) => {
  const { votes, created_at, author, body, comment_id } = comment;

  const dateStr = dateStrFromSql(created_at);

  return (
    <li className={styles.li}>
      <p className={styles.body}>{body}</p>
      <Vote votes={votes} updateUrl={`/comments/${comment_id}`} />
      <p className={styles.author}>{author}</p>
      <p className={styles.date}>{dateStr}</p>
    </li>
  );
};

export default CommentCard;
