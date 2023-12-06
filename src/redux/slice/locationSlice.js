import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLocations = createAsyncThunk('citynames', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      'https://motorhubbackend-production.up.railway.app/api/stores_location', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const createLocation = createAsyncThunk(
  'location/creatlocation',
  async (locationData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:3000/api/stores_location',
        locationData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  location: [],
  isLoading: false,
  isError: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder
      .addCase(createLocation.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.location = action.payload.location;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(createLocation.rejected, (state) => {
        state.isLoading = false;
        state.isError = null;
      });
    /* eslint-enable no-param-reassign */
  },
});

export default locationSlice.reducer;
export { initialState };
