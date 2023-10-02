import React from "react";
import "./lifestyle.scss";
import NavigationPanel from "../navigation/NavigationPanel";
import MobileNavbar from "../navigation/MobileNavbar";

const LifeStyle = () => {
  return (
    <div className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />
      <div className="lifestyle-container">LifeStyle</div>
    </div>
  );
};

export default LifeStyle;
