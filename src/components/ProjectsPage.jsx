import React from 'react';

const ProjectsPage = () => {
    const allProjects = [
        {
            id: "01",
            title: "AI Agent Builder",
            description: "Developed a comprehensive AI Agent Builder with real-time data visualization, user management, and reporting features.",
            tech: ["React", "Node.js", "Convex", "Tailwind CSS", "Redux"],
            impact: "Focused on clean code and robust architecture.",
            liveLink: "#",
            repoLink: "#"
        },
        {
            id: "02",
            title: "AI Mock Interview",
            description: "Developed an AI Mock Interview using Go and Kubernetes to manage traffic, authentication, and load balancing for a suite of microservices.",
            tech: ["React", "Node.js", "Convex", "Tailwind CSS"],
            impact: "Enhanced system resilience and performance.",
            liveLink: "#",
            repoLink: "#"
        },
        {
            id: "03",
            title: "AI Chatbot",
            description: "Designed and implemented a AI Chatbot using machine learning-based recommendation engine. The system analyzes data to provide personalized content.",
            tech: ["Python", "TensorFlow", "Sci-kit Learn", "Pandas", "Flask"],
            impact: "Used advanced data processing pipelines.",
            liveLink: "#",
            repoLink: "#"
        },
        {
            id: "04",
            title: "AI Resume Parser",
            description: "Built a AI Resume Parser for ingesting, processing, and visualizing large datasets. Features custom ETL pipelines and interactive dashboards.",
            tech: ["Apache Kafka", "Spark", "AWS S3", "Python", "Tableau"],
            impact: "Scalable data ingestion architecture.",
            liveLink: "#",
            repoLink: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section id="projects" className="pt-24 pb-16 px-6 md:px-12 border-b border-slate-200/50 bg-slate-50 relative overflow-hidden">
                {/* Modern Grid Background */}
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                    <div className="absolute inset-0 bg-slate-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,#f8fafc_100%)]"></div>
                </div>

                <div className="w-full px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter font-heading">
                        My Projects & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Case Studies.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                        A showcase of my passion for software development, featuring a range of
                        projects from web applications to data platforms.
                    </p>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="py-20 px-6 md:px-12 bg-slate-50">
                <div className="max-w-7xl mx-auto space-y-32">
                    {allProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Visual Preview Placeholder */}
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-video bg-white rounded-3xl border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden group">
                                    <div className="text-slate-200 font-black text-9xl group-hover:scale-110 transition-transform font-heading">
                                        {project.id}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <span className="text-indigo-600 font-black tracking-widest text-sm uppercase font-heading">
                                    Featured Case Study
                                </span>
                                <h2 className="text-4xl font-black text-slate-900 font-heading">{project.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest font-heading">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-200">
                                    <p className="text-sm italic text-slate-500 font-medium">
                                        "Each project reflects my commitment to clean code and impactful solutions."
                                    </p>
                                </div>

                                <div className="flex gap-6 pt-4">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all inline-block text-center">
                                        Live View
                                    </a>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors cursor-pointer">
                                        GitHub Repo <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 px-6 md:px-12 bg-indigo-600 text-white text-center">
                <h2 className="text-4xl font-black mb-6 font-heading">Ready to start a project?</h2>
                <p className="text-indigo-100 text-xl mb-10 max-w-xl mx-auto">
                    I'm always open to new opportunities and exciting technical challenges.
                </p>
                <a href="#contact" className="bg-white text-indigo-600 px-12 py-4 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all font-heading inline-block">
                    Let's Talk
                </a>
            </section>
        </div>
    );
};

export default ProjectsPage;