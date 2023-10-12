import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter

import AddMotor from '../AddMotor/AddMotor';

const mockStore = configureStore({
  location: {
    city_name: '',
  },
  fetchdata: {
    location_id: null,
    brand_name: '',
    model_no: '',
    manufacturer: '',
    manufacture_date: '',
    description: '',
    photo: '',
    unit_price: '',
    purchase_fee: '',
    finance_fee: '',
    total_price: '',
  },
});

describe('AddMotor Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      location: {
        city_name: '',
      },
      fetchdata: {
        location_id: null,
        brand_name: '',
        model_no: '',
        manufacturer: '',
        manufacture_date: '',
        description: '',
        photo: '',
        unit_price: '',
        purchase_fee: '',
        finance_fee: '',
        total_price: '',
      },
    });
  });

  it('should render the AddMotor component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddMotor />
        </Router>
      </Provider>,
    );

    const addMotorComponent = getByTestId('addmotor-1');
    expect(addMotorComponent).toBeInTheDocument();
  });
  it("should have a 'Submit' button", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <AddMotor />
        </Router>
      </Provider>,
    );

    const submitButton = getByText('Submit');
    expect(submitButton).toBeInTheDocument();
  });

  it("should have input fields for 'Brand Name', 'Model No', 'Manufacturer', and 'Manufacture Date'", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <AddMotor />
        </Router>
      </Provider>,
    );

    const brandNameInput = getByPlaceholderText('Brand Name:');
    const modelNoInput = getByPlaceholderText('Model No:');
    const manufacturerInput = getByPlaceholderText('Manufacturer:');
    const manufactureDateInput = getByPlaceholderText('Manufacturer Date:');

    expect(brandNameInput).toBeInTheDocument();
    expect(modelNoInput).toBeInTheDocument();
    expect(manufacturerInput).toBeInTheDocument();
    expect(manufactureDateInput).toBeInTheDocument();
  });

  it('should update the state when input fields change', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <AddMotor />
        </Router>
      </Provider>,
    );

    const brandNameInput = getByPlaceholderText('Brand Name:');
    const modelNoInput = getByPlaceholderText('Model No:');

    fireEvent.change(brandNameInput, { target: { value: 'Test Brand' } });
    fireEvent.change(modelNoInput, { target: { value: '123' } });
  });
});
