import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserProvider";

const Logout = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const onClickLogout = (confirm) => {
    console.log("Logout", confirm);

    if (confirm) {
      logout();
      navigate("/");
    } else {
      console.log("don nothing");
    }
  };

  return (
    <form>
      <h1>Account Logout </h1>
      <h2>Logout</h2>
      <p>Sure you want to logout?</p>
      <button
        onClick={() => {
          onClickLogout(true);
        }}
      >
        Yes
      </button>
      <button onClick={() => onClickLogout(false)}>No</button>
    </form>
  );
};

export default Logout;
