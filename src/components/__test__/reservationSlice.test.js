import reservationReducer from "../../redux/slice/reservationSlice";
import {
  createReservation,
  fetchReservations,
} from "../../redux/slice/fetchdata";

describe("reservationReducer", () => {
  it("should handle createReservation.pending action", () => {
    const initialState = {
      reserves: [],
      isLoading: false,
      isError: null,
    };
    const action = createReservation.pending;
    const state = reservationReducer(initialState, action);
    const expectedState = {
      ...initialState,
      isLoading: true,
      isError: null,
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle createReservation.fulfilled action", () => {
    const initialState = {
      reserves: [],
      isLoading: true,
      isError: null,
    };
    const payload = ["reservationData"]; // Define your payload
    const action = createReservation.fulfilled(payload);
    const state = reservationReducer(initialState, action);
    const expectedState = {
      ...initialState,
      reserves: payload,
      isLoading: false,
      isError: null,
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle createReservation.rejected action", () => {
    const initialState = {
      reserves: [],
      isLoading: true,
      isError: null,
    };
    const action = createReservation.rejected;
    const state = reservationReducer(initialState, action);
    const expectedState = {
      ...initialState,
      isLoading: false,
      isError: "Error Creating Reservation",
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle fetchReservations.pending action", () => {
    const initialState = {
      reserves: [],
      isLoading: false,
      isError: null,
    };
    const action = fetchReservations.pending;
    const state = reservationReducer(initialState, action);
    const expectedState = {
      ...initialState,
      isLoading: true,
      isError: "Error Creating Reservation",
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle fetchReservations.fulfilled action", () => {
    const initialState = {
      reserves: [],
      isLoading: true,
      isError: null,
    };
    const payload = ["reservationData"]; // Define your payload
    const action = fetchReservations.fulfilled(payload);
    const state = reservationReducer(initialState, action);
    const expectedState = {
      ...initialState,
      reserves: payload,
      isLoading: false,
      isError: null,
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle fetchReservations.rejected action", () => {
    const initialState = {
      reserves: [],
      isLoading: true,
      isError: null,
    };
    const action = fetchReservations.rejected;
    const state = reservationReducer(initialState, action);
    const expectedState = {
      ...initialState,
      isLoading: false,
      isError: "Error Fetching Reservation",
    };
    expect(state).toEqual(expectedState);
  });
});
