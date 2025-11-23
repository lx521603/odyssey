/**
 * Generates structured data for tags, ensuring slugs are URL-safe 
 * (encoded for non-Latin characters and lowercase for Latin characters).
 * * @param {Set<string>} allTags - A Set of unique tag strings.
 * @returns {Array<{title: string, slug: string}>} Array of structured tag objects.
 */
export function generateTagData(allTags) {
    const tagsData = Array.from(allTags).map(tag => {
        // Step 1: Normalize the tag for path generation (lowercase and URL encoding)
        let slug = tag.trim();

        // Check if the tag contains non-ASCII characters (e.g., Chinese)
        const isNonAscii = /[^a-zA-Z0-9\s-]/.test(slug);

        if (isNonAscii) {
            // Non-ASCII: Encode the entire slug (required for Chinese)
            // Note: We use the raw tag here because encodeURIComponent needs the actual characters
            slug = encodeURIComponent(tag.trim());
        } else {
            // ASCII (English): Convert to lowercase and replace spaces with hyphens 
            // (Standard Astro behavior for clean URLs)
            slug = slug.toLowerCase().replace(/\s+/g, '-');
        }

        return {
            title: tag, // Keep original case for display
            slug: slug
        };
    });

    return tagsData;
}

