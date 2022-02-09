import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Logout.module.css";

import { UserContext } from "../contexts/UserProvider";

const Logout = () => {
  const { loggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();

  if (!loggedIn) navigate("/", { replace: true });

  const onClickLogout = (confirm) => {
    if (confirm) {
      logout();
      navigate("/");
    } else {
      navigate("/articles");
    }
  };

  return (
    <form>
      <h1 className={styles.h1}>Account Logout </h1>
      <h2 className={styles.h2}>Logout...</h2>
      <p className={styles.p}>Sure you want to logout?</p>
      <button
        className={styles.button}
        onClick={() => {
          onClickLogout(true);
        }}
      >
        Yes
      </button>
      <button className={styles.button} onClick={() => onClickLogout(false)}>
        No
      </button>
    </form>
  );
};

export default Logout;
