'use client'

import { useState, useEffect } from "react"

export default function FullArticle({ url }: { url: string }) {
    const [fullArticle, setFullArticle] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchFullArticle(){
            setLoading(true)
            try {
                const res = await fetch(`/api/article-content?url=${encodeURIComponent(url)}`);
                const data = await res.json();
                if (data.content) setFullArticle(data.content);
            } catch (err) {
                console.error('Error fetching full article!!!', err);
            } finally {
                setLoading(false)
            }
        }
        fetchFullArticle();
    }, [url]);

    return (
        <div className="mt-6">
            <p className="text-gray-300 whitespace-pre-line mt-4">{fullArticle}</p>
        </div>
    )
}