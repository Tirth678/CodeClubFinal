import React from 'react';
import NavItem from './NavItem';
import { NAV_ITEMS } from '../../constants/navigation';

const Navigation = () => {
  return (
    <nav className="mt-12">
      <ul className="flex flex-wrap justify-center gap-8">
        {NAV_ITEMS.map((item, index) => (
          <NavItem
            key={item.id}
            href={`#${item.href}`}
            isActive={index === 0}
          >
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;