import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchCityname } from '../../redux/slice/citySlice';
import { createReservation } from '../../redux/slice/fetchdata';
import MobileNavbar from '../navigation/MobileNavbar';
import NavigationPanel from '../navigation/NavigationPanel';
import './Reserve.scss';

const Reservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { motorDetail } = useSelector((state) => state.motorDetails);
  const { citynames } = useSelector((state) => state.cityname);
  const userId = 2;
  const [formData, setFormData] = useState({
    reserve_date: '',
    city_name: '',
    brand_name: motorDetail?.brand_name || '',
  });
  const [selectMotorMessage, setSelectMotorMessage] = useState('');

  useEffect(() => {
    dispatch(fetchCityname());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!motorDetail) {
      setSelectMotorMessage('Please select a motor first to reserve.');
      return;
    }

    const reservationData = {
      user_id: userId ? parseInt(userId, 10) : null, // Convert to integer or null
      motor_id: motorDetail.id,
      reserve_date: formData.reserve_date,
      city_name: formData.city_name,
    };

    dispatch(createReservation({ reserveData: reservationData, userId }))
      .then(() => {
        navigate('/reserveconfirm');
      })
      .catch((error) => {
        document.write('Reservation error:', error);
      });
  };

  return (
    <div className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />

      <div className="lifestyle-container reserve-details">
        <div className="second-cont">
          <h1 className="list-reserved-title">Reserve Motor</h1>

          <div className="reserve-motor-cont">
            {selectMotorMessage && <p>{selectMotorMessage}</p>}
            {id && motorDetail && (
            <div className="motor-reserved">
              <h2>Motor Details:</h2>
              <p>
                Brand Name:
                {' '}
                <span className="bold-reservaiton">
                  {motorDetail.brand_name}
                </span>
              </p>
              <p>
                Model No:
                {' '}
                <span className="bold-reservaiton">
                  {motorDetail.model_no}
                </span>
              </p>
            </div>
            )}
            {userId !== null && (
            <div>
              <h2>
                Username or ID:
                {' '}
                {userId}
              </h2>
            </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="date-selector">
                <label htmlFor="reserve_date">
                  Select Date:
                  <input
                    type="date"
                    id="reserve_date"
                    name="reserve_date"
                    value={formData.reserve_date}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <select id="city_name" name="city_name" value={formData.city_name} onChange={handleChange} className="select-city-btn">
                  <option value="">Select a city</option>
                  {citynames.map((city) => (
                    <option key={city.id} value={city.city_name}>
                      {city.city_name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="reserve-motor-btn">Reserve Motor</button>
            </form>
            {!motorDetail && (
            <p>
              No motor details available.
              {' '}
              <Link to="/">Click here</Link>
              {' '}
              to select a motor which  you want to Reserve & click on Reserve.
            </p>
            )}
            {id && !motorDetail && (
            <p>
              Please select a motor first.
              {' '}
              <Link to="/">Click here</Link>
              {' '}
              to select a motor.
            </p>
            )}
            <p>

              <Link to="/">Click here</Link>

              to select a motors if you have not selected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
