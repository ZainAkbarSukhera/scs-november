// frontend/src/redux/bidSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state based on the complete OpenCalls Mongoose schema
const initialState = {
  _id: null, // Using null for ObjectId, will be a string after fetch
  status: '', // This status will be an input from the user/backend, e.g., 'active', 'closed', 'draft'
  projectType: '',
  eligibility: '',
  location: '',
  prize: '',
  deadline: '',
  hostOrganizationType: '',
  category: '',
  image: '',
  title: '',
  hostedBy: '',
  deadlineDate: '',
  eligibilityDetail: '',
  prizeDetails: '',
  overview: '',
  goals: [], // Array of strings
  bidRequirements: [], // Array of strings
  selectionCriteria: [], // Array of strings
  prizesAndCompensation: [], // Array of strings
  keyDates: [], // Array of strings
  eligibilityCriteria: [], // Array of strings
  patronId: null, // Using null for ObjectId, will be a string after fetch
  
  // You might still want to track loading/error state *for this single bid's details*
  // if you're fetching them individually.
  isLoading: false,
  error: null,
};

const bidSlice = createSlice({
  name: 'bid', // Changed name to 'bid' (singular) to reflect it manages a single bid's state
  initialState,
  reducers: {
    // Reducer to set the entire open call (bid) details
    setOpenCallDetails: (state, action) => {
      // Directly assign the payload to the state, merging new data.
      // Immer handles the immutability behind the scenes.
      Object.assign(state, action.payload);

      // Ensure array fields are initialized as arrays if they come in as null/undefined
      state.goals = state.goals || [];
      state.bidRequirements = state.bidRequirements || [];
      state.selectionCriteria = state.selectionCriteria || [];
      state.prizesAndCompensation = state.prizesAndCompensation || [];
      state.keyDates = state.keyDates || [];
      state.eligibilityCriteria = state.eligibilityCriteria || [];

      // Reset loading/error states after successful data setting
      state.isLoading = false;
      state.error = null;
    },
    // Reducer to update a specific field of the open call
    updateOpenCallField: (state, action) => {
      const { field, value } = action.payload;
      if (field in state) {
        state[field] = value;
      }
      // You could add logic here for nested fields if needed, similar to artistSlice
    },
    // Reducer to set the loading state when fetching a single bid's details
    setBidLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Reducer to set an error when fetching a single bid's details fails
    setBidError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Reducer to reset the bid state to initial values
    resetBidState: () => initialState,
  },
});

// Export the actions
export const {
  setOpenCallDetails,
  updateOpenCallField,
  setBidLoading,
  setBidError,
  resetBidState,
} = bidSlice.actions;

// Export the reducer
export default bidSlice.reducer;