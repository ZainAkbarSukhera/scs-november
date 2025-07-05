// frontend/src/redux/marketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store fetched art market items
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setMarketItems: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    setMarketLoading: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    setMarketError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.items = []; // Clear items on error
    },
    clearMarketItems: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { setMarketItems, setMarketLoading, setMarketError, clearMarketItems } = marketSlice.actions;

export default marketSlice.reducer;