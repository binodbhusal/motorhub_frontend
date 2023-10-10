import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationPanel.scss';
import logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slice/userSlice';

const links = [
  { path: '/', text: 'Motors' },
  { path: '/Reserve', text: 'Reserve' },
  { path: '/MyReservations', text: 'MyReservations' },
  { path: '/AddMotor', text: 'AddMotor' },
  { path: '/DeleteMotor', text: 'DeleteMotor' },
];

const NavigationPanel = () => {
  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(logOut())
  }

  return(
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
            <a className="navlink-class nav-button" onClick={logOutHandler}>
              <p className="nav-item">LOG-OUT</p>
            </a>
          </li>
        </ul>
      </div>
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
)};

export default NavigationPanel;
