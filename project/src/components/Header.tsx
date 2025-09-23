import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Zap, Lock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [glitchText, setGlitchText] = useState('CYBERH4CK3R');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = ['C', 'Y', 'B', 'E', 'R', 'H', '4', 'C', 'K', '3', 'R'];
      const randomGlitch = glitchChars.map(char => 
        Math.random() > 0.8 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
      ).join('');
      setGlitchText(randomGlitch);
      setTimeout(() => setGlitchText('CYBERH4CK3R'), 100);
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#about' },
    { name: 'Exploits', href: '#blog' },
    { name: 'Arsenal', href: '#projects' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-green-500/30 shadow-lg shadow-green-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Terminal className="h-8 w-8 text-green-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold font-mono tracking-wider bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              {glitchText}
            </span>
            <Lock className="h-4 w-4 text-red-400 animate-bounce" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-mono">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-green-300 hover:text-cyan-400 transition-all duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-green-300 hover:text-cyan-400 transition-colors relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <Zap className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 animate-ping" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-green-500/30">
          <div className="px-4 py-4 space-y-3 font-mono">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-green-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;