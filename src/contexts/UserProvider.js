import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    setLoggedIn(false);
    setUser("");
  };

  const login = (username) => {
    setUser(username);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ user, logout, loggedIn, login }}>
      {children}
    </UserContext.Provider>
  );
};
