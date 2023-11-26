import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MOTORS_LINK = 'http://localhost:3000/api/motors';
const DELETE_LINK = 'http://localhost:3000/api/motors';

export const motorsItem = createAsyncThunk('motor', async () => {
  try {
    const response = await axios.get(MOTORS_LINK);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const deleteMotorItem = createAsyncThunk(
  'motor/deleteMotorItem',
  async (motorId) => {
    try {
      const response = await axios.delete(`${DELETE_LINK}/${motorId}`);
      return response.data;
    } catch (error) {
      throw error.message;
    }
  },
);
const initialState = {
  motorData: [],
  motor_id: null, // Initialize motor_id to null
  loading: false,
  error: null,
};

const motorSlice = createSlice({
  name: 'motors',
  initialState,
  // ... other code ...

  extraReducers: (builder) => {
    builder
      .addCase(deleteMotorItem.fulfilled, (state, action) => {
        const motorIdToDelete = action.meta.arg;
        return {
          ...state,
          motorData: state.motorData.filter(
            (motor) => motor.id !== motorIdToDelete,
          ),
          loading: false,
          error: null,
          motor_id: null,
        };
      })
      .addCase(motorsItem.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
        motor_id: null,
      }))
      .addCase(motorsItem.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        motorData: action.payload,
        error: null,
      }))
      .addCase(motorsItem.rejected, (state) => ({
        ...state,
        loading: false,
        error: 'Failed to fetch motor data',
      }));
  },
});

export default motorSlice.reducer;
