import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";
import { UserContext } from "../contexts/UserProvider";

const Nav = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <nav className={styles.Nav_container}>
      <Link className={styles.Nav_link} to={"/"}>
        Home
      </Link>
      <Link to={"/profile"} className={styles.Nav_link}>
        Profile
      </Link>
      {loggedIn ? (
        <Link to={`/logout`} className={styles.Nav_link}>
          Logout
        </Link>
      ) : (
        <Link to={`/login`} className={styles.Nav_link}>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Nav;
