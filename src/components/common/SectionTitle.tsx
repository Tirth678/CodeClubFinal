import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">{children}</h2>
      <div className="w-12 h-1 bg-yellow-400"></div>
    </>
  );
};

export default SectionTitle;