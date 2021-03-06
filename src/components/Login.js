import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserProvider";
import styles from "./Login.module.css";
import { getUsers } from "../utils/api";

const Login = () => {
  const { login } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("tickle122");
  const [isLoading, setIsLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((usersFromApi) => {
        setUsers(
          usersFromApi.map((userFromApi) => {
            setIsLoading(false);
            return userFromApi.username;
          })
        );
      })
      .catch((error) => {
        setErr(true);
      });
  }, []);

  const onLoginClick = (event) => {
    if (users.includes(username)) {
      setFailed(false);
      login(username);
      navigate("/articles");
    } else {
      setFailed(true);
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  if (err) {
    return <p>Unable to load users!</p>;
  } else {
    if (isLoading) return <p>Loading...</p>;
  }

  return (
    <form onSubmit={onLoginClick}>
      <h1 className={styles.h1}>Acount Login</h1>
      <h2 className={styles.h2}>Please log-in...</h2>
      <label htmlFor="login">Username</label>
      <input onChange={onChangeUsername} id="login" value={username}></input>
      <button type="submit">Login</button>
      {failed ? <p>Invalied username</p> : null}
    </form>
  );
};

export default Login;
