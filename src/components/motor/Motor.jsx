import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motorsItem } from '../../redux/slice/motorSlice';
import './motor.css';

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
                <div className="motor-cards-cont">
                {motorData.map((item) => (
                    <div className="single-motor-cont">
                        <img src={item.photo} alt={ item.brand_name } />
                        <h4>
                            <span>{item.brand_name }</span>{" "}
                            <span>{ item.model_no }</span>
                        </h4>
                        <p>{item.description}</p>
                        <div className="social-links">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Motor;
