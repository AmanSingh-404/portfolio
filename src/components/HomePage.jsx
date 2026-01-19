import React from 'react';
import Footer from './Footer';
import ContactSection from './ContactSection';
import Navbar from './Navebar';
import ProjectsPage from './ProjectsPage';

const HomePage = () => {

    // Tech stack from inspiration docs
    const coreTech = [
        "TypeScript", "React", "Node.js", "Kubernetes",
        "AWS", "Python", "PostgreSQL", "GraphQL"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            <Navbar />

            {/* --- HERO SECTION --- */}
            <section id="home" className="w-full py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <div className="md:w-3/5 space-y-8">
                    <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight text-gray-900">
                        Crafting Solutions <br />
                        <span className="text-indigo-600">Through Code.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                        A passionate software engineer specializing in scalable web applications and intuitive user experiences.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-lg shadow-indigo-200">
                            View My Work
                        </button>
                        <button className="border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className="md:w-2/5 mt-16 md:mt-0 relative">
                    <div className="w-full aspect-square bg-indigo-50 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-8 border-white">
                        <img src="https://via.placeholder.com/600x600" alt="Profile" className="object-cover w-full h-full" />
                    </div>
                </div>
            </section>

            {/* --- TECH STACK SECTION --- */}
            <section className="w-full py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">My Core Technologies</h2>
                        <p className="text-gray-500 mt-4 text-lg">A diverse skill set covering modern web development and cloud infrastructure.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {coreTech.map((tech) => (
                            <div key={tech} className="bg-white p-6 rounded-2xl border border-gray-200 text-center font-bold text-gray-700 shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-all cursor-default">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectsPage />
            <ContactSection />
            <Footer />

        </div>
    );
};

export default HomePage;