"use client"

import Navbar from "./components/navbar/navbar";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("general");

  return (
    <div>
        <Navbar onCategoryChange={setCategory} selectedCategory={category}/>
        <NewsFeed category={category}/>
    </div>
  );
}
