import { configureStore } from '@reduxjs/toolkit';
import motorReducer from './slice/motorSlice';

const store = configureStore({
    reducer: {
        motor: motorReducer,
    }
})

export default store;