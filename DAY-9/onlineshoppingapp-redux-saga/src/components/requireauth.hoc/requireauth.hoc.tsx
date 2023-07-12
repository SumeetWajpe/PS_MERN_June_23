import React from "react";
import { useAuth } from "../hooks/auth.hook";

const RequireAuth: React.FC = () => {
  const user = useAuth();
  return <div></div>;
};

export default RequireAuth;
