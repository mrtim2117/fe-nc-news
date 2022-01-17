import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./ArticleComments.module.css";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../utils/api";

const ArticleComments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  return (
    <section className={styles.ArticleComments}>
      <p>Some Article comments</p>
      <ul className={styles.ul}>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default ArticleComments;
