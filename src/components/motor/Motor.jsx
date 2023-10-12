/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motorsItem } from '../../redux/slice/motorSlice';
import './motor.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Motor = () => {
  const dispatch = useDispatch();
  const { motorData } = useSelector((state) => state.motor);
  useEffect(() => {
    dispatch(motorsItem());
  }, [dispatch]);

  return (
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
          breakpoints={{
            850: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >

          {motorData.map((item) => (
            <SwiperSlide>
              <div className="motor__img--container">
                <img src={item.photo} alt={item.brand_name} className="img-img" />
              </div>
              <Link to={`/MotorDetails/${item.id}`}>
                <h4>
                  <span>{item.brand_name }</span>
                  {' '}
                  <span>{ item.model_no }</span>
                </h4>
              </Link>
              <p className="item-description">{item.description}</p>
              <div className="social-links">
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-instagram" />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default Motor;
