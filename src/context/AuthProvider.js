import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/user/list", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUserList(response.data.users));
  }, []);

  const userInfo = {
    userList,
    setUserList,
  };
  return (
    <div>
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthProvider;
