import React from "react";
import NavigationPanel from "../navigation/NavigationPanel";
import MobileNavbar from "../navigation/MobileNavbar";
import { Routes, Route } from "react-router-dom";
import Motor from "../motor/Motor";
import "./mainpage.scss";

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <MobileNavbar />
      <NavigationPanel />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Motor />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
