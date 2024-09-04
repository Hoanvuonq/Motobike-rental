import { configureStore } from '@reduxjs/toolkit';
import clicksReducer from './slice/clicksSlice';

const store = configureStore({
    reducer: {
        clicks: clicksReducer,
    },
});

export default store;
