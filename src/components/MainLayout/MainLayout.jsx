/* eslint-disable no-unused-vars */
import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <div className="py-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
