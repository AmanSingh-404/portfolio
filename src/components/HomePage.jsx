import React from 'react';
import Footer from './Footer';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';


const HomePage = () => {

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            <Navbar />
            <section id="home" className="w-full min-h-[90vh] py-28 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden bg-slate-50">
                {/* Modern Grid Background */}
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                    <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,#fff_100%)]"></div>
                </div>

                {/* Ambient Glows */}
                <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[800px] h-[500px] bg-indigo-200/30 rounded-[100%] blur-[100px] pointer-events-none animate-pulse"></div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-10 animate-fade-in-up">

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4 hover:border-indigo-200 transition-colors cursor-default">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-slate-600">Available for Freelance & Hires</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black tracking-tight font-heading mb-4 leading-tight">
                        <span className="text-slate-900">Aman</span> <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 animate-gradient-x">Singh</span>
                    </h1>

                    <p className="text-2xl md:text-4xl font-medium text-slate-600 tracking-wide max-w-3xl mx-auto">
                        Building <span className="text-indigo-600 font-bold decoration-indigo-200 underline decoration-4 underline-offset-4">digital experiences</span> that matter.
                    </p>

                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Full Stack Developer & AI Engineer focused on creating performant, scalable, and beautiful web applications.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center pt-8">
                        <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 flex items-center gap-2 group">
                            View My Work
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                        <button className="bg-white text-slate-700 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                            Get In Touch
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="pt-16 animate-bounce">
                        <svg className="w-6 h-6 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </div>
                </div>
            </section>

            <AboutPage />

            <ProjectsPage />
            <ContactSection />
            <Footer />

        </div>
    );
};

export default HomePage;