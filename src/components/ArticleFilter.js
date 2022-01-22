import React from "react";

import styles from "./ArticleFilter.module.css";

const ArticleFilter = ({ setOrder, setSortBy }) => {
  const onOrder = (event) => {
    setOrder(event.target.value);
  };

  const onSortBy = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section className={styles.section}>
      <label htmlFor="order">sort order</label>
      <select onChange={onOrder} name="order" id="order">
        <option value="DESC">descending</option>
        <option value="ASC">ascending</option>
      </select>
      <label htmlFor="sort_by">sort by</label>
      <select onChange={onSortBy} name="sort_by" id="sort_by">
        <option>select...</option>
        <option>author</option>
        <option>comments</option>
        <option>date</option>
        <option>title</option>
        <option>topic</option>
        <option>votes</option>
      </select>
    </section>
  );
};

export default ArticleFilter;
