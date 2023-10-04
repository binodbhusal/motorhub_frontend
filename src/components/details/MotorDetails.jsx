import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMotoDetailData } from '../../redux/slice/motorDetailSlice';
import NavigationPanel from '../navigation/NavigationPanel';
import MobileNavbar from '../navigation/MobileNavbar';
import './details.scss';

const MotorDetails = () => {
  const dispatch = useDispatch();
  const { motorDetail } = useSelector((state) => state.motorDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMotoDetailData(id));
  }, [dispatch, id]);

  if (motorDetail === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />

      <div className="lifestyle-container grid-details">
        <div className="img-container">
          <img src={motorDetail.photo} alt="Car" />
        </div>
        <div className="details-cont">
          <h2>
            {motorDetail.brand_name}
            {' '}
            {motorDetail.model_no}
          </h2>
          <div className="info-motor-cont">
            <p>
              <span>Model No:</span>
              {' '}
              <span>{motorDetail.model_no}</span>
            </p>
            <p>
              <span>Manufacturer:</span>
              {' '}
              <span>{motorDetail.manufacturer}</span>
            </p>
            <p>
              <span>Manufacturer Date:</span>
              {' '}
              <span>{motorDetail.manufacture_date}</span>
            </p>
            <p>
              <span>Total Price:</span>
              {' '}
              <span>{motorDetail.total_price}</span>
            </p>
          </div>

          <button className="reserve-btn" type="button">
            <i className="fa-sharp fa-solid fa-gear" />
            <span>Reserve</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotorDetails;
