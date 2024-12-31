import React, { useState, useMemo } from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import PortfolioFilter from '../components/Portfolio/PortfolioFilter';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';
import { portfolioItems } from '../data/portfolioItems';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(portfolioItems.map(item => item.category))];
    return cats;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-32">
      <Container>
        <div className="space-y-8">
          <SectionTitle>Projects</SectionTitle>
          
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <PortfolioGrid items={filteredItems} />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;