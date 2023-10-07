import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchCityname } from '../../redux/slice/citySlice';
import { createReservation } from '../../redux/slice/fetchdata';

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
    brand_name: motorDetail?.brand_name || '', // Autofill brand_name if motorDetail has data
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
      motor_id: motorDetail.id, // Use the correct motor ID
      reserve_date: formData.reserve_date,
      city_name: formData.city_name,
    };

    dispatch(createReservation({ reserveData: reservationData, userId }))
      .then(() => {
        navigate('/reserveconfirm'); // Redirect to a confirmation page
      })
      .catch((error) => {
        // Handle error, display an error message, or show validation errors
        console.error('Reservation error:', error);
      });
  };

  return (
    <div>
      <h1>Reserve Motor</h1>

      {selectMotorMessage && <p>{selectMotorMessage}</p>}
      {id && motorDetail && (
        <div>
          <h2>Motor Details:</h2>
          <p>
            Brand Name:
            {' '}
            {motorDetail.brand_name}
            {/* Display other motor details here */}
          </p>
          <p>
            Model No:
            {' '}
            {motorDetail.model_no}
            {/* Display other motor details here */}
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
        <div>
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
          <select id="city_name" name="city_name" value={formData.city_name} onChange={handleChange}>
            <option value="">Select a city</option>
            {citynames.map((city) => (
              <option key={city.id} value={city.city_name}>
                {city.city_name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Reserve Motor</button>
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
  );
};

export default Reservation;