import React, { useContext } from "react";

// import styles from "./UserProfile.module.css";
import { UserContext } from "../contexts/UserProvider";

const UserProfile = () => {
  const { loggedIn, user } = useContext(UserContext);

  return (
    <>
      <img
        src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
        alt="User avatar"
      />
      {loggedIn ? (
        <p>
          Logged in as: <em>{user}</em>
        </p>
      ) : (
        <p>Please login to continue</p>
      )}
    </>
  );
};

export default UserProfile;
