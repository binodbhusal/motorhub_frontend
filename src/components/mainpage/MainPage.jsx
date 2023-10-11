import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationPanel from "../navigation/NavigationPanel";
import MobileNavbar from "../navigation/MobileNavbar";
import Motor from "../motor/Motor";
import "./mainpage.scss";

const MainPage = () => (
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

export default MainPage;
