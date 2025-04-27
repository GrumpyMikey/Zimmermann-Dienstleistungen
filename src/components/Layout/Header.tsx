import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../UI/Logo';
import NavLinks from './NavLinks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <Logo light={!isScrolled} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <a 
              href="tel:+49123456789" 
              className="flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>+49 123 456 789</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-primary-500 text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks isScrolled={true} isMobile={true} onLinkClick={() => setIsMenuOpen(false)} />
              <a 
                href="tel:+49123456789" 
                className="flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors py-2"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>+49 123 456 789</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;