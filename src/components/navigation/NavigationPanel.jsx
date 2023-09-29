import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationPanel.scss";

const links = [
  { path: "/", text: "MODELS" },
  { path: "/", text: "LIFESTYLE" },
  { path: "/", text: "SHOP" },
  { path: "/", text: "TEST DRIVE" },
  { path: "/", text: "LOG-OUT" },
];

const NavigationPanel = () => {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <h3>Motorcycle</h3>
      </div>
      <div className="navigation-item">
        <ul className="ul-element">
          {links.map((link) => (
            <li key={link.text} className="nav-link">
              <NavLink to="/" className="navlink-class">
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
