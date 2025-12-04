import React from "react";
import NavDash from "./NavDash/NavDash";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <NavDash></NavDash>
    </div>
  );
};

export default Dashboard;
