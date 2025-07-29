import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useJarvis } from '../../context/JarvisContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isActive, toggleJarvis } = useJarvis();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <header className="bg-bg-primary border-b-2 border-iron-red fixed top-0 w-full z-10 py-2 px-4 backdrop-blur-sm bg-opacity-95">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 iron-transition iron-hover">
          <div className="arc-reactor">
            <img 
              src="https://customer-assets.emergentagent.com/job_d2fbc2f2-d986-4d3f-926b-807d09caf343/artifacts/jg7d8t3b_passportSize.jpg"
              alt="Yash Gohel"
              className="w-10 h-10 rounded-full object-cover border-2 border-iron-gold hover:border-iron-red transition-all duration-300 hover:shadow-lg hover:shadow-iron-gold"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-base font-bold text-white hover:text-iron-gold transition-colors">Yash Gohel</div>
            <div className="text-xs iron-text">Tony Stark</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-500 font-medium relative overflow-hidden group ${
                isActivePath(item.path) 
                  ? 'bg-gradient-to-br from-iron-red via-red-600 to-red-800 text-white shadow-xl border border-iron-gold shadow-iron-red/50' 
                  : 'text-text-secondary hover:text-white hover:bg-gradient-to-br hover:from-iron-red/20 hover:via-iron-gold/10 hover:to-iron-red/20 border border-transparent hover:border-iron-gold/50'
              }`}
            >
              {/* Enhanced hover effect for non-active items */}
              {!isActivePath(item.path) && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-iron-gold to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 transform -translate-x-full group-hover:translate-x-full" />
                  <span className="absolute inset-0 bg-gradient-to-b from-iron-red/10 via-transparent to-iron-gold/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </>
              )}
              {/* Active item glow effect */}
              {isActivePath(item.path) && (
                <span className="absolute inset-0 bg-gradient-to-r from-iron-gold/20 via-transparent to-iron-gold/20 animate-pulse" />
              )}
              <span className="relative z-10 font-semibold tracking-wide">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* JARVIS Control */}
        <div className="flex items-center space-x-4">
          {/* JARVIS Toggle */}
          <button
            onClick={toggleJarvis}
            className={`px-4 py-2 text-xs rounded-lg font-bold transition-all duration-500 relative overflow-hidden group transform hover:scale-105 ${
              isActive 
                ? 'bg-gradient-to-br from-iron-gold via-yellow-400 to-iron-gold text-bg-primary hover:from-yellow-300 hover:via-iron-gold hover:to-yellow-500 shadow-lg border border-iron-red shadow-iron-gold/50' 
                : 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-gray-300 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 border border-gray-600 hover:border-iron-gold/50 shadow-md'
            }`}
          >
            {/* Enhanced shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-all duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
            {/* Pulse effect for active state */}
            {isActive && (
              <span className="absolute inset-0 bg-gradient-to-r from-iron-gold/20 via-transparent to-iron-gold/20 animate-pulse rounded-lg" />
            )}
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-br from-iron-red/20 via-transparent to-iron-gold/20" />
            <span className="relative z-10 tracking-wider">
              JARVIS {isActive ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-white hover:text-iron-gold transition-colors rounded-md hover:bg-brand-hover border border-transparent hover:border-iron-gold"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t-2 border-iron-red bg-bg-primary bg-opacity-95 backdrop-blur-sm rounded-b-lg">
          <nav className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`mx-4 px-6 py-4 rounded-lg transition-all duration-500 font-medium relative overflow-hidden group ${
                  isActivePath(item.path)
                    ? 'bg-gradient-to-br from-iron-red via-red-600 to-red-800 text-white border-2 border-iron-gold shadow-xl shadow-iron-red/40'
                    : 'text-text-secondary hover:text-white hover:bg-gradient-to-br hover:from-iron-red/20 hover:via-iron-gold/10 hover:to-iron-red/20 border-2 border-transparent hover:border-iron-gold/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Enhanced mobile hover effect */}
                {!isActivePath(item.path) && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-iron-gold to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 transform -translate-x-full group-hover:translate-x-full" />
                    <span className="absolute inset-0 bg-gradient-to-b from-iron-red/10 via-transparent to-iron-gold/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </>
                )}
                {/* Active item glow effect */}
                {isActivePath(item.path) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-iron-gold/20 via-transparent to-iron-gold/20 animate-pulse rounded-lg" />
                )}
                <span className="relative z-10 font-semibold tracking-wide">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;