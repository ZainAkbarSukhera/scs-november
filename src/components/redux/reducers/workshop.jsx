// frontend/src/redux/workshopSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store fetched workshop items
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const workshopSlice = createSlice({
  name: 'workshops',
  initialState,
  reducers: {
    setWorkshops: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    setWorkshopsLoading: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    setWorkshopsError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.items = []; // Clear items on error
    },
    clearWorkshops: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { setWorkshops, setWorkshopsLoading, setWorkshopsError, clearWorkshops } = workshopSlice.actions;

export default workshopSlice.reducer;