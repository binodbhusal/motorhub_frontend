import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/slice/fetchdata';
import MobileNavbar from '../navigation/MobileNavbar';
import NavigationPanel from '../navigation/NavigationPanel';
import './myReservations.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const userId = 2; // Replace with the actual user ID you want to fetch reservations for
  const { reserves, isLoading, isError } = useSelector((state) => state.reserve);

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);

  let reserveList;
  if (isLoading) {
    reserveList = 'Loading...';
  } else if (isError) {
    reserveList = `Error: ${isError}`;
  } else {
    reserveList = (
      <div className="main-container">
        <MobileNavbar className="mobile-navbar" />
        <NavigationPanel className="left-panel" />

        <div className="lifestyle-container reserve-details">
          <div className="second-cont">
            <h1 className="list-reserved-title">Reserved List:</h1>
            <ul>
              {reserves.map((myreserve) => (
                <div key={myreserve.id} className="single-reservation-cont">
                  <li key={myreserve.id}>
                    <p>
                      <span>CityName:</span>
                      {' '}
                      <span className="bold-reservaiton">{myreserve.city_name}</span>
                    </p>
                    <p>
                      <span>Reserve Date:</span>
                      {' '}
                      <span className="bold-reservaiton">{myreserve.reserve_date}</span>
                    </p>
                    <p>
                      <span>Reserve Brand:</span>
                      {' '}
                      <span className="bold-reservaiton brand-name">
                        {myreserve.motor ? myreserve.motor.brand_name : 'N/A'}
                        {' '}
                        {myreserve.motor ? myreserve.motor.model_no : 'N/A'}
                      </span>
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <div>{reserveList}</div>;
};

export default MyReservations;
