import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseApi = 'https://motorhubbackend-production.up.railway.app/api/stores_location';

export const fetchCityname = createAsyncThunk('citynames', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(baseApi, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.message;
  }
});
const initialState = {
  citynames: [],
  isLoading: false,
  isError: null,
};

const citySlice = createSlice({
  name: 'cityname',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityname.pending, (state) => ({
        ...state,
        isLoading: false,
        isError: null,
      }))
      .addCase(fetchCityname.fulfilled, (state, action) => ({
        ...state,
        citynames: action.payload,
        isLoading: false,
        isError: null,
      }))
      .addCase(fetchCityname.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: 'Error fetching motor data',
      }));
  },
});
export default citySlice.reducer;
