import React from "react";
import NavigationPanel from "../navigation/NavigationPanel";
import MobileNavbar from "../navigation/MobileNavbar";
import "./DeleteMotor.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { motorsItem, deleteMotorItem } from "../../redux/slice/motorSlice"; // Import the deleteMotorItem action

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DeleteMotor = () => {
  const dispatch = useDispatch();
  const { motorData } = useSelector((state) => state.motor);

  useEffect(() => {
    dispatch(motorsItem());
  }, [dispatch]);

  // Function to handle the deletion of a motor item
  const handleDelete = (motor_id) => {
    // Dispatch the deleteMotorItem action with the motorId
    dispatch(deleteMotorItem(motor_id));
  };

  return (
    <div className="main-container">
      <MobileNavbar className="mobile-navbar" />
      <NavigationPanel className="left-panel" />
      <div className="motor-container">
        <div className="models-titles">
          <h1>Latest models</h1>
          <h5>Please select a model</h5>
        </div>
        <div className="swiper-cont">
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            className="mySwiper"
            loopFillGroupWithBlank
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={1}
          >
            {motorData.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.photo}
                  alt={item.brand_name}
                  className="img-img"
                />
                <Link to={`/MotorDetails/${item.id}`}>
                  <h4>
                    <span>{item.brand_name}</span> <span>{item.model_no}</span>
                  </h4>
                </Link>
                <div className="social-links">
                  <i className="fa-brands fa-facebook-f" />
                  <i className="fa-brands fa-twitter" />
                  <i className="fa-brands fa-instagram" />
                </div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(item.id)} // Call handleDelete with motor ID
                >
                  Delete Motor
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DeleteMotor;
