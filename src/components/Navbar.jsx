import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links inspired by the DevFolio structure
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Removed max-width from the outer container to ensure it covers the full page width
    <nav className="w-full bg-white/70 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="w-full px-6 md:px-12">
        <div className="flex justify-between h-24 items-center max-w-7xl mx-auto">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase font-heading">
              AMAN<span className="text-indigo-600">SINGH</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 text-sm font-bold tracking-wide transition-all uppercase"
              >
                {link.name}
              </a>
            ))}
            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-900 hover:bg-slate-100 transition-colors"
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