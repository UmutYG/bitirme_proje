import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // This will be our slice for products

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
