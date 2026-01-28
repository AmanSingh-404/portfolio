import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="relative w-full py-32 bg-slate-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[20vw] leading-none font-black text-white tracking-tighter font-heading select-none pointer-events-none z-0">
                HELLO
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-20">
                {/* Visual/Info Side */}
                <div className="md:w-1/2 space-y-10">
                    <div>
                        <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-heading leading-tight">
                            Let's Work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Together.</span>
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:amans64788@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mail Me</p>
                                <p className="text-lg font-bold text-slate-900">amans64788@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/aman-singh-167968332" target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors uppercase text-sm tracking-wide">
                                LinkedIn
                            </a>
                            <a href="https://github.com/AmanSingh-404" target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors uppercase text-sm tracking-wide">
                                GitHub
                            </a>
                            <a href="https://x.com/AmanSingh143669" target="_blank" rel="noopener noreferrer" className="h-12 px-6 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors uppercase text-sm tracking-wide">
                                X
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="md:w-1/2">
                    <form className="bg-white p-8 md:p-10 rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Name</label>
                                <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-cyan-500 transition-colors font-bold text-slate-900" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                                <input type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-cyan-500 transition-colors font-bold text-slate-900" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                            <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-cyan-500 transition-colors font-bold text-slate-900" placeholder="Project Inquiry" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                            <textarea rows="4" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-cyan-500 transition-colors font-bold text-slate-900 resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-cyan-600 transition-colors shadow-lg shadow-slate-900/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;