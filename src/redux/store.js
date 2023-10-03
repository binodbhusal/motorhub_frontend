import { configureStore } from '@reduxjs/toolkit';
import motorReducer from './features/motorSlice';

const store = configureStore({
    reducer: {
        motor: motorReducer,
    }
})

export default store;