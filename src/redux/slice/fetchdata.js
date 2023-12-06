import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://motorhubbackend-production.up.railway.app/api/motors';

// Fetch motors data from the API
export const fetchMotoData = createAsyncThunk(
  'motor/fetchMotoData',
  async () => {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error('Failed to fetch motors data');
    }
    const data = await response.json();
    return data;
  },
);

// Create a new motor
export const createMotor = createAsyncThunk(
  'motor/createMotor',
  async (motorData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(motorData),
    });
    if (!response.ok) {
      throw new Error('Failed to create motor');
    }
    const data = await response.json();
    return data;
  },
);
export const createReservation = createAsyncThunk('reserve',
  async ({ reserveData, userId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`https://motorhubbackend-production.up.railway.app/api/users/${userId}/reservations`, reserveData, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const fetchReservations = createAsyncThunk('reservations',
  async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://motorhubbackend-production.up.railway.app/api/users/${userId}/reservations`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.message;
    }
  });
