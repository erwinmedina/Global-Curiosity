"use client"

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
        <div className="flex p-5 min-w-screen items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex">
                <button className="pr-15 ">Global Curiosity</button>
            </div>
            <div className="flex justify-center">
                {categories.map(cat => (
                    <button 
                        key={cat.categoryName} 
                        onClick={() => onCategoryChange(cat.categoryName)}
                        className="m-1 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 w-25 rounded-full"
                    >
                        {cat.buttonName}    
                    </button>
                ))}
            </div>

        </div>
    )
}