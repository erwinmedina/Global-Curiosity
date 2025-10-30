export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "general";

    const endpoint = `https://newsapi.org/v2/top-headlines?category=${category}&language=en`;

    try {
        const res = await fetch(endpoint, { 
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
            },
            cache: 'no-store' });

        if (!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        console.log(data)
        return Response.json(data);
    
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch news!' }), {status: 500 });
    }
}