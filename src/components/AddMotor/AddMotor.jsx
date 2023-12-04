import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLocation } from '../../redux/slice/locationSlice';
import { createMotor } from '../../redux/slice/fetchdata';
import MobileNavbar from '../navigation/MobileNavbar';
import NavigationPanel from '../navigation/NavigationPanel';
import './AddMotor.scss';

const AddMotor = () => {
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const initialLocationData = {
    city_name: '',
  };

  const initialMotorData = {
    location_id: initialLocationData.id,
    brand_name: '',
    model_no: '',
    manufacturer: '',
    manufacture_date: '',
    description: '',
    photo: '',
    unit_price: '',
    purchase_fee: '',
    finance_fee: '',
    total_price: '',
    user_id: userId,
  };
  const [locationData, setLocationData] = useState(initialLocationData);
  const [motorData, setMotorData] = useState(initialMotorData);

  const handleLocationChange = (e) => {
    const newValue = e.target.value;
    setLocationData({ ...locationData, [e.target.name]: newValue });
    setMotorData({ ...motorData, city_name: newValue });
  };

  const handleMotorChange = (e) => {
    setMotorData({ ...motorData, [e.target.name]: e.target.value });
  };

  const handleUnitPriceChange = (e) => {
    const unitPrice = parseFloat(e.target.value);
    const purchaseFee = unitPrice * 0.2;
    const financeFee = unitPrice * 0.1;
    const totalPrice = unitPrice + purchaseFee + financeFee;

    setMotorData({
      ...motorData,
      unit_price: unitPrice,
      purchase_fee: purchaseFee,
      finance_fee: financeFee,
      total_price: totalPrice,
    });
  };

  const handleCombinedSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const combinedData = {
      stores_location: {
        city_name: locationData.city_name,
      },
      motor: motorData,
    };
    dispatch(createLocation(combinedData.stores_location, token));
    dispatch(createMotor(combinedData.motor, token));
    setLocationData(initialLocationData);
    setMotorData(initialMotorData);
  };

  return (
    <div data-testid="addmotor-1" className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />
      <div className="addmotor-container">
        <div className="form-container">
          <form onSubmit={handleCombinedSubmit} className="submit-form">
            <div className="location-container">
              <h5>Add Location Name:</h5>
              <div className="form-group location-input">
                <input
                  type="text"
                  className="form-control"
                  name="city_name"
                  value={locationData.city_name}
                  onChange={handleLocationChange}
                  placeholder="Location Name:"
                  required
                />
              </div>
            </div>
            <h5>Enter Motor Data</h5>
            <div className="sub-container">
              <div className="group-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Brand Name:"
                    type="text"
                    name="brand_name"
                    value={motorData.brand_name}
                    onChange={handleMotorChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Model No:"
                    type="number"
                    name="model_no"
                    value={motorData.model_no}
                    onChange={handleMotorChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Manufacturer:"
                    type="text"
                    name="manufacturer"
                    value={motorData.manufacturer}
                    onChange={handleMotorChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Manufacturer Date:"
                    type="date"
                    name="manufacture_date"
                    value={motorData.manufacture_date}
                    onChange={handleMotorChange}
                    required
                  />
                </div>
              </div>
              <div className="group-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Photo URL:"
                    type="text"
                    name="photo"
                    value={motorData.photo}
                    onChange={handleMotorChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Unit Price:"
                    type="number"
                    name="unit_price"
                    value={motorData.unit_price}
                    onChange={handleUnitPriceChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Purchase Fee:"
                    type="number"
                    name="purchase_fee"
                    value={motorData.purchase_fee}
                    onChange={handleMotorChange}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder=" Finance Fee:"
                    type="number"
                    name="finance_fee"
                    value={motorData.finance_fee}
                    onChange={handleMotorChange}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Total Price:"
                    type="number"
                    name="total_price"
                    value={motorData.total_price}
                    onChange={handleMotorChange}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="text-area">
              <textarea
                className="form-control"
                placeholder="Description:"
                type="text"
                name="description"
                value={motorData.description}
                onChange={handleMotorChange}
              />
            </div>
            <button type="submit" className="btn btn btn-outline-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMotor;
