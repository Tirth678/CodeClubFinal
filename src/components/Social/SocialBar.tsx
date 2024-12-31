import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 bg-[#2a2a2a]/90 backdrop-blur-sm px-6 py-3 rounded-full">
      <a 
        href="https://github.com/Tirth678/CodeClubFinal" 
        className="hover:text-yellow-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/company/code-club-gsfcu/posts/?feedView=all" 
        className="hover:text-yellow-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="mailto:contact@example.com" 
        className="hover:text-yellow-400 transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default SocialBar;