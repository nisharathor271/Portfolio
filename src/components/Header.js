import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-2xl border-b border-white/20' : 'bg-transparent'
      }`}>
      <nav className="container-max px-4">
        <div className="flex items-center justify-center h-16">
          {/* Centered Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl px-6 py-2 shadow-lg border border-white/30">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-primary-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-primary-50 hover:scale-105 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:scale-105 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-primary-600 rounded-xl hover:bg-primary-50 hover:scale-105 transition-all duration-300 transform group"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <div className="w-2 h-2 bg-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;