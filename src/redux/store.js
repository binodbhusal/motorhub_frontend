import { configureStore } from "@reduxjs/toolkit";
import motorReducer from "./slice/motorSlice";
import motorDetailReducer from "./slice/motorDetailSlice";
import addMotorsReducer from "./slice/addMotorSlice";

const store = configureStore({
  reducer: {
    motor: motorReducer,
    motorDetails: motorDetailReducer,
    addNewMotor: addMotorsReducer,
  },
});

export default store;
