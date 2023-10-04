import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMotoDetailData = createAsyncThunk('motorDetail/fetchMotorDetail', async (id) => {
    try {
    const response = await axios.get(`http://localhost:3000/api/motors/${id}`);
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
    .addCase(fetchMotoDetailData.pending, (state) => {
    state.isLoading = true;
    state.isError = null;
    })
    .addCase(fetchMotoDetailData.fulfilled, (state, action) => {
    state.motorDetail = action.payload;
    state.isLoading = false;
    })
    .addCase(fetchMotoDetailData.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = action.error.message;
    });
    },
});
    
export default motorDetailSlice.reducer;