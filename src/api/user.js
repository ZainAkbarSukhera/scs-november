import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

const api = axios.create({
  baseURL: `${API_BASE_URL}/user`, // Use the environment variable for the base path
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response; // Return only the actual response payload
  } catch (error) {
    return error.response?.data || { message: "Login failed. Server error." };
  }
};

export const signup = async (data) => {
  try {
    console.log("Sending to backend", data);
    const response = await api.post("/create", data);
    return response; // Return only the actual response payload
  } catch (error) {
    console.error("Signup error:", error);
    return error.response?.data || { message: "Signup failed. Server error." };
  }
};

export const followArtistApi = async (userId, artistId) => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  if (!token) {
    // This case should ideally be handled by the UI before calling this,
    // but it's a good safety check.
    throw new Error("Authentication token not found. Please log in.");
  }

  try {
    // Assuming your backend /follow endpoint for user is within the /user route
    const response = await api.post("/follow", { userId, artistId }, {
      headers: {
        'Authorization': `Bearer ${token}` // Add Authorization header
      }
    });

    return {
      success: true,
      message: response.data.message,
      artistProfile: response.data.artistProfile,
    };
  } catch (error) {
    console.error(
      "Error in followArtistApi:",
      error.response?.data || error.message
    );
    return {
      success: false,
      message:
        error.response?.data?.message || error.message || "Network error",
    };
  }
};

export const unfollowArtistApi = async (userId, artistId) => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  if (!token) {
    throw new Error("Authentication token not found. Please log in.");
  }

  try {
    // Assuming your backend /unfollow endpoint for user is within the /user route
    const response = await api.post("/unfollow", { userId, artistId }, {
      headers: {
        'Authorization': `Bearer ${token}` // Add Authorization header
      }
    });
    return {
      success: true,
      message: response.data.message,
      artistProfile: response.data.artistProfile,
    };
  } catch (error) {
    console.error(
      "Error in unfollowArtistApi:",
      error.response?.data || error.message
    );
    return {
      success: false,
      message:
        error.response?.data?.message || error.message || "Network error",
    };
  }
};

// export const signout = async () => {
//   let response;

//   try{
//     response = await api.post("/logout");
//       return response;
//   } catch (error){
//     return error;
//   }

// }