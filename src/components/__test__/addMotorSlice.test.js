import { configureStore } from "@reduxjs/toolkit";
import addMotorSlice from "../../redux/slice/addMotorSlice"; // Replace 'yourSlice' with the correct path to your slice file

describe("addMotorSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        motor: addMotorSlice,
      },
    });
  });

  it("should have the correct initial state", () => {
    const initialState = store.getState().motor;
    expect(initialState).toEqual({
      motors: [],
      isLoading: false,
      isError: null,
    });
  });

  it("should handle fetchMotoData.fulfilled action", () => {
    const fakeMotorData = [{ id: 1, name: "Motor 1" }];
    const action = {
      type: "motor/fetchMotoData/fulfilled",
      payload: fakeMotorData,
    };

    store.dispatch(action);

    const newState = store.getState().motor;
    expect(newState.motors).toEqual(fakeMotorData);
    expect(newState.isLoading).toBe(false);
    expect(newState.isError).toBe(null);
  });
});
