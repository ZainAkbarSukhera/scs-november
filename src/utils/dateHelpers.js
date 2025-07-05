// src/utils/dateHelpers.js

/**
 * Extracts the creation timestamp from a MongoDB ObjectId string.
 * @param {string} objectId The MongoDB ObjectId string (e.g., "60c72b2f9b1d8d001c8e4d1f").
 * @returns {Date|null} A Date object representing the creation time, or null if the ObjectId is invalid.
 */
export const getCreationDateFromObjectId = (objectId) => {
  if (!objectId || typeof objectId !== 'string' || objectId.length !== 24) {
    // Basic validation for ObjectId string length
    return null;
  }
  try {
    // The first 8 hex characters of the ObjectId represent the timestamp
    const timestampHex = objectId.substring(0, 8);
    // Convert hex to decimal, then multiply by 1000 because it's in seconds
    const timestampMs = parseInt(timestampHex, 16) * 1000;
    return new Date(timestampMs);
  } catch (e) {
    console.error("Error parsing ObjectId for creation date:", e);
    return null;
  }
};