import React from 'react';

interface NavItemProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, isActive, children }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`text-lg ${
          isActive ? 'text-yellow-400' : 'text-gray-400'
        } hover:text-yellow-400 transition-colors`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;