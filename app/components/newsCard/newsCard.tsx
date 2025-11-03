import Link from "next/link";
import { cleanTitle, cleanTitleForURL } from "@/app/utils/cleanTitle/cleanTitle";

export interface Article {
    title: string;
    content: string;
    description: string;
    url: string;
    urlToImage?: string;
    author?: string;
    publishedAt: string;
}

interface NewsCardProps {
    art: Article;
    category: string;
}

export default function NewsCard({ art, category }: NewsCardProps) {
    const slug = cleanTitleForURL(art.title);
    const cardTitle = cleanTitle(art.title);

    return (
        <div className="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/article/$${category}/{slug}`}>
                <img className="object-cover h-40 md:h-45 w-full rounded-t-lg" src={art?.urlToImage} alt="" />
            </Link>
            <div className="p-2 md:p-5">
                <Link href={`/article/${category}/${slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardTitle}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{art?.description}</p>
                <Link href={`/article/${category}/${slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark-focus:ring-blue-800">
                    Read More
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}