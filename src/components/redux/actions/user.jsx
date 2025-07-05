// action.js
import { userSlice } from '../reducers/user';

export const { setUser, resetUser, setLoggedInUser, logoutUser  } = userSlice.actions;
