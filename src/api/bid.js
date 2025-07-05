// src/api/openCallsApi.js
import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

// Create an Axios instance for OpenCalls specific requests
const openCallsApi = axios.create({
  // Base URL for your OpenCalls API.
  // This should match the base path you set up in your backend (e.g., app.use('/api/v1/openCalls', ...)).
  baseURL: `${API_BASE_URL}/artBidInteraction`, // Use the environment variable here
  withCredentials: true, // If your API handles sessions/cookies
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetches all open calls (bids) from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of open call objects.
 * @throws {Object} An error object if the API call fails.
 */
export const getAllOpenCalls = async () => {
  try {
    console.log("Attempting to fetch all open calls...");
    const response = await openCallsApi.get("/allOpenCalls"); // Assuming the route for all open calls is /artBidInteraction/allOpenCalls
    console.log("Received open calls from API:", response.data);
    return response.data; // Return only the data payload from the response
  } catch (error) {
    console.error("Error fetching open calls:", error);
    // Return the error response data if available, otherwise a generic error message
    throw (
      error.response?.data || {
        message: "Failed to fetch open calls. Server error.",
      }
    );
  }
};

/**
 * @desc Fetches a single open call by its unique ID.
 * @param {string} openCallId - The unique ID of the open call.
 * @returns {Promise<object>} A promise that resolves to the API response data,
 * containing the open call details or an error message.
 */
export const getOpenCallById = async (openCallId) => {
  try {
    console.log(`Attempting to fetch open call with ID: ${openCallId}`);
    const response = await openCallsApi.get(`/${openCallId}`); // Endpoint for a single open call: /artBidInteraction/:openCallId
    console.log("Received single open call from API:", response.data);
    return response.data; // Assuming backend returns { success: true, openCall: {...} }
  } catch (error) {
    console.error(`Error fetching open call with ID ${openCallId}:`, error);
    // Return a structured error response for frontend consumption
    return (
      error.response?.data || {
        success: false,
        message: `Failed to fetch open call details. Server error: ${error.message}`,
        openCall: null,
      }
    );
  }
};