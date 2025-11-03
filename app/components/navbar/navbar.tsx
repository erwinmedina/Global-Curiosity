"use client"
import "./navbar.css"
interface NavbarProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void
}

export default function Navbar({ selectedCategory, onCategoryChange}: NavbarProps) {
    const categories = [
        {
            buttonName: "General",
            categoryName: 'general'
        },
        {
            buttonName: "Tech",
            categoryName: 'technology'
        },
        {
            buttonName: "Sports",
            categoryName: 'sports'
        },
        {
            buttonName: "Science",
            categoryName: 'science'
        },
]
    return (
        <div className="bg-navbar-vertical flex flex-col md:flex-row p-5 min-w-screen items-center bg-zinc-50 font-sans dark:bg-black">
            
            {/* This handles the globe and title on navbar */}
            <div className="flex justify-center pb-5 md:pb-0 md:pr-5 items-center">
                <img src="./favicon.ico" className="mr-3 w-10 h-10"></img>
                <button className="font-display">Global Curiosity</button>
            </div>

            {/* This handles the category buttons */}
            <div className="flex justify-center md:justify-start w-full">
                {categories.map(cat => (
                    <button 
                        key={cat.categoryName} 
                        onClick={() => onCategoryChange(cat.categoryName)}
                        className="m-1 cursor-pointer bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 w-25 rounded-full"
                    >
                        {cat.buttonName}
                    </button>
                ))}
            </div>

        </div>
    )
}