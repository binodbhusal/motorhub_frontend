import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from './fetchdata';

export const logIn = createAsyncThunk('user/logIn', async (payload) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/show/`, payload);
    if (!response) throw new Error("Couldn't get user!");
    const { data } = response;
    if (!data) throw new Error('No such user!');
    return data;
  } catch (error) {
    return error;
  }
});

export const signUp = createAsyncThunk('user/signUp', async (payload) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/new/`, payload);
    if (!response) throw new Error("Couldn't sign up the user!");
    const { data } = response;
    if (!data) throw new Error('An error occured!');
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  user: {},
  logedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(logIn.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      error: null,
      logedIn: true,
      user: payload,
    }));

    builder.addCase(logIn.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }));

    builder.addCase(signUp.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(signUp.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      error: null,
      logedIn: true,
      user: payload,
    }));

    builder.addCase(signUp.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }));
  },
});

export default userSlice.reducer;
