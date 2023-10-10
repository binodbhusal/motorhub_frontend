import React from 'react';
import { Link } from 'react-router-dom';

const ReserveConfirm = () => (
  <>
    <p>
      Your selected motor has been reserved. Please visit our store location for further process.
      Thank you for the reservation.

    </p>
    <h5>
      Please click
      {' '}
      <Link to="/MyReservations">here</Link>
      {' '}
      to see your list of reservations.
    </h5>
  </>
);

export default ReserveConfirm;
