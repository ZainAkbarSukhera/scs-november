// frontend/src/redux/patronsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store fetched patron profiles
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const patronsSlice = createSlice({
  name: 'patrons',
  initialState,
  reducers: {
    setPatrons: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    setPatronsLoading: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    setPatronsError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.items = []; // Clear items on error
    },
    clearPatrons: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { setPatrons, setPatronsLoading, setPatronsError, clearPatrons } = patronsSlice.actions;

export default patronsSlice.reducer;