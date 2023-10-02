import React, { useState } from 'react';
import './MobileNabar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const links = [
  { path: '/', text: 'MODELS' },
  { path: '/lifestyle', text: 'LIFESTYLE' },
  { path: '/shop', text: 'SHOP' },
  { path: '/test-drive', text: 'TEST DRIVE' },
  { path: '/log-out', text: 'LOG-OUT' },
];

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="navbar-container">
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
