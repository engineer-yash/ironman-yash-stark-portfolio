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
    <header className="bg-bg-primary border-b border-border-subtle fixed top-0 w-full z-10 py-4 px-6">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 iron-transition iron-hover">
          <div className="arc-reactor">
            <img 
              src="https://customer-assets.emergentagent.com/job_d2fbc2f2-d986-4d3f-926b-807d09caf343/artifacts/jg7d8t3b_passportSize.jpg"
              alt="Yash Gohel"
              className="w-12 h-12 rounded-full object-cover border-2 border-iron-gold"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-lg font-bold text-white">Yash Gohel</div>
            <div className="text-sm iron-text">Tony Stark</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                isActivePath(item.path) 
                  ? 'bg-iron-red text-white shadow-lg' 
                  : 'text-text-secondary hover:text-iron-gold hover:bg-bg-secondary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* JARVIS Control */}
        <div className="flex items-center space-x-4">
          {/* JARVIS Toggle */}
          <button
            onClick={toggleJarvis}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isActive 
                ? 'bg-iron-gold text-black hover:bg-yellow-400 shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            JARVIS {isActive ? 'ONLINE' : 'OFFLINE'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-iron-gold transition-colors rounded-md hover:bg-bg-secondary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-border-subtle">
          <nav className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-3 rounded-md transition-colors font-medium ${
                  isActivePath(item.path)
                    ? 'bg-iron-red text-white'
                    : 'text-text-secondary hover:text-iron-gold hover:bg-bg-secondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;