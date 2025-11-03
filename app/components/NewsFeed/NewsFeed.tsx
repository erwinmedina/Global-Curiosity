'use client'

import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

interface Article {
    title: string;
    content: string;
    description: string;
    url: string;
    urlToImage?: string;
    author?: string;
    publishedAt: string;
}

interface NewsFeedProps {
    category: string;
}

export default function NewsFeed({ category }: NewsFeedProps) {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        let isMounted = true;

        async function loadNews() {
        try {
            
            const res = await fetch(`/api/news?category=${category}`);
            
            if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status}`);
            }
            
            const data = await res.json();
            
            if (isMounted) {
            setArticles(data.articles || []);
            }
        } catch (err) {
            console.error("Failed to load news:", err);
            }
        }

        loadNews();

        return () => {
        isMounted = false;
        };
    }, [category]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
            <NewsCard key={article.url || i} art={article} category={category} />
        ))}
        </div>
    );
}