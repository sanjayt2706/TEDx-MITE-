import React from 'react';
import { motion } from 'motion/react';
import logo from 'figma:asset/822934c85d20c8f7634c4518262bdf6ea96bc38d.png';

/**
 * Navbar Component
 * Displays the navigation bar at the top of the page with logo and navigation links
 */
export default function Navbar() {
  // Navigation menu items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Fixed navigation bar with backdrop blur effect
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Institute Name */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* MITE Logo */}
            <img 
              src={logo} 
              alt="MITE Logo" 
              className="h-14 w-auto"
            />
            
            {/* Institute Name with TEDx branding */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-red-600 font-bold text-xl">TED</span>
                <span className="text-red-600 font-bold text-xl">x</span>
                <span className="text-white font-bold text-xl">MITE</span>
              </div>
              <span className="text-gray-400 text-xs">Invent Solutions</span>
            </div>
          </motion.div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-600 transition-colors relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {/* Animated underline on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Shows on mobile */}
          <motion.button
            className="md:hidden text-white p-2"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
