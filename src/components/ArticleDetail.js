import React, { useState, useContext } from "react";
import commentIcon from "./comment.png";

import styles from "./ArticleDetail.module.css";
import { postCommentByArticleId } from "../utils/api";
import { dateStrFromSql } from "../utils/utils";

import { UserContext } from "../contexts/UserProvider";

const ArticleDetail = ({ article }) => {
  const { user } = useContext(UserContext);

  const {
    article_id,
    author,
    title,
    topic,
    created_at,
    body,
    comment_count,
    votes,
  } = article;

  const [commentDisplay, setCommentDisplay] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dateStr = dateStrFromSql(created_at);

  const onAddCommentClick = () => {
    setCommentDisplay(true);
  };

  const onPostClick = (event) => {
    setCommentDisplay(false);
    postCommentByArticleId(article_id, user, commentText);
  };

  const onChangeCommentText = (event) => {
    setCommentText(event.target.value);
  };

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
        <div>
          <img
            src={commentIcon}
            alt="add comment"
            className={styles.commentIcon}
            onClick={onAddCommentClick}
          />
          <p className={styles.commentPara} onClick={onAddCommentClick}>
            Comment
          </p>
        </div>
        {commentDisplay ? (
          <div className={styles.posting_div}>
            <input
              className={styles.posting_input}
              onChange={onChangeCommentText}
              value={commentText}
            ></input>
            <button className={styles.posting_button} onClick={onPostClick}>
              post
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ArticleDetail;
