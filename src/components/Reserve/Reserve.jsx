import React from 'react';
import './Reserve.scss';
import NavigationPanel from '../navigation/NavigationPanel';
import MobileNavbar from '../navigation/MobileNavbar';

const Reserve = () => (
  <div className="main-container">
    <MobileNavbar className="mobile-navbar" />
    <NavigationPanel className="left-panel" />
    <div className="lifestyle-container">Reserve</div>
  </div>
);

export default Reserve;
