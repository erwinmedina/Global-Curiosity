function getBaseUrl() {
    if (typeof window === "undefined") {
    return process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";
    }
    return "";
}

export async function fetchNews(category: string = "general") {
    const base = getBaseUrl()
    const res = await fetch(`${base}/api/news?category=${category}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch news: ${res.status}`);
    }

    return res.json();
}

export async function fetchArticleBySlug(category: string, slug: string) {
    const base = getBaseUrl()
    const res = await fetch(
        `${base}/api/article/${category}?slug=${encodeURIComponent(slug)}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        return null;
    }

    return res.json();
}