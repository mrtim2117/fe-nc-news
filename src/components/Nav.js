import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";
import { UserContext } from "../contexts/UserProvider";

const Nav = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <nav className={styles.Nav_container}>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      {loggedIn ? (
        <Link to={`/logout`}>Logout</Link>
      ) : (
        <Link to={`/login`}>Login</Link>
      )}
    </nav>
  );
};

export default Nav;
