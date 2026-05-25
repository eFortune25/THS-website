"use client";

import { BlogCategory } from "@/data/blog-posts";

interface CategoryFilterProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const categoryColors: Record<string, string> = {
    "Global Health": "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100",
    "Health Systems Strengthening": "border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-100",
    "Implementation Science": "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100",
    "Monitoring & Evaluation": "border-indigo-500 bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    "Digital Health & AI": "border-cyan-500 bg-cyan-50 text-cyan-700 hover:bg-cyan-100",
    "Global Fund & Development Financing": "border-green-500 bg-green-50 text-green-700 hover:bg-green-100",
    "Research & Publication": "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100",
    "WBGH": "border-pink-500 bg-pink-50 text-pink-700 hover:bg-pink-100",
  };

  const allCategoryStyle = selectedCategory === null
    ? "border-2 border-teal-700 bg-teal-700 text-white shadow-md"
    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100";

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* All Categories Button */}
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full font-medium transition-all ${allCategoryStyle}`}
      >
        All Articles
      </button>

      {/* Category Buttons */}
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const baseStyle = categoryColors[category] || "border-gray-500 bg-gray-50 text-gray-700 hover:bg-gray-100";
        
        const buttonStyle = isSelected
          ? `border-2 ${baseStyle.split(" ")[0]} ${baseStyle.split(" ")[1]} ${baseStyle.split(" ")[2]} shadow-md font-semibold`
          : `border ${baseStyle} font-medium`;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${buttonStyle}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
