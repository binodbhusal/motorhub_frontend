import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motorsItem } from '../../redux/slice/motorSlice';
import './motor.scss';

const Motor = () => {
    const dispatch = useDispatch();
    const {motorData} = useSelector((state) => state.motor)
    useEffect(() => {
        dispatch(motorsItem());
    }, [dispatch])

    return (
        <>
            {motorData.map((item) => (
                <h1>{item.brand_name}</h1>
            ))}
        </>
    );
}

export default Motor;
