import React from "react";

export const authContext = React.createContext({
  isUserAuthenticated: false,
  uname: "",
});
