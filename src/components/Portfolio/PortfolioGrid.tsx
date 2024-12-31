import React from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid = ({ items }: PortfolioGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PortfolioGrid;