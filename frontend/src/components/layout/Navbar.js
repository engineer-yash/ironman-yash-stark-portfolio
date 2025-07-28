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
    <header className="bg-bg-primary border-b-2 border-iron-red fixed top-0 w-full z-10 py-4 px-6 backdrop-blur-sm bg-opacity-95">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 iron-transition iron-hover">
          <div className="arc-reactor">
            <img 
              src="https://customer-assets.emergentagent.com/job_d2fbc2f2-d986-4d3f-926b-807d09caf343/artifacts/jg7d8t3b_passportSize.jpg"
              alt="Yash Gohel"
              className="w-12 h-12 rounded-full object-cover border-2 border-iron-gold hover:border-iron-red transition-all duration-300 hover:shadow-lg hover:shadow-iron-gold"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-lg font-bold text-white hover:text-iron-gold transition-colors">Yash Gohel</div>
            <div className="text-sm iron-text">Tony Stark</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium relative overflow-hidden group ${
                isActivePath(item.path) 
                  ? 'bg-gradient-to-r from-iron-red to-red-700 text-white shadow-lg border border-iron-gold' 
                  : 'text-text-secondary hover:text-iron-gold hover:bg-brand-hover'
              }`}
            >
              {/* Hover effect for non-active items */}
              {!isActivePath(item.path) && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-iron-gold to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* JARVIS Control */}
        <div className="flex items-center space-x-4">
          {/* JARVIS Toggle */}
          <button
            onClick={toggleJarvis}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
              isActive 
                ? 'bg-gradient-to-r from-iron-gold to-yellow-400 text-bg-primary hover:from-yellow-400 hover:to-iron-gold shadow-lg border border-iron-red' 
                : 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 hover:from-gray-600 hover:to-gray-500 border border-gray-500'
            }`}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12" />
            <span className="relative z-10">
              JARVIS {isActive ? 'ONLINE' : 'OFFLINE'}
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
                className={`mx-4 px-6 py-4 rounded-lg transition-all duration-300 font-medium relative overflow-hidden group ${
                  isActivePath(item.path)
                    ? 'bg-gradient-to-r from-iron-red to-red-700 text-white border border-iron-gold'
                    : 'text-text-secondary hover:text-iron-gold hover:bg-brand-hover border border-transparent hover:border-iron-gold'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Mobile hover effect */}
                {!isActivePath(item.path) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-iron-gold to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;