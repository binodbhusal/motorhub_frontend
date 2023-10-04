import { configureStore } from '@reduxjs/toolkit';
import motorReducer from './slice/motorSlice';
import motorDetailReducer from './slice/motorDetailSlice';

const store = configureStore({
  reducer: {
    motor: motorReducer,
    motorDetails: motorDetailReducer,
  },
});

export default store;
