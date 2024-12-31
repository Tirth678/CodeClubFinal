import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-6xl font-bold mb-6">
        Building Digital
        <br />
        <span className="text-yellow-400">Experiences</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mb-8">
        Full-stack developer specializing in creating innovative solutions 
        with modern technologies. Focused on delivering high-performance 
        applications with exceptional user experiences.
      </p>
      <a 
        href="#projects" 
        className="inline-flex items-center gap-2 text-yellow-400 hover:gap-4 transition-all duration-300"
      >
        View Projects <ArrowRight size={20} />
      </a>
    </div>
  );
};

export default HeroSection;