import React, { useState, useEffect } from "react";

import styles from "./TopicsNav.module.css";

import { getTopics } from "../utils/api";

const TopicsNav = ({ topic, setTopic }) => {
  const [topics, setTopics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      topics.unshift({ slug: "all", description: "all" });
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  const onTopicClick = (slug) => {
    if (slug === "all") {
      setTopic(null);
    } else {
      setTopic(slug);
    }
  };

  return (
    <section className={styles.section}>
      <p className={styles.current_topic}>
        Current topic: {!topic ? "all" : topic}
      </p>

      {isLoading ? (
        <p>Loading topics...</p>
      ) : (
        topics.map((topic) => {
          return (
            <button
              className={styles.button}
              key={topic.slug}
              onClick={() => onTopicClick(topic.slug)}
            >
              {topic.slug}
            </button>
          );
        })
      )}
    </section>
  );
};

export default TopicsNav;
