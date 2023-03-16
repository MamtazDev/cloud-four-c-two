import React, { createContext, useState } from "react";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

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
