import React from "react";
import "./MobileNabar.scss";
import logo from "../../assets/logo.png";

const links = [
  { path: "/", text: "MODELS" },
  { path: "/lifestyle", text: "LIFESTYLE" },
  { path: "/shop", text: "SHOP" },
  { path: "/test-drive", text: "TEST DRIVE" },
  { path: "/log-out", text: "LOG-OUT" },
];

const MobileNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="mobile-toggle-menu">toggle</div>
      <div className="mobile-navbar-logo">
        <img src={logo} alt="Logo-Image" className="motor-logo" />
      </div>
    </div>
  );
};

export default MobileNavbar;
