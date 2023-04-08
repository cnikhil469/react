import React from "react";

export const UserContext = React.createContext();

const theme = {
  firstName: "nikhil",
  lastName: "chappalli",
};

export const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={theme}>{children}</UserContext.Provider>;
};
