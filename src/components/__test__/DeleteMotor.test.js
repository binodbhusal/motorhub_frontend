jest.mock("swiper/react", () => ({
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import motorReducer from "../../redux/slice/motorSlice";
import DeleteMotor from "../DeleteMotor/DeleteMotor";

const store = createStore(motorReducer, applyMiddleware(thunk));

test("DeleteMotor component deletes a motor item", async () => {
  const initialState = {
    motor: {
      motorData: [
        {
          id: 1,
          brand_name: "Test Brand 1",
          model_no: "Model 1",
          photo: "photo1.jpg",
        },
        {
          id: 2,
          brand_name: "Test Brand 2",
          model_no: "Model 2",
          photo: "photo2.jpg",
        },
      ],
      loading: false,
      error: null,
      motor_id: null,
    },
  };

  const storeWithInitialState = createStore(
    motorReducer,
    initialState,
    applyMiddleware(thunk)
  );

  render(
    <Provider store={storeWithInitialState}>
      <Router>
        <DeleteMotor />
      </Router>
    </Provider>
  );

  const testMotorIdToDelete = 1; // Replace with a valid motor ID from your test data

  const deleteButton = screen.getByTestId(`delete-${testMotorIdToDelete}`);

  fireEvent.click(deleteButton);

  await waitFor(() => {
    expect(storeWithInitialState.getState().motor.motorData).not.toContain(
      (motor) => motor.id === testMotorIdToDelete
    );
  });
});
