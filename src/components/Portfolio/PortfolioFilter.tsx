import React from 'react';

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PortfolioFilter = ({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-yellow-400 text-black'
              : 'text-gray-400 hover:text-yellow-400'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;