// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chat', path: '/chat' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary-blue to-primary-deep shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:max-w-screen-4xl">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 4xl:h-32">
          
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl sm:text-3xl lg:text-4xl 4xl:text-6xl animate-bounce">🗳️</span>
            <span className="text-white font-poppins font-bold text-xl sm:text-2xl lg:text-3xl 4xl:text-5xl tracking-wide">
              ElectionGuide AI
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8 4xl:space-x-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm sm:text-base lg:text-lg 4xl:text-3xl font-inter font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-white shadow-inner' 
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary-deep overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-inter font-medium ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
