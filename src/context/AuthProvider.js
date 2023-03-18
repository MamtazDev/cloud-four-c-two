import React, { createContext, useState } from "react";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [projects, setProjects] = useState([]);

  const userInfo = {
    userList,
    setUserList,
    projects,
    setProjects
  };
  return (
    <div>
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthProvider;
