export function cleanTitle(str: string): string {
    // First everything after the last dash
    return str.replace(/\s*-\s*[^-]+$/, '').trim();

}
export function cleanTitleForURL(str: string): string {
    // Remove everything after the last dash
    const titleWithoutSource = str.replace(/\s*-\s*[^-]+$/, '').trim();

    // Then clean it for URL
    return titleWithoutSource
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}