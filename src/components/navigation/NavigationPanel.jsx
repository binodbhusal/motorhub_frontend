import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationPanel.scss';

import logo from '../../assets/logo.png';
import Log from '../user/Logout';

const links = [
  { path: '/', text: 'Motors' },
  { path: '/Reserve', text: 'Reserve' },
  { path: '/MyReservations', text: 'My Reservations' },
  { path: '/AddMotor', text: 'Add Motor' },
  { path: '/DeleteMotor', text: 'Delete Motor' },
];

const NavigationPanel = () => (
  <div className="navigation-container">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="motor-logo" />
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
        <li className="nav-link">
          <a>
            <p className="nav-item"><Log /></p>
          </a>
        </li>
      </ul>
    </div>
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
);

export default NavigationPanel;
