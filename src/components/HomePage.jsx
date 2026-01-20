import React from 'react';
import Footer from './Footer';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import profileImage from '../assets/Gemini_Generated_Image_lviytflviytflviy.png';

const HomePage = () => {

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            <Navbar />

            {/* --- HERO SECTION --- */}
            {/* --- HERO SECTION --- */}
            <section id="home" className="w-full py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <div className="md:w-3/5 space-y-8">
                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 font-heading">
                        Crafting Solutions <br />
                        <span className="text-indigo-600">Through Code.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                        A passionate software engineer specializing in scalable web applications and intuitive user experiences.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-xl shadow-indigo-200">
                            View My Work
                        </button>
                        <button className="border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all bg-white">
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className="md:w-2/5 mt-16 md:mt-0 relative">
                    <div className="w-full aspect-square bg-indigo-50 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-8 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                        <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
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