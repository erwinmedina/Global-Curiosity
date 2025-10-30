'use client'

import { useEffect, useState } from "react"
import NewsCard from "../newsCard/newsCard";

export default function NewsFeed( { category }: { category: string }) {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        async function loadNews() {
            const res = await fetch(`/api/news?category=${category}`);
            const data = await res.json();
            setArticles(data.articles || []);
            console.log(data);
        }
        loadNews();
    }, [category])
    return (
        <div className="grid grid-cols-2 gap-4">
            {articles.map((article, i) => (
                <NewsCard key={i} art={article}/>
            ))}
        </div>
    )

}