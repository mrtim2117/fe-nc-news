import React from "react";
import homeimage from "./news.jpg";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={homeimage} alt="Home" className={styles.image} />
      {/* <p>hello world</p> */}
    </div>
  );
};

export default Home;
