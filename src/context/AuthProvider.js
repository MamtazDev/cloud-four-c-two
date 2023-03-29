import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
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
      .then((response) => setUserList(response.data.users))
      .catch((err) => {
        if (err.response.status === 403) {
        navigate("/")
        }
      });
  }, [navigate]);

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
