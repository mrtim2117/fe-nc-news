import React from "react";
import homeimage from "./news.jpg";

import styles from "./Home.module.css";

const Home = () => {
  //   return <div><img src={homeimage} alt="Home" /></div>
  return (
    <div className={styles.container}>
      <img src={homeimage} alt="Home" className={styles.image} />
    </div>
  );
};

export default Home;
