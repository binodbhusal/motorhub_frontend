import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMotoDetailData = createAsyncThunk('motorDetail/fetchMotorDetail', async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`http://localhost:3000/api/motors/${id}`, {
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
  motorDetail: null,
  isLoading: false,
  isError: null,
};

const motorDetailSlice = createSlice({
  name: 'motorDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMotoDetailData.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMotoDetailData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        motorDetail: action.payload,
      }))
      .addCase(fetchMotoDetailData.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export default motorDetailSlice.reducer;
