// src/utils/sizeMapper.js

/**
 * Maps physical artwork dimensions (e.g., "100x250cm") to predefined size categories.
 * Assumes format is "WxHunit" or "W x H unit" or similar, with 'x' as separator.
 * It primarily considers the larger dimension to categorize.
 *
 * @param {string} sizeString - The raw size string from the artwork data.
 * @returns {string} The categorized size (e.g., "small", "medium", "large", "extra-large", "unknown").
 */
export const mapArtworkSizeToCategory = (sizeString) => {
  if (!sizeString || typeof sizeString !== 'string') {
    return 'unknown';
  }

  // Remove units (cm, in, m etc.) and trim, then split by 'x'
  const cleanedSize = sizeString.toLowerCase().replace(/cm|in|m|px/g, '').trim();
  const dimensions = cleanedSize.split(/x|\s+x\s+/).map(Number).filter(n => !isNaN(n) && n > 0);

  if (dimensions.length < 1) {
    return 'unknown';
  }

  const maxDim = Math.max(...dimensions); // Get the largest dimension

  // Define your size thresholds (these are examples, adjust as needed)
  if (maxDim <= 40) { // e.g., max 40cm
    return 'small';
  } else if (maxDim <= 80) { // e.g., max 80cm
    return 'medium';
  } else if (maxDim <= 150) { // e.g., max 150cm
    return 'large';
  } else if (maxDim > 150) { // e.g., over 150cm
    return 'extra-large';
  }

  return 'unknown'; // Fallback
};

/**
 * Maps digital artwork/print dimensions (often pixel-based or descriptive) to categories.
 * This can be adapted based on how your digital/print sizes are stored.
 *
 * @param {string} sizeString - The raw size string from the artwork data (e.g., "1920x1080 pixels", "Under 1000 x 1000 pixels").
 * @returns {string} The categorized size (e.g., "small", "medium", "large", "custom", "unknown").
 */
export const mapDigitalSizeToCategory = (sizeString) => {
  if (!sizeString || typeof sizeString !== 'string') {
    return 'unknown';
  }

  const lowerSize = sizeString.toLowerCase();

  // Define categories based on common digital descriptions or pixel ranges
  // Adjust these string checks and thresholds to match your actual data and filter options
  if (lowerSize.includes("under 1000") || lowerSize.includes("low-res") || (lowerSize.includes("x") && lowerSize.includes("px") && Math.max(...lowerSize.split(/x/).map(s => parseInt(s)).filter(n => !isNaN(n))) <= 1000)) {
    return 'small';
  } else if (lowerSize.includes("1000-2000") || lowerSize.includes("medium-res") || (lowerSize.includes("x") && lowerSize.includes("px") && Math.max(...lowerSize.split(/x/).map(s => parseInt(s)).filter(n => !isNaN(n))) <= 2000)) {
    return 'medium';
  } else if (lowerSize.includes("above 2000") || lowerSize.includes("high-res") || (lowerSize.includes("x") && lowerSize.includes("px") && Math.max(...lowerSize.split(/x/).map(s => parseInt(s)).filter(n => !isNaN(n))) > 2000)) {
    return 'large';
  } else if (lowerSize.includes("custom") || lowerSize.includes("variable")) {
    return 'custom';
  }

  // You might also parse pixel dimensions numerically if they are consistently structured
  // Example for numeric pixel parsing:
  const numericPixels = lowerSize.match(/(\d+)\s*x\s*(\d+)\s*pixels/);
  if (numericPixels && numericPixels.length === 3) {
      const width = parseInt(numericPixels[1]);
      const height = parseInt(numericPixels[2]);
      const maxDim = Math.max(width, height);
      if (maxDim <= 1000) return 'small';
      if (maxDim <= 2000) return 'medium';
      if (maxDim > 2000) return 'large';
  }

  return 'unknown'; // Fallback
};