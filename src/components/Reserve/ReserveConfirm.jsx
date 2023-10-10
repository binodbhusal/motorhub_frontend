import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from '../navigation/MobileNavbar';
import NavigationPanel from '../navigation/NavigationPanel';
import './Reserve.scss';

const ReserveConfirm = () => (
  <div className="main-container">
    <MobileNavbar className="mobile-navbar" />
    <NavigationPanel className="left-panel" />

    <div className="lifestyle-container reserve-details">
      <div className="second-cont">
        <div className="reserved-messages">
          <p>
            Your selected motor has been reserved.
            Please visit our store location for further process.
            Thank you for the reservation.
          </p>
          <h5>
            Please click
            {' '}
            <Link to="/MyReservations">here</Link>
            {' '}
            to see your list of reservations.
          </h5>
        </div>
      </div>
    </div>
  </div>
);

export default ReserveConfirm;
