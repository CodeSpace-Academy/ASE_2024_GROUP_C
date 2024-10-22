'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ position }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleMouseMove = (e) => {
      if (e.clientY <= 100) {
        setIsSubNavVisible(true);
        clearTimeout(timeoutId);
      } else {
        timeoutId = setTimeout(() => setIsSubNavVisible(false), 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Recipes', 
      href: '/recipes',
      sublinks: [
        { name: 'Breakfast', href: '/recipes/breakfast' },
        { name: 'Lunch', href: '/recipes/lunch' },
        { name: 'Dinner', href: '/recipes/dinner' },
      ]
    },
    { name: 'Favorites', href: '/favorites' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {
      name: 'Account',
      href: '/account',
      sublinks: [
        { name: 'Sign Up', href: '/account/signup' },
        { name: 'Sign In', href: '/account/signin' },
      ]
    },
  ];

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 shadow-lg transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(${position}px)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                RecipeApp
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <Link href={link.href} className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                      {link.name}
                    </Link>
                    {link.sublinks && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {link.sublinks.map((sublink) => (
                            <Link key={sublink.name} href={sublink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div 
        className={`fixed top-16 left-0 right-0 z-40 backdrop-blur-md bg-white/30 shadow-lg transition-all duration-300 ease-in-out ${
          isSubNavVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full px-4 py-2 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;