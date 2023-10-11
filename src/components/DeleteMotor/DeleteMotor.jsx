import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motorsItem, deleteMotorItem } from '../../redux/slice/motorSlice'; // Import the deleteMotorItem action
import NavigationPanel from '../navigation/NavigationPanel';
import MobileNavbar from '../navigation/MobileNavbar';
import './DeleteMotor.scss';

const DeleteMotor = () => {
  const dispatch = useDispatch();
  const { motorData } = useSelector((state) => state.motor);

  useEffect(() => {
    dispatch(motorsItem());
  }, [dispatch]);

  const handleDelete = (motorId) => {
    dispatch(deleteMotorItem(motorId));
  };

  return (
    <div className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />
      <div className="motor-container">
        <div className="models-titles">
          <h1>Latest models</h1>
          <h5>Delete a model</h5>
        </div>
        <div className="delete-motors-cont">
          <div className="delete-motors-grid-cont">
            {motorData.map((item) => (
              <div key={item.id}>
                <img
                  src={item.photo}
                  alt={item.brand_name}
                  className="imgage-image"
                />
                <Link to={`/MotorDetails/${item.id}`}>
                  <h4>
                    <span>{item.brand_name}</span>
                    {' '}
                    <span>{item.model_no}</span>
                  </h4>
                </Link>
                <button
                  type="submit"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(item.id)} // Call handleDelete with motor ID
                >
                  Delete Motor
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMotor;
