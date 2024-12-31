import React from 'react';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-yellow-400 mb-4">{item.category}</p>
          <p className="text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;