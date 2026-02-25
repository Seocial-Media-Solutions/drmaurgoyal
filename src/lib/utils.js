/**
 * Converts Google Drive sharing links to direct image links.
 * Also handles other potential image URL transformations.
 * 
 * @param {string} url - The original image URL or Google Drive link
 * @returns {string} - The direct image URL or the original URL if no conversion needed
 */
export const getDirectImageUrl = (url) => {
    if (!url) return '';

    // Handle Google Drive links
    // Format 1: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    // Format 2: https://drive.google.com/open?id=FILE_ID
    // Format 3: https://docs.google.com/file/d/FILE_ID/edit

    const driveRegex = /(?:https?:\/\/)?(?:drive|docs)\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)(?:\/[a-z]+)?(?:\?.*)?/;
    const match = url.match(driveRegex);

    if (match && match[1]) {
        const fileId = match[1];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }

    // Handle Google Photos (This is more complex as Google Photos doesn't easily provide direct links)
    // If it's a known Google Photos URL format that needs conversion, add it here.
    // For now, focusing on the most common "Google Drive" requirement.

    return url;
};
