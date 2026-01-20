import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black text-indigo-600 tracking-tighter uppercase font-heading">
                AMAN SINGH
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              Showcasing passion, projects, and expertise in software engineering.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 font-heading">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors underline decoration-2 decoration-indigo-200 underline-offset-4">Resume</a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 font-heading">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:john.doe@devfolio.com" className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors">Email</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors">X / Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © 2026 Aman Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
            <span>Made with</span>
            <span className="text-indigo-400">❤</span>
            <span>for the web</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;