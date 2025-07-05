import axios from "axios";

// Get the base URL from environment variables
// Use REACT_APP_ prefix for Create React App and similar non-Vite setups.
// Provide a fallback for safety if the variable isn't defined.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/v1";

// Create an Axios instance specifically for artwork API calls
const artworkApi = axios.create({
  // ** IMPORTANT: Adjust this baseURL to match your actual backend artwork routes **
  // If your backend artwork routes are structured like /v1/artworks/..., then this is correct.
  // Example: "http://localhost:3001/v1/artWork"
  baseURL: `${API_BASE_URL}/artWork`, // Use the environment variable here
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @desc Fetches a single artwork by its unique Artwork ID.
 * @param {string} artworkId - The unique ID of the artwork.
 * @returns {Promise<object>} - A promise that resolves to the API response data,
 * containing the artwork details or an error message.
 */
export const getArtworkByArtworkId = async (artworkId) => {
  try {
    console.log(`Fetching artwork with ID: ${artworkId}`);
    // The endpoint should match the route defined in the backend for fetching a single artwork by its own ID.
    // E.g., GET /v1/artWork/:artworkId
    const response = await artworkApi.get(`/${artworkId}`);
    console.log("Single Artwork API response:", response.data);
    return response.data; // Return the data payload from the response
  } catch (error) {
    console.error(`Error fetching artwork with ID ${artworkId}:`, error);
    return (
      error.response?.data || {
        success: false,
        message: `Failed to fetch artwork. Server error: ${error.message}`,
        artwork: null // Return null for artwork on error for safer consumption in frontend
      }
    );
  }
};


/**
 * @desc Fetches all artworks for a specific artist by their ID.
 * @param {string} artistId - The unique ID of the artist.
 * @returns {Promise<object>} - A promise that resolves to the API response data,
 * containing the artworks or an error message.
 */
export const getArtworksById = async (artistId) => {
  try {
    console.log(`Fetching artworks for artist ID: ${artistId}`);
    // The endpoint matches the route defined in the backend for fetching by artist ID.
    // E.g., GET /v1/artworks/artist/:artistId
    const response = await artworkApi.get(`/artworks/${artistId}`); // Changed to '/artist/${artistId}' as per common REST practice and your implied structure
    console.log("Artworks by Artist API response:", response.data);
    return response.data; // Return the data payload from the response
  } catch (error) {
    console.error(`Error fetching artworks for artist ID ${artistId}:`, error);
    // Return a structured error response that your frontend can easily handle.
    // This matches the pattern in your artistApi.js for error handling.
    return (
      error.response?.data || {
        success: false,
        message: `Failed to fetch artworks for artist. Server error: ${error.message}`,
        data: [] // Return an empty array on error for safer consumption in frontend
      }
    );
  }
};

export const getArtworksByPatronId = async (patronId) => {
    try {
    const response = await artworkApi.get(`/owner/${patronId}`); // Example endpoint
    console.log("Real artworks for patron API response:", response.data);
    return { success: true, artworks: response.data.artworks || [] };
  } catch (error) {
    console.error(`Error fetching artworks for patron ID ${patronId}:`, error);
    return {
      success: false,
      message: error.response?.data?.message || `Failed to fetch patron artworks. Server error: ${error.message}`,
      artworks: [],
    };
  }
};

// You can add more artwork-related API calls here as needed, e.g.,
// export const createArtwork = async (artworkData) => { /* ... */ };
// export const updateArtwork = async (artworkId, artworkData) => { /* ... */ };
// export const deleteArtwork = async (artworkId) => { /* ... */ };