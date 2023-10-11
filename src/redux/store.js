import { configureStore } from '@reduxjs/toolkit';
import motorReducer from './slice/motorSlice';
import motorDetailReducer from './slice/motorDetailSlice';
import addMotorsReducer from './slice/addMotorSlice';
import userReducer from './slice/userSlice';
import reserveReducer from './slice/reservationSlice';
import citynameReducer from './slice/citySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    motor: motorReducer,
    motorDetails: motorDetailReducer,
    addNewMotor: addMotorsReducer,
    cityname: citynameReducer,
    reserve: reserveReducer,
  },
});

export default store;
