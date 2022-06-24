import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MyNavbar from "../components/Navbar/MyNavbar";

const MainLayout = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
