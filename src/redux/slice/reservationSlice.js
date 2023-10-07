import { createSlice } from '@reduxjs/toolkit';
import { createReservation, fetchReservations } from './fetchdata';

const initialState = {
  reserves: [], // Initialize as an empty object
  isLoading: false,
  isError: null,
};

const reservationSlice = createSlice({
  name: 'reserve',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: null,
      }))
      .addCase(createReservation.fulfilled, (state, action) => ({
        ...state,
        reserves: action.payload,
        isLoading: false,
        isError: null,
      }))
      .addCase(createReservation.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: 'Error Creating Reservation',
      }))
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: 'Error Creating Reservation',
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reserves: action.payload,
        isLoading: false,
        isError: null,
      }))
      .addCase(fetchReservations.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: 'Error Fetching Reservation',
      }));
  },
});

export default reservationSlice.reducer;
