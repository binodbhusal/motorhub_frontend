import { useState } from "react";
import { useDispatch } from "react-redux";
import { createLocation } from "../../redux/slice/locationSlice";
import { createMotor } from "../../redux/slice/fetchdata";
import MobileNavbar from "../navigation/MobileNavbar";
import NavigationPanel from "../navigation/NavigationPanel";
import "./AddMotor.scss";

const AddMotor = () => {
  const dispatch = useDispatch();

  const [locationData, setLocationData] = useState({
    city_name: "",
  });

  const [motorData, setMotorData] = useState({
    location_id: locationData.id,
    brand_name: "",
    model_no: "",
    manufacturer: "",
    manufacture_date: "",
    description: "",
    photo: "",
    unit_price: "",
    purchase_fee: "",
    finance_fee: "",
    total_price: "",
  });
  const handleLocationChange = (e) => {
    const newValue = e.target.value;
    console.log("Location Data:", locationData);
    console.log("New Value:", newValue);
    setLocationData({ ...locationData, [e.target.name]: newValue });
    setMotorData({ ...motorData, city_name: newValue });
  };
  const handleMotorChange = (e) => {
    setMotorData({ ...motorData, [e.target.name]: e.target.value });
  };

  const handleUnitPriceChange = (e) => {
    const unitPrice = e.target.value;
    // Calculate purchase_fee, finance_fee, and total_price based on unitPrice (adjust this calculation as needed)
    const purchase_fee = unitPrice * 0.9; // Example calculation
    const finance_fee = unitPrice * 0.8; // Example calculation
    const total_price = unitPrice + purchase_fee + finance_fee; // Example calculation

    setMotorData({
      ...motorData,
      unit_price: unitPrice,
      purchase_fee: purchase_fee,
      finance_fee: finance_fee,
      total_price: total_price,
    });
  };

  const handleCombinedSubmit = (e) => {
    e.preventDefault();
    const combinedData = {
      stores_location: {
        city_name: locationData.city_name, // Include city_name here
      },
      motor: motorData,
    };
    dispatch(createLocation(combinedData.stores_location));
    dispatch(createMotor(combinedData.motor));
  };
  return (
    <div className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />
      <div className="addmotor-container">
        <h2>Enter Store Location Data</h2>
        <form onSubmit={handleCombinedSubmit}>
          <input
            type="text"
            name="city_name"
            value={locationData.city_name}
            onChange={handleLocationChange}
          />

          <h2>Enter Motor Data</h2>
          <label htmlFor="brand_name">
            Brand Name:
            <input
              type="text"
              name="brand_name"
              value={motorData.brand_name}
              onChange={handleMotorChange}
            />
          </label>
          <label htmlFor="model_no">
            Model No:
            <input
              type="number"
              name="model_no"
              value={motorData.model_no}
              onChange={handleMotorChange}
            />
          </label>
          <label htmlFor="manufacturer">
            Manufacturer:
            <input
              type="text"
              name="manufacturer"
              value={motorData.manufacturer}
              onChange={handleMotorChange}
            />
          </label>
          <label htmlFor="manufacture_date">
            Manufacturer Date:
            <input
              type="date"
              name="manufacture_date"
              value={motorData.manufacture_date}
              onChange={handleMotorChange}
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={motorData.description}
              onChange={handleMotorChange}
            />
          </label>
          <label htmlFor="photo">
            Photo Url:
            <input
              type="text"
              name="photo"
              value={motorData.photo}
              onChange={handleMotorChange}
            />
          </label>
          <label htmlFor="unit_price">
            Unit Price:
            <input
              type="number"
              name="unit_price"
              value={motorData.unit_price}
              onChange={handleUnitPriceChange}
            />
          </label>
          <label htmlFor="purchase_fee">
            Purchase Fee:
            <input
              type="number"
              name="purchase_fee"
              value={motorData.purchase_fee}
              onChange={handleMotorChange}
              readOnly
            />
          </label>
          <label htmlFor="finance_fee">
            Finance Fee:
            <input
              type="number"
              name="finance_fee"
              value={motorData.finance_fee}
              onChange={handleMotorChange}
              readOnly
            />
          </label>
          <label htmlFor="total_price">
            Total Price:
            <input
              type="number"
              name="total_price"
              value={motorData.total_price}
              onChange={handleMotorChange}
              readOnly
            />
          </label>
          {/* Add more motor fields as needed */}
          <button type="submit">Submit Location and Motor</button>
        </form>
      </div>
    </div>
  );
};
export default AddMotor;
