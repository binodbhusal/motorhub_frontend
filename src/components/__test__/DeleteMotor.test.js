import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import DeleteMotor from "../DeleteMotor/DeleteMotor";

const mockStore = configureStore({
  motor: {
    motorData: [
      {
        id: 1,
        brand_name: "Brand1",
        model_no: "Model1",
        photo: "photo1.jpg",
      },
      {
        id: 2,
        brand_name: "Brand2",
        model_no: "Model2",
        photo: "photo2.jpg",
      },
    ],
  },
});

describe("DeleteMotor Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      motor: {
        motorData: [
          {
            id: 1,
            brand_name: "Brand1",
            model_no: "Model1",
            photo: "photo1.jpg",
          },
          {
            id: 2,
            brand_name: "Brand2",
            model_no: "Model2",
            photo: "photo2.jpg",
          },
        ],
      },
    });
  });

  it("should render the DeleteMotor component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <DeleteMotor />
        </Router>
      </Provider>
    );

    const deleteMotorComponent = getByTestId("deletemotor-1");
    expect(deleteMotorComponent).toBeInTheDocument();
  });

  it('should have a "Delete Motor" button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <DeleteMotor />
        </Router>
      </Provider>
    );

    const deleteMotorButton = getByText("Delete Motor");
    expect(deleteMotorButton).toBeInTheDocument();
  });

  // Add more test cases as needed
});
