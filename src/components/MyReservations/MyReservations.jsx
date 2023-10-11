import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchReservations } from '../../redux/slice/fetchdata';

const MyReservations = () => {
  const dispatch = useDispatch();
  const userId = 2; // Replace with the actual user ID you want to fetch reservations for

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);
  const { reserves, isLoading, isError } = useSelector((state) => state.reserve);

  let reserveList;
  if (isLoading) {
    reserveList = 'Loading...';
  } else if (isError) {
    reserveList = `Error: ${isError}`;
  } else {
    reserveList = (
      <div>

        <h1>Reserve List:</h1>

        <ul>
          {reserves.map((myreserve) => (
            <li key={myreserve.id}>
              <p>
                CityName:
                {' '}
                {myreserve.city_name}
              </p>
              <p>
                Reserve Date:
                {' '}
                {myreserve.reserve_date}
              </p>
              <p>
                Reserve Brand:
                {' '}
                {myreserve.motor ? myreserve.motor.brand_name : 'N/A'}
                {myreserve.motor ? myreserve.motor.model_no : 'N/A'}

              </p>

            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>{reserveList}</div>;
};

export default MyReservations;
