import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MOTORS_LINK = 'http://localhost:3000/api/motors/index';

export const motorsItem = createAsyncThunk('motor', async () => {
  const response = await axios.get(MOTORS_LINK);
  return response.data
});

const initialState = {
  motorData: [],
};

const motorSlice = createSlice({
  name: 'motors',
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(motorsItem.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(motorsItem.fulfilled, (state, action) => ({
        ...state,
        loading: false, // Update loading to false
        motorData: action.payload,
      }))
      .addCase(motorsItem.rejected, (state) => ({
        ...state,
        loading: false, // Update loading to false
      }));
  },
});

export default motorSlice.reducer;
