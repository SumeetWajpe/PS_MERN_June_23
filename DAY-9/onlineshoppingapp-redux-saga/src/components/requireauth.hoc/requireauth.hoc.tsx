import React, { PropsWithChildren } from "react";
import { useAuth } from "../hooks/auth.hook";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const user = useAuth(); // custom hook usage
  const location = useLocation(); // react-router-dom
  if (!user.isUserAuthenticated) {
    return <Navigate to="/" state={location.pathname} />; // react-router-dom
  }
  return <>{props.children}</>;
};

export default RequireAuth;
