import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../common/Container';
import { NAV_ITEMS } from '../../constants/navigation';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm py-4' : 'py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          This is Code Club<span className="text-yellow-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.href === 'about' ? '/' : `/${item.href}`}
              className={`text-gray-400 hover:text-yellow-400 transition-colors ${
                location.pathname ===
                (item.href === 'about' ? '/' : `/${item.href}`)
                  ? 'text-yellow-400'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-yellow-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 md:hidden">
            <Container className="py-4">
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href === 'about' ? '/' : `/${item.href}`}
                    className={`text-gray-400 hover:text-yellow-400 transition-colors ${
                      location.pathname ===
                      (item.href === 'about' ? '/' : `/${item.href}`)
                        ? 'text-yellow-400'
                        : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </Container>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
