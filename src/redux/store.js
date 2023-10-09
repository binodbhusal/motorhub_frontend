import { configureStore } from '@reduxjs/toolkit';
import motorReducer from './slice/motorSlice';
import motorDetailReducer from './slice/motorDetailSlice';
import addMotorsReducer from './slice/addMotorSlice';
import userReducer from './slice/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    motor: motorReducer,
    motorDetails: motorDetailReducer,
    addNewMotor: addMotorsReducer,
  },
});

export default store;
