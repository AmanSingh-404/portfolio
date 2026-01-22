import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="w-full py-24 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Modern Grid Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,#fff_100%)]"></div>
            </div>

            <div className="w-full px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Text & Info */}
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight font-heading tracking-tight">
                            Let's Connect <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">and Create.</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-md leading-relaxed">
                            Whether you have a groundbreaking project, an interesting opportunity, or simply want to share ideas, I'd love to hear from you.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 group-hover:shadow-indigo-200 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-lg font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">amans64788@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 group-hover:shadow-indigo-200 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="text-lg font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">NEW DELHI, INDIA </span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 font-heading">Find Me Online</h4>
                            <div className="flex gap-4">
                                {['LinkedIn', 'GitHub', 'X'].map((social) => (
                                    <a key={social} href="#" className="flex-1 py-4 text-center border-2 border-slate-100 rounded-xl hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 hover:shadow-lg transition-all font-bold text-slate-600 bg-white">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl -z-10"></div>
                        <h3 className="text-2xl font-black text-slate-900 mb-8 font-heading">Send Me a Message </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white" placeholder="john.doe@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white" placeholder="Project Inquiry, Collaboration, etc." />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white" placeholder="Your message here..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-600 shadow-lg shadow-slate-200 hover:shadow-indigo-200 transition-all transform hover:-translate-y-1 active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;