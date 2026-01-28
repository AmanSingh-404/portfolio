import React from 'react';

const ProjectsPage = () => {
    const allProjects = [
        {
            id: "01",
            title: "AI Agent Builder",
            description: "Developed a comprehensive AI Agent Builder with real-time data visualization.",
            tech: ["React", "Node.js", "Convex", "Tailwind CSS"],
            liveLink: "https://make-agent.vercel.app/",
            repoLink: "https://github.com/AmanSingh-404/Make-Agent"
        },
        {
            id: "02",
            title: "AI Mock Interview",
            description: "AI Mock Interview platform ",
            tech: ["Next.js", "Node.js", "Tailwind CSS", "PostgreSQL","NeonDB"],
            liveLink: "https://ai-mock-interview-five-lemon.vercel.app/",
            repoLink: "https://github.com/AmanSingh-404/ai-mock-interview"
        },
        {
            id: "03 (In Working)",
            title: "AI Chatbot",
            description: "Smart chatbot with ML-based recommendation engine for personalized content.",
            tech: ["Python", "TensorFlow", "Flask", "Pandas"],
            liveLink: "#",
            repoLink: "#"
        },
        {
            id: "04 (In Working)",
            title: "AI Resume Parser",
            description: "ETL pipeline for ingesting and visualizing large datasets with custom dashboards.",
            tech: ["Kafka", "Spark", "AWS", "Python"],
            liveLink: "#",
            repoLink: "#"
        }
    ];

    return (
        <section id="projects" className="relative w-full py-32 bg-slate-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-40 left-0 text-[20vw] leading-none font-black text-white tracking-tighter font-heading select-none pointer-events-none z-0 text-shadow-sm">
                WORK
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-heading leading-tight">
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Projects.</span>
                        </h2>
                    </div>
                    <div className="md:max-w-xs text-right md:text-left">
                        <p className="text-slate-500 font-medium">
                            A collection of my work in AI, Full Stack Development, and System Design.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allProjects.map((project) => (
                        <div key={project.id} className="group relative bg-white/60 backdrop-blur-sm border border-white/50 p-8 rounded-4xl hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1">
                            <div className="absolute top-8 right-8 text-slate-200 font-black text-6xl font-heading group-hover:text-cyan-100 transition-colors pointer-events-none">
                                {project.id}
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-4 pr-16">{project.title}</h3>
                                    <p className="text-slate-600 mb-6 font-medium leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-6 items-center pt-6 border-t border-slate-100/50">
                                    <a href={project.repoLink} className="text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-cyan-600 transition-colors flex items-center gap-2">
                                        GitHub <span className="text-xl leading-none">&rarr;</span>
                                    </a>
                                    <a href={project.liveLink} className="text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-cyan-600 transition-colors">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a href="https://github.com/AmanSingh-404" target="_blank" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-600 font-bold uppercase tracking-widest text-sm transition-colors cursor-pointer">
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;