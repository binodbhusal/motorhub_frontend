import React, { useState } from 'react';
import './MobileNabar.scss';
import { NavLink } from 'react-router-dom';
import Log from '../user/Logout';
import logo from '../../assets/logo.png';

const links = [
  { path: '/', text: 'Motors' },
  { path: '/Reserve', text: 'Reserve' },
  { path: '/MyReservations', text: 'My Reservations' },
  { path: '/AddMotor', text: 'Add Motor' },
  { path: '/DeleteMotor', text: 'Delete Motor' },
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
      <div className={`navbar-container ${displayNavbar ? 'display' : ''}`}>
        <div className="mobile-toggle-menu" onClick={handleToggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <div className="mobile-navbar-logo">
          <img src={logo} alt="Logo" className="motor-logo" />
        </div>
      </div>
      <div className={`navigation-item ${menuOpen ? 'open' : ''}`}>
        <ul className="ul-element gap-6">
          {links.map((link) => (
            <li key={link.text} className="nav-link mt-3">
              <NavLink to={link.path} className="navlink-class">
                <p className="nav-item">{link.text}</p>
              </NavLink>
            </li>
          ))}
          <span className="absolute mr-96 mt-12"><Log /></span>

        </ul>

        <div className="social-media-container">
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter" />
          </a>

          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" aria-label="GitHub">
            <i className="bi bi-github" />
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
