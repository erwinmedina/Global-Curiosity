import { notFound } from "next/navigation";
import { fetchArticleBySlug } from "@/app/lib/fetchNews";
import { cleanTitle} from "@/app/utils/cleanTitle/cleanTitle";
import { formatDate } from "@/app/utils/formatDate/formatDate";
import FullArticle from "./FullArticle";

export default async function ArticlePage({params}: { params: Promise<{ category: string; slug: string }>}) {
    const { category, slug } = await params;
    const article = await fetchArticleBySlug(category, slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="p-6 text-gray-200">
            <img className="object-cover h-40 md:h-45 rounded-lg" src={article.urlToImage} alt="" />
            <h1 className="text-xl mb-2">{cleanTitle(article.title)}</h1>
            <h2 className="text-lg mt-5 text-gray-500">{article.source.name} - {formatDate(article.publishedAt)}</h2>
            <p className="text-gray-400">{article.description}</p>
            <FullArticle url={article.url}/>    
            
        </main>
    );
}
