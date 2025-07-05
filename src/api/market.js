// frontend/src/api/artMarketApi.js
import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

// Create an Axios instance for ArtMarket specific requests
const artMarketApi = axios.create({
  // Base URL for your ArtMarket API.
  // This should match the base path you set up in your backend (e.g., app.use('/api/v1/market', ...)).
  baseURL: `${API_BASE_URL}/artMarket`, // Use the environment variable here
  withCredentials: true, // If your API handles sessions/cookies
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetches all art market items from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of art market items.
 * @throws {Object} An error object if the API call fails.
 */
export const getAllMarketItems = async () => {
  try {
    console.log("Attempting to fetch all art market items...");
    const response = await artMarketApi.get("/"); // Assuming the route for all items is just the base URL '/'
    console.log("Received art market items from API:", response.data);
    return response.data.data; // The controller returns { success: true, data: markets }
  } catch (error) {
    console.error("Error fetching art market items:", error);
    // Return the error response data if available, otherwise a generic error message
    throw (
      error.response?.data || {
        message: "Failed to fetch art market items. Server error.",
      }
    );
  }
};