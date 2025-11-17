    import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
    import logo from 'figma:asset/822934c85d20c8f7634c4518262bdf6ea96bc38d.png';

    /**
     * Navbar Component
     * Displays the navigation bar at the top of the page with logo and navigation links
     * Uses smooth scrolling to navigate between sections
     */
    export default function Navbar() {
    // Navigation menu items with their corresponding section IDs
    const navItems = [
        { name: 'Home', href: '#home', sectionId: 'home' },
        { name: 'About', href: '#about', sectionId: 'about' },
        { name: 'Speakers', href: '#speakers', sectionId: 'speakers' },
        { name: 'Events', href: '#events', sectionId: 'events' },
        { name: 'Contact', href: '#contact', sectionId: 'contact' },
    ];

    /**
     * Handles smooth scrolling to the target section
     * @param {string} sectionId - The ID of the section to scroll to
     * @param {Event} e - The click event
     */
    const handleScrollToSection = (sectionId, e) => {
        e.preventDefault();
        
        // Find the target section element by ID
        const section = document.getElementById(sectionId);
        
        if (section) {
        // Get navbar height to offset scroll position
        const navbarHeight = 80; // 20 * 4 (h-20 = 5rem = 80px)
        
        // Calculate the position to scroll to (section top - navbar height)
        const sectionTop = section.offsetTop - navbarHeight;
        
        // Smooth scroll to the calculated position
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
        }
    };

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
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={(e) => handleScrollToSection('home', e)}
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
                </div>
            </motion.div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(item.sectionId, e)}
                    className="text-gray-300 hover:text-red-600 transition-colors relative cursor-pointer"
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