import React from 'react';

const AboutPage = () => {
    // Data derived from Technical Skills and Education sections
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["TypeScript", "JavaScript", "C++", "C", "Python"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React", "Next.js", "Node.js", "ASP.NET Core", "Tailwind CSS"]
        },
        {
            title: "Databases & Tools",
            skills: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        }
    ];

    return (
        <section id="about" className="relative w-full py-32 overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 text-[15vw] leading-none font-black text-slate-100/50 tracking-tighter font-heading select-none pointer-events-none z-0">
                WHO I AM
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-20">

                {/* Left Column: Intro */}
                <div className="md:w-1/2 space-y-10">
                    <div>
                        <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-heading leading-tight">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Future-Ready</span> <br />
                            Solutions.
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Hi, I’m Aman Singh. I'm a Senior Software Engineer specializing in full-stack development.
                        I combine technical expertise with a keen eye for design to create applications that are not just functional, but exceptional.
                        My passion lies in solving complex problems with clean, scalable code.
                    </p>

                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-slate-900 font-heading">4+</span>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Exp.</span>
                        </div>
                        <div className="w-px h-12 bg-slate-200"></div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-slate-900 font-heading">20+</span>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projects</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Skills */}
                <div className="md:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} className="group">
                                <h3 className="font-heading font-black text-xl text-slate-900 mb-6 uppercase tracking-wide group-hover:text-cyan-600 transition-colors">
                                    {cat.title}
                                </h3>
                                <ul className="space-y-3">
                                    {cat.skills.map(skill => (
                                        <li key={skill} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                                            <span className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-cyan-400 transition-colors rounded-full"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-10 border-t border-slate-100">
                        <h4 className="font-heading font-black text-lg text-slate-900 mb-4">Education</h4>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold text-slate-800">B.Tech Computer Science</p>
                                <p className="text-sm text-slate-500">Lloyd Institute of Engineering</p>
                            </div>
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">2023-2027</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;