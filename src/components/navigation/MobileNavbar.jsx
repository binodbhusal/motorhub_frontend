import React, { useState } from "react";
import "./MobileNabar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const links = [
  { path: "/", text: "Motors" },
  { path: "/Reserve", text: "Reserve" },
  { path: "/MyReservations", text: "MyReservations" },
  { path: "/AddMotor", text: "AddMotor" },
  { path: "/DeleteMotor", text: "DeleteMotor" },
  { path: "/NoMatch", text: "NoMatch" },
  { path: "/log-out", text: "LOG-OUT" },
];

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayNavbar, setDisplayNavbar] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDisplayNavbar(!displayNavbar);
  };
  return (
    <>
      <div className={`navbar-container ${displayNavbar ? "display" : ""}`}>
        <div className="mobile-toggle-menu" onClick={handleToggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <div className="mobile-navbar-logo">
          <img src={logo} alt="Logo" className="motor-logo" />
        </div>
      </div>
      <div className={`navigation-item ${menuOpen ? "open" : ""}`}>
        <ul className="ul-element">
          {links.map((link) => (
            <li key={link.text} className="nav-link">
              <NavLink to={link.path} className="navlink-class">
                <p className="nav-item">{link.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="social-media-container">
          <a href="#">
            <i className="bi bi-facebook" />
          </a>
          <a href="#">
            <i className="bi bi-twitter" />
          </a>

          <a href="#">
            <i className="bi bi-twitter" />
          </a>
          <a href="#">
            <i className="bi bi-github" />
          </a>
          <a href="#">
            <i className="bi bi-instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
