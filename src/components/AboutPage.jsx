import React from 'react';

const AboutPage = () => {
    // Data derived from Technical Skills and Education sections
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["TypeScript", "Go", "Java", "Python"] // [cite: 133, 134, 135, 136, 146]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React", "Next.js", "Node.js", "ASP.NET Core", "Tailwind CSS"] // [cite: 144, 147, 153, 154]
        },
        {
            title: "Databases & Tools",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "GraphQL"] // [cite: 145, 148, 149, 151, 152, 165]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"] // [cite: 155, 157, 158, 159, 162, 163]
        }
    ];

    /* const experience = [
      {
        role: "Senior Full-Stack Engineer", // [cite: 167]
        company: "Innovate Solutions Inc.", // [cite: 168]
        period: "Jan 2021 - Present", // [cite: 201]
        description: "Led development for critical enterprise applications, improving system scalability by 30% and reducing latency by 15%." // [cite: 169, 170, 171]
      },
      {
        role: "Software Engineer", // [cite: 172]
        company: "Tech Global Corp.", // [cite: 173]
        period: "Jul 2017 - Dec 2020", // [cite: 202]
        description: "Contributed to core e-commerce platforms and integrated third-party APIs for payment processing." // [cite: 174, 176]
      }
    ]; */

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Introduction Header */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-6xl font-black text-gray-900 tracking-tighter uppercase">
                            Alex Johnson // <span className="text-indigo-600">About Me</span>
                        </h1>
                        <p className="text-2xl font-bold text-gray-700">
                            Senior Software Engineer specializing in Full-Stack Development [cite: 138]
                        </p>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-3xl">
                            Results-driven engineer with over 8 years of experience building scalable,
                            high-performance web applications[cite: 139, 140]. Known for clean code and a
                            collaborative spirit[cite: 141].
                        </p>
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center gap-2">
                            Download CV [cite: 142]
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Technical Skills Grid */}
            <section className="py-20 bg-gray-50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-widest">Technical Skills [cite: 143]</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((cat) => (
                            <div key={cat.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.skills.map((skill) => (
                                        <li key={skill} className="text-gray-700 font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            {/* <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-widest">Work Experience [cite: 166]</h2>
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.company} className="flex flex-col md:flex-row gap-4 md:gap-16 border-l-4 border-indigo-100 pl-8 relative">
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[10px] top-1"></div>
              <div className="md:w-1/4">
                <p className="text-indigo-600 font-black tracking-tighter">{job.period}</p>
                <p className="text-gray-900 font-black text-xl">{job.company}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-black text-gray-800 mb-4">{job.role}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

            {/* Education & Awards */}
            <section className="py-20 bg-gray-900 text-white px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-indigo-400">Education [cite: 178]</h2>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold">M.S. in Computer Science [cite: 179]</h4>
                                <p className="text-gray-400">University of Technology [cite: 180]</p>
                                <p className="text-sm mt-2 text-indigo-300">Thesis: Optimizing Container Orchestration [cite: 183]</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">B.S. in Software Engineering [cite: 184]</h4>
                                <p className="text-gray-400">State University [cite: 185]</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-indigo-400">Certifications [cite: 190]</h2>
                        <ul className="space-y-6">
                            <li className="border-b border-gray-800 pb-4">Certified AWS Solutions Architect [cite: 189]</li>
                            <li className="border-b border-gray-800 pb-4">Google Cloud Professional Developer [cite: 189]</li>
                            <li className="border-b border-gray-800 pb-4">Outstanding Contributor Award [cite: 189]</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;