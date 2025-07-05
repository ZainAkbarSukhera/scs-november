// src/api/artistApi.js
import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

const artistApi = axios.create({
  baseURL: `${API_BASE_URL}/artConnectDirectory`, // Use the environment variable here
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => localStorage.getItem("token");

export const getAllArtists = async () => {
  try {
    console.log("time to hit get all api");
    const response = await artistApi.get("/"); // Assuming your getAllArtists route is /v1/artist/all
    console.log("api sent this hehe: ", response);
    return response.data; // Return only the data payload
  } catch (error) {
    console.error("Error fetching artists:", error);
    // You might want to return an empty array or throw the error depending on desired behavior
    return (
      error.response?.data || {
        message: "Failed to fetch artists. Server error.",
      }
    );
  }
};


export const getArtistById = async (id) => {
  try {
    const response = await artistApi.get(`/${id}`); // Adjust endpoint as needed
    return response.data; // Assuming it returns the artist object directly or in a data field
  } catch (error) {
    console.error(`Error fetching artist with ID ${id}:`, error);
    throw error;
  }
};

export const getServicesByArtistId = async (artistId) => {
  try {
    console.log(`Fetching services for artist ID: ${artistId}`);

    const response = await artistApi.get(`/services/${artistId}`);
    console.log("Services API response:", response.data);
    return response.data; // This will return { success: true, data: [...services], servicePicture: "..." }
  } catch (error) {
    console.error(`Error fetching services for artist ID ${artistId}:`, error);
    // Return a structured error response that your frontend can easily handle.
    return (
      error.response?.data || {
        success: false,
        message: `Failed to fetch services for artist. Server error: ${error.message}`,
        data: [], // Return an empty array on error for safer consumption in frontend
        servicePicture: null // Default servicePicture to null on error
      }
    );
  }
};

export const likeArtistApi = async (artistId, userId) => {
  const token = getToken();
  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }
  try {
    const response = await artistApi.post(`/like/${artistId}`, { userId },// Body contains userId
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include token for authentication
        },
      }
    );
    return response.data; // Should contain { success: true, message: "...", artist: {...} }
  } catch (error) {
    console.error("Error liking artist:", error.response?.data || error.message);
    // Throw to be caught by the calling component (ConnectCardMain)
    throw error.response?.data || new Error(error.message);
  }
};

export const dislikeArtistApi = async (artistId, userId) => {
  const token = getToken();
  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }
  try {
    const response = await artistApi.post(`/dislike/${artistId}`, { userId },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error disliking artist:", error.response?.data || error.message);
    throw error.response?.data || new Error(error.message);
  }
};


export const getAllArtistsWithLikeStatus = async (currentUserId = null) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {} // Initialize params object
    };

    // If a userId is provided, include it as a query parameter for personalized data
    if (currentUserId) {
      config.params.userId = currentUserId;
    }

    // This line was commented out and also incorrect in its baseURL usage.
    // The `artistApi` instance already has the base URL set.
    const response = await artistApi.get(`/all`, config); // Assuming /v1/artConnectDirectory/all
    return response.data;
  } catch (error) {
    console.error("Error fetching all artists:", error.response?.data || error.message);
    throw error;
  }
};