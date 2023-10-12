import React, { useState } from 'react';
import './MobileNabar.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { logOut } from '../../redux/slice/userSlice';

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
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

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
        <ul className="ul-element">
          {links.map((link) => (
            <li key={link.text} className="nav-link">
              <NavLink to={link.path} className="navlink-class">
                <p className="nav-item">{link.text}</p>
              </NavLink>
            </li>
          ))}

          <li className="nav-link">
            <a className="navlink-class nav-button" onClick={logOutHandler}>
              <p className="nav-item">LOG-OUT</p>
            </a>
          </li>
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
