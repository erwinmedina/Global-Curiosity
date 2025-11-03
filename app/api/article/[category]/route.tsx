import { NextResponse } from "next/server";
import { cleanTitleForURL } from "@/app/utils/cleanTitle/cleanTitle";

export async function GET(request: Request,	{ params }: { params: { category: string } }) {
	const { category } = await params;
  	const { searchParams } = new URL(request.url);
  	const encodedSlug = searchParams.get("slug");

	if (!encodedSlug) {
		return NextResponse.json({ error: "Missing slug" }, { status: 400 });
	}

	// Decode the URL-encoded slug
	const slug = decodeURIComponent(encodedSlug);

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/news?category=${category}`,
		{ cache: "no-store" }
	);

	if (!res.ok) {
		return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
	}

	const data = await res.json();
	const article = data.articles.find((a: any) => {
		const cleanedTitle = cleanTitleForURL(a.title);
		console.log("Comparing:", cleanedTitle, "===", slug);
		return cleanedTitle === slug;
	});

	if (!article) {
		console.log("No article found for slug:", slug);
		return NextResponse.json({ error: "Article not found" }, { status: 404 });
	}

	return NextResponse.json(article);
}