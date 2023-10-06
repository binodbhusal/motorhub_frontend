import { createSlice } from '@reduxjs/toolkit';
import { fetchMotoData, createMotor } from './fetchdata';

const initialState = {
  motors: [], // Initialize as an empty object
  isLoading: false,
  isError: null,
};
const addMotorSlice = createSlice({
  name: 'motor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMotoData.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(fetchMotoData.fulfilled, (state, action) => ({
        ...state,
        motors: action.payload,
        isLoading: false,
        isError: null,
      }))
      .addCase(fetchMotoData.rejected, (state, action) => ({
        ...state,
        isError: action.error.message,
        isLoading: false,
      }))
      .addCase(createMotor.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: null,
      }))
      .addCase(createMotor.fulfilled, (state, action) => ({
        ...state,
        motors: action.payload,
        isLoading: false,
        isError: null,
      }))
      .addCase(createMotor.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        isError: action.error.message,
      }));
  },
});

export default addMotorSlice.reducer;
