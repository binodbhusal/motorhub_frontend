import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SESSION_URL = "http://localhost:3000/api/sessions/";

export const logIn = createAsyncThunk("user/logIn", async (payload) => {
  try {
    console.log(payload);
    const response = await axios.post(`${SESSION_URL}new`, payload);
    if (!response) throw new Error("Couldn't get user!");
    const { data } = response;
    if (!data) throw new Error(response.error);
    return data.user;
  } catch (error) {
    return error;
  }
});

export const signUp = createAsyncThunk("user/signUp", async (payload) => {
  try {
    const response = await axios.post(`${SESSION_URL}create`, payload);
    if (!response) throw new Error("Couldn't sign up the user!");
    const { data } = response;
    console.log(data.user);
    if (!data) throw new Error(response.error);
    return data.user;
  } catch (error) {
    return error;
  }
});

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user || {
  user: {},
  logedIn: false,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: () => {
      localStorage.removeItem("user");
      return {
        user: {},
        logedIn: false,
        loading: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      const newState = {
        ...state,
        loading: false,
        error: null,
        logedIn: true,
        user: payload,
      };
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;
    });

    builder.addCase(logIn.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }));

    builder.addCase(signUp.pending, (state) => ({ ...state, loading: true }));

    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      const newState = {
        ...state,
        loading: false,
        error: null,
        logedIn: true,
        user: payload,
      };
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;
    });

    builder.addCase(signUp.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }));
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
