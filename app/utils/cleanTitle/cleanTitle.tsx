export function cleanTitle(title: string): string {
    return title.replace(/\s*[-–—][^-–—]*$/, "").trim();
}