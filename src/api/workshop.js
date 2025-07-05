// frontend/src/api/workshopApi.js
import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

// Create an Axios instance for Workshop specific requests
const workshopApi = axios.create({
  // Base URL for your Workshop API.
  // This should match the base path you set up in your backend (e.g., app.use('/api/v1/workshops', ...)).
  baseURL: `${API_BASE_URL}/artLearn`, // Using the environment variable for the base path
  withCredentials: true, // If your API handles sessions/cookies
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetches all workshops from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of workshop items.
 * @throws {Object} An error object if the API call fails.
 */
export const getAllWorkshops = async () => {
  try {
    console.log("Attempting to fetch all workshops...");
    const response = await workshopApi.get("/"); // Assuming the route for all workshops is just the base URL '/'
    console.log("Received workshops from API:", response.data);
    return response.data; // The controller directly returns an array of workshops
  } catch (error) {
    console.error("Error fetching workshops:", error);
    // Return the error response data if available, otherwise a generic error message
    throw error.response?.data || { message: "Failed to fetch workshops. Server error." };
  }
};


/**
 * @desc Fetches a single workshop by its unique ID.
 * @param {string} workshopId - The unique ID of the workshop.
 * @returns {Promise<object>} A promise that resolves to the API response data,
 * containing the workshop details or an error message.
 */
export const getWorkshopByWorkshopId = async (workshopId) => {
  try {
    console.log(`Attempting to fetch workshop with ID: ${workshopId}`);
    // Assuming the backend route for a single workshop is /v1/artLearn/:workshopId
    const response = await workshopApi.get(`/${workshopId}`);
    console.log("Received single workshop from API:", response.data);
    // Assuming your backend controller returns the workshop object directly
    return { success: true, workshop: response.data };
  } catch (error) {
    console.error(`Error fetching workshop with ID ${workshopId}:`, error);
    return {
      success: false,
      message: error.response?.data?.message || `Failed to fetch workshop details. Server error: ${error.message}`,
      workshop: null,
    };
  }
};