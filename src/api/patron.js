// frontend/src/api/patronsApi.js
import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

const patronsApi = axios.create({
  // **IMPORTANT**: Update this to your actual backend URL and route prefix
  baseURL: `${API_BASE_URL}/patron`, // Using the environment variable for the base path
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllPatrons = async () => {
  try {
    console.log("Attempting to fetch all patron profiles...");
    const response = await patronsApi.get("/"); // This hits YOUR_API_BASE_URL/v1/patron/
    console.log("Received all patron profiles from API:", response.data);
    // FIX: Wrap the response data in the expected structure { success: true, patrons: [...] }
    return { success: true, patrons: response.data };
  } catch (error) {
    console.error("Error fetching all patron profiles:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch patron profiles. Server error.",
      patrons: [] // Return empty array on error
    };
  }
};

/**
 * @desc Fetches a single patron profile by its unique ID.
 * @param {string} patronId - The unique ID of the patron.
 * @returns {Promise<object>} A promise that resolves to the API response data,
 * containing the patron profile details or an error message.
 */
export const getPatronById = async (patronId) => {
  try {
    console.log(`Attempting to fetch patron profile with ID: ${patronId}`);
    const response = await patronsApi.get(`/${patronId}`); // Endpoint for a single patron: YOUR_API_BASE_URL/v1/patron/:patronId
    console.log("Received single patron profile from API:", response.data);
    // Assuming backend returns { success: true, patron: {...} }
    return response.data;
  } catch (error) {
    console.error(`Error fetching patron profile with ID ${patronId}:`, error);
    return {
      success: false,
      message: error.response?.data?.message || `Failed to fetch patron profile. Server error: ${error.message}`,
      patron: null,
    };
  }
};