import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Playground', href: '#playground' }, // Keeping standard links but ensuring structure matches
    { name: 'About Me', href: '#about' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-8 flex justify-between items-center text-slate-900 pointer-events-none">
        
      {/* Pointer events auto for interactive elements */}
      <div className="pointer-events-auto cursor-pointer z-50">
        <span className="text-xl font-black tracking-tight uppercase font-heading text-slate-900">
          AMAN SINGH
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-12 font-medium text-sm tracking-wide pointer-events-auto">
        {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:opacity-60 transition-opacity uppercase text-xs font-bold tracking-widest text-slate-700">
                {link.name}
            </a>
        ))}
      </div>

      <div className="hidden md:block pointer-events-auto">
         <a
           href="#contact"
           className="bg-[#1a2e3b] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
         >
           Contact Me
         </a>
      </div>

      {/* Mobile Menu Button - simplified */}
      <div className="md:hidden pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-900"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#a8c0d8] z-40 flex flex-col items-center justify-center space-y-8 pointer-events-auto md:hidden">
             <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6">
                <svg className="h-8 w-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black uppercase tracking-widest text-slate-900"
              >
                {link.name}
              </a>
            ))}
             <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#1a2e3b] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest">
                Contact Me
             </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;