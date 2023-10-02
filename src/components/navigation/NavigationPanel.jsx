import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationPanel.scss";
import logo from "../../assets/logo.png";

const links = [
  { path: "/", text: "MODELS" },
  { path: "/lifestyle", text: "LIFESTYLE" },
  { path: "/shop", text: "SHOP" },
  { path: "/test-drive", text: "TEST DRIVE" },
  { path: "/log-out", text: "LOG-OUT" },
];

const NavigationPanel = () => {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src={logo} alt="Logo-Image" className="motor-logo" />
      </div>
      <div className="navigation-item">
        <ul className="ul-element">
          {links.map((link) => (
            <li key={link.text} className="nav-link">
              <NavLink to={link.path} className="navlink-class">
                <p className="nav-item">{link.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="social-media-container">
        <a href="#">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>

        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i className="bi bi-github"></i>
        </a>
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default NavigationPanel;
