import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: '',
  fullNameEnglish: '',
  fullNameArabic: '',
  username: '',
  email: '',
  password: '',
  mobileNumber: '',
  city: '',
  country: '',
  profilePicture: null,
  role: '',
  interests: [],
  auth: false,
  biographyEnglish:'',
  biographyArabic:'',
  artistLicense: null,
  fieldOfExpertise: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        _id, fullNameArabic, fullNameEnglish, email,
        username, password, mobileNumber, country,
        city, interests, role, profilePicture,auth, biographyEnglish,biographyArabic,artistLicense,fieldOfExpertise,
      } = action.payload;

      state._id = _id;
      state.fullNameEnglish = fullNameEnglish;
      state.fullNameArabic = fullNameArabic;
      state.username = username;
      state.password = password;
      state.email = email;
      state.mobileNumber = mobileNumber;
      state.country = country;
      state.city = city;
      state.interests = interests;
      state.role = role;
      state.profilePicture = profilePicture;
      state.auth= auth;
      state.biographyArabic=biographyArabic;
      state.biographyEnglish=biographyEnglish;
      state.artistLicense=artistLicense;
      state.fieldOfExpertise=fieldOfExpertise;
    },

    resetUser: () => initialState,

     setLoggedInUser: (state, action) => {
      state.user = action.payload; // action.payload should be { _id: '...', email: '...', ... }
      state.auth = true;
    },
    // This action would be dispatched on logout
    logoutUser: (state) => {
      state.user = null;
      state.auth = false;
    },
  },
});



export default userSlice.reducer;
