import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links inspired by the DevFolio structure
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    // Removed max-width from the outer container to ensure it covers the full page width
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Change: 'px-10' or 'px-[5%]' gives it a wider feel than the standard 'max-w-7xl'. 
         If you want it strictly edge-to-edge with no padding, remove 'px-4'.
      */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-indigo-600 tracking-tight uppercase">
              AMAN SINGH
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-indigo-600 text-sm font-semibold transition-all"
              >
                {link.name}
              </a>
            ))}
            {/* Resume button as seen in the inspiration resources */}
            <button className="bg-indigo-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-700 shadow-md transition-all active:scale-95">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-gray-700 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;