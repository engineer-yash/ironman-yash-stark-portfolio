import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic, MicOff } from 'lucide-react';
import { useJarvis } from '../../context/JarvisContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isActive, toggleJarvis, startListening, isListening } = useJarvis();

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
    <header className="dark-header">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="arc-reactor">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">YG</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-xl font-semibold text-white">Yash Gohel</div>
            <div className="text-sm text-brand-primary">Tony Stark</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex dark-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`dark-nav-link ${isActivePath(item.path) ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* JARVIS Controls */}
        <div className="flex items-center space-x-4">
          {/* Voice Control */}
          <button
            onClick={startListening}
            disabled={!isActive || isListening}
            className={`p-3 rounded-full transition-all duration-300 ${
              isListening 
                ? 'bg-red-500 animate-pulse' 
                : isActive 
                ? 'bg-brand-primary hover:bg-brand-active' 
                : 'bg-gray-600'
            }`}
            title={isListening ? 'Listening...' : 'Voice Command'}
          >
            {isListening ? (
              <Mic className="w-5 h-5 text-white" />
            ) : (
              <MicOff className="w-5 h-5 text-white" />
            )}
          </button>

          {/* JARVIS Toggle */}
          <button
            onClick={toggleJarvis}
            className={`hidden md:flex px-4 py-2 rounded transition-all duration-300 ${
              isActive 
                ? 'bg-jarvis-green text-black hover:bg-opacity-80' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <span className="jarvis-text text-sm font-semibold">
              JARVIS {isActive ? 'ONLINE' : 'OFFLINE'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 border-t border-border-subtle">
          <nav className="flex flex-col py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-6 py-3 text-lg transition-colors ${
                  isActivePath(item.path)
                    ? 'text-brand-primary bg-brand-hover'
                    : 'text-white hover:text-brand-primary hover:bg-brand-hover'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile JARVIS Toggle */}
          <div className="px-6 pb-4 border-t border-border-subtle pt-4">
            <button
              onClick={toggleJarvis}
              className={`w-full px-4 py-3 rounded transition-all duration-300 ${
                isActive 
                  ? 'bg-jarvis-green text-black' 
                  : 'bg-gray-600 text-white'
              }`}
            >
              <span className="jarvis-text font-semibold">
                JARVIS {isActive ? 'ONLINE' : 'OFFLINE'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;