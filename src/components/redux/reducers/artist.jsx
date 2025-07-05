// src/store/artistSlice.js (or wherever you prefer to place it)
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state based on your Mongoose schema
const initialState = {
  // Basic Info
  _id: '',
  fullNameEnglish: '',
  fullNameArabic: '',
  username: '',
  email: '',
  mobileNumber: '',
  password: '', // Note: Storing password in Redux state is generally not recommended for security
  profilePicture: null,
  artistLicense: null,
  biographyEnglish: '',
  biographyArabic: '',
  city: '',
  country: '',
  role: '', // Should typically be 'artist' for this reducer
  nationalId: '',
  fieldOfExpertise: '',
  website: '',

  // Profile Completion and Stats
  isProfileComplete: false,
  followersCount: 0,
  profileViews: 0,
  appreciationCount: 0,
  likes: 0,
  views: 0,

  // Nested Objects and Arrays
  representationDetails: {
    agencyName: '',
    agencyContact: '',
    contractStartDate: null, // Use null for Date types or specific default date
    contractEndDate: null,
    terms: '',
  },
  skills: [], // Array of strings
  experience: [], // Array of objects
  exhibitions: [], // Array of objects
  achievements: [], // Array of strings
  education: [], // Array of objects
  digitalTools: [], // Array of strings
  portfolioImages: [], // Array of strings (URLs)
  services: [], // Array of service objects
  events: [], // Array of event objects
  gallery: [], // Array of ObjectIds (represented as strings here for simplicity)
  followers: [], // Array of ObjectIds (represented as strings here for simplicity)

  // Settings & Links
  notificationsSettings: {
    email: true,
    inApp: true,
  },
  socialMediaLinks: {
    instagram: '',
    behance: '',
    twitter: '',
    linkedin: '',
    facebook: '',
  },

  // Other fields
  servicePicture: null,
  deleted: false,
  deletedAt: null, // Use null for Date types or specific default date

  // Authentication Status (if this slice manages it)
  isAuthenticated: false, // Assuming you might want to track this here
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    // Reducer to set the entire artist profile data
    setArtistProfile: (state, action) => {
      // Directly assign the payload to the state.
      // Redux Toolkit's Immer allows this mutable update syntax,
      // and it handles the immutability behind the scenes.
      // This is simpler than destructuring every single field.
      Object.assign(state, action.payload);

      // Ensure nested objects are initialized if not present in payload,
      // especially for things like socialMediaLinks or representationDetails
      state.representationDetails = state.representationDetails || initialState.representationDetails;
      state.notificationsSettings = state.notificationsSettings || initialState.notificationsSettings;
      state.socialMediaLinks = state.socialMediaLinks || initialState.socialMediaLinks;

      // Ensure arrays are arrays if they somehow come in as null/undefined
      state.skills = state.skills || [];
      state.experience = state.experience || [];
      state.exhibitions = state.exhibitions || [];
      state.achievements = state.achievements || [];
      state.education = state.education || [];
      state.digitalTools = state.digitalTools || [];
      state.portfolioImages = state.portfolioImages || [];
      state.services = state.services || [];
      state.events = state.events || [];
      state.gallery = state.gallery || [];
      state.followers = state.followers || [];

      // Set authentication status if included in payload
      if (action.payload.isAuthenticated !== undefined) {
        state.isAuthenticated = action.payload.isAuthenticated;
      }
    },
    // Reducer to update specific fields of the artist profile
    updateArtistProfileField: (state, action) => {
      const { field, value } = action.payload;
      // This allows updating any top-level field dynamically
      if (field in state) {
        state[field] = value;
      } else if (field.includes('.')) {
        // Handle nested updates (e.g., 'representationDetails.agencyName')
        const parts = field.split('.');
        let current = state;
        for (let i = 0; i < parts.length - 1; i++) {
          const part = parts[i];
          if (current[part] === undefined || typeof current[part] !== 'object' || current[part] === null) {
            current[part] = {}; // Initialize if path doesn't exist
          }
          current = current[part];
        }
        current[parts[parts.length - 1]] = value;
      }
    },
    // Reducer to add an item to an array field (e.g., skills, experience)
    addArtistArrayItem: (state, action) => {
      const { field, item } = action.payload;
      if (Array.isArray(state[field])) {
        state[field].push(item);
      }
    },
    // Reducer to remove an item from an array field (by index or by a unique ID)
    removeArtistArrayItem: (state, action) => {
      const { field, index, idField, idValue } = action.payload;
      if (Array.isArray(state[field])) {
        if (index !== undefined) {
          state[field].splice(index, 1);
        } else if (idField && idValue) {
          state[field] = state[field].filter(item => item[idField] !== idValue);
        }
      }
    },
    // Reducer to reset the artist profile to its initial state
    resetArtistProfile: () => initialState,

    // Reducer to toggle isAuthenticated status
    setArtistAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    // Reducer to update followers count
    setFollowersCount: (state, action) => {
      state.followersCount = action.payload;
    },

    // Reducer to update profile views
    setProfileViews: (state, action) => {
      state.profileViews = action.payload;
    },

    // Reducer to update appreciation count
    setAppreciationCount: (state, action) => {
      state.appreciationCount = action.payload;
    },

    // Reducer to update likes
    setLikes: (state, action) => {
      state.likes = action.payload;
    },

    // Reducer to update views
    setViews: (state, action) => {
      state.views = action.payload;
    },

    // You might also want specific reducers for adding/removing followers
    addFollower: (state, action) => {
      const userId = action.payload;
      if (!state.followers.includes(userId)) {
        state.followers.push(userId);
        state.followersCount = (state.followersCount || 0) + 1;
      }
    },
    removeFollower: (state, action) => {
      const userId = action.payload;
      const index = state.followers.indexOf(userId);
      if (index > -1) {
        state.followers.splice(index, 1);
        state.followersCount = Math.max(0, (state.followersCount || 0) - 1);
      }
    },
  },
});

export const {
  setArtistProfile,
  updateArtistProfileField,
  addArtistArrayItem,
  removeArtistArrayItem,
  resetArtistProfile,
  setArtistAuthenticated,
  setFollowersCount,
  setProfileViews,
  setAppreciationCount,
  setLikes,
  setViews,
  addFollower,
  removeFollower,
} = artistSlice.actions;

export default artistSlice.reducer;