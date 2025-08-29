import React, { useState, useEffect } from 'react';
import { ImageAssets } from './ImageAssets';

interface HeaderProps {
  onHireMeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHireMeClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky || isMenuOpen ? 'bg-[#0b293e]' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-5">
        <a href="#home" className="text-2xl font-bold text-white flex items-center">
          <img src={ImageAssets.logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span>Abubakar.</span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg text-white hover:text-[#00abf0] transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <button 
            onClick={onHireMeClick} 
            className="hidden md:inline-block px-6 py-2 border-2 border-[#00abf0] text-[#00abf0] rounded-full font-semibold hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"
        >
          Hire Me
        </button>
        <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#0b293e] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-[68px]">
           {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-2xl text-white hover:text-[#00abf0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
                setIsMenuOpen(false);
                onHireMeClick();
            }} 
            className="mt-4 px-8 py-3 border-2 border-[#00abf0] text-[#00abf0] rounded-full font-semibold hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;