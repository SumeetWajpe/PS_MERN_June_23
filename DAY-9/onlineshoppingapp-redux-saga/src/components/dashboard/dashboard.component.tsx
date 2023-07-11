import React from "react";
import Header from "../header/header.component";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Dashboard;
