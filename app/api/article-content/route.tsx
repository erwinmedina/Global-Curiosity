import { NextResponse } from "next/server";
import * as cheerio from 'cheerio';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Missing Article URL' }, { status: 400 })
    }
    try {
        const res = await fetch(url)
        const html = await res.text();

        const $ = cheerio.load(html);

        let articleText = $('article').text().trim();

        if (!articleText || articleText.length < 200) {
            articleText = $('p')
                .map((_, el) => $(el).text())
                .get()
                .join('\n')
                .trim();
        }

        const cleanText = articleText.replace(/\s+/g, " ").slice(0, 5000);
        return NextResponse.json({ content: cleanText });
    } catch (err) {
        console.error('Error fetching article:', err);
        return NextResponse.json({ error: 'Failed to fetch article!'}, { status: 500 });
    }
}