// this should be the only place that touches the api //

import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "general";

    const endpoint = `https://newsapi.org/v2/top-headlines?category=${category}&language=en`;

    const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${process.env.NEWS_API_KEY}` },
        cache: "no-store",
    });

    if (!res.ok) {
        return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
    }

    const data = await res.json();

    const sorted = data.articles.sort(
        (a: any, b: any) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return NextResponse.json({ ...data, articles: sorted });
}
