import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motorsItem } from '../../redux/slice/motorSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules'
import './motor.css';

// import Swiper core and required modules
// import { Navigation } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Motor = () => {
    const dispatch = useDispatch();
    const {motorData} = useSelector((state) => state.motor)
    useEffect(() => {
        dispatch(motorsItem());
    }, [dispatch])

    return (
        <div className="motor-container">
            <div className="models-titles">
                <h1>Latest models</h1>
                <h5>Please select a model</h5>
            </div>
            {/* navigation={true} modules={[Navigation]} className="mySwiper" */}
            <div className="swiper-cont">
            <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={1}
            >
                
                {motorData.map((item) => (
                    <SwiperSlide>
                        <img src={item.photo} alt={ item.brand_name } className='img-img'/>
                        <h4>
                            <span>{item.brand_name }</span>{" "}
                            <span>{ item.model_no }</span>
                        </h4>
                        <p className='item-description'>{item.description}</p>
                        <div className="social-links">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            </div>
        </div>
    );
}

export default Motor;
