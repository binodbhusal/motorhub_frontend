import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchCityname } from '../../redux/slice/citySlice';
import { createReservation } from '../../redux/slice/fetchdata';
import MobileNavbar from '../navigation/MobileNavbar';
import NavigationPanel from '../navigation/NavigationPanel';

import './Reserve.scss';

const Reservation = () => {
  const token = localStorage.getItem('token');
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { motorDetail } = useSelector((state) => state.motorDetails);
  const { citynames } = useSelector((state) => state.cityname);
  const userData = useSelector((state) => state.user.userId);
  const userId = userData;
  const [formData, setFormData] = useState({
    reserve_date: '',
    city_name: '',
    brand_name: motorDetail?.brand_name || '',
  });
  const [selectMotorMessage, setSelectMotorMessage] = useState('');

  useEffect(() => {
    dispatch(fetchCityname());
  }, [dispatch], token);

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
      user_id: userId,
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
                <span className="bold-reservaiton ml-3">
                  {motorDetail.brand_name}
                </span>
              </p>
              <p>
                Model No:
                {' '}
                <span className="bold-reservaiton ml-8">
                  {motorDetail.model_no}
                </span>
              </p>
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
                    required
                    className="border border-d-green rounded-md px-3 mt-1 focus:outline-none"

                  />
                </label>
              </div>
              <div>
                Location:
                <select id="city_name" name="city_name" value={formData.city_name} onChange={handleChange} className="border border-d-green rounded-md px-4 md:w-[37%] py-2 mt-1 focus:outline-none ml-10" required>
                  <option value="">Select a city</option>
                  {citynames.map((city) => (
                    <option key={city.id} value={city.city_name}>
                      {city.city_name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="bg-green p-2 px-2 mt-3 hover:bg-d-green mb-3 transition duration-300 rounded-lg text-white">Reserve Motor</button>
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

              <Link to="/">Click here </Link>

              to select a motors if you have not selected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
