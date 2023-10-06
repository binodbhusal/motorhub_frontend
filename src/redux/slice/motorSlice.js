import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MOTORS_LINK = "http://localhost:3000/api/motors/index";
const DELETE_LINK = "http://localhost:3000/api/motors";

export const motorsItem = createAsyncThunk("motor", async () => {
  try {
    const response = await axios.get(MOTORS_LINK);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const deleteMotorItem = createAsyncThunk(
  "motor/deleteMotorItem",
  async (motor_id) => {
    try {
      const response = await axios.delete(`${DELETE_LINK}/${motor_id}`);
      return response.data;
    } catch (error) {
      throw error.message;
    }
  }
);
const initialState = {
  motorData: [],
  motor_id: null, // Initialize motor_id to null
  loading: false,
  error: null,
};

const motorSlice = createSlice({
  name: "motors",
  initialState,
  // ... other code ...

  extraReducers: (builder) => {
    builder
      .addCase(deleteMotorItem.fulfilled, (state, action) => {
        const motorIdToDelete = action.meta.arg;
        state.motorData = state.motorData.filter(
          (motor) => motor.id !== motorIdToDelete
        );
        state.loading = false;
        state.error = null;
        state.motor_id = null; // Reset motor_id after deletion
      })
      .addCase(motorsItem.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.motor_id = null; // Reset motor_id when fetching motors
      })
      .addCase(motorsItem.fulfilled, (state, action) => {
        state.loading = false;
        state.motorData = action.payload;
        state.error = null;
      })
      .addCase(motorsItem.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch motor data";
      });

    // Add other reducers and cases as needed...
  },
});

export default motorSlice.reducer;
