import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { ProductModel, ProductState } from './types';



const initialState: ProductState = {
  items: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.status = 'loading';
    },
    productsFetched: (state, action: PayloadAction<ProductModel[]>) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    fetchingError: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { startFetching, productsFetched, fetchingError } = productSlice.actions;
export default productSlice.reducer;
