import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:3000/api/motors";

// Fetch motors data from the API
export const fetchMotoData = createAsyncThunk(
  "motor/fetchMotoData",
  async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/index`);
      if (!response.ok) {
        throw new Error("Failed to fetch motors data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// Create a new motor
export const createMotor = createAsyncThunk(
  "motor/createMotor",
  async (motorData) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(motorData),
      });
      if (!response.ok) {
        throw new Error("Failed to create motor");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
