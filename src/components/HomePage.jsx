import React from 'react';
import Footer from './Footer';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';


const HomePage = () => {

    return (
        <div className="min-h-screen font-sans text-gray-900">
            <Navbar />

            {/* HERO SECTION */}
            <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-linear-to-br from-bg-gradient-start to-bg-gradient-end">

                {/* Large Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                    <h1 className="text-[20vw] leading-none font-black text-white/10 tracking-tighter scale-y-125 font-heading">
                        ENGINEER
                    </h1>
                </div>

                {/* Central Image - Cartoon Character */}
                <div className="relative z-10 mt-20 md:mt-0 animate-fade-in-up delay-300">
                    <div className="w-[300px] md:w-[450px] h-[400px] md:h-[600px] flex items-end justify-center relative">
                        {/* Blob Background behind character */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1a2e3b]/20 to-transparent rounded-full blur-2xl transform scale-x-150"></div>

                        <img
                            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=transparent&clothing=hoodie&clothingColor=3c4f76&skinColor=edb98a&top=shortHair&accessories=sunglasses&accessoriesColor=262e33&style=circle"
                            alt="Character"
                            className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Bottom Left - Status */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-3 z-20">
                    <div className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400"></span>
                    </div>
                    <span className="text-[#1a2e3b] font-bold tracking-wide text-sm md:text-base">Available for Projects</span>
                </div>

                {/* Vertical Navigation (Right Side decoration) */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 text-[#1a2e3b]">
                    <span className="text-sm font-bold -rotate-90 mb-8 tracking-widest">01</span>
                    <div className="w-[2px] h-8 bg-[#1a2e3b]"></div>
                    <div className="w-[2px] h-8 bg-[#1a2e3b]/30"></div>
                    <div className="w-[2px] h-8 bg-[#1a2e3b]/30"></div>
                </div>

                {/* Bottom Right - Socials */}
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-6 text-[#1a2e3b] z-20">
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        {/* X / Twitter */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        {/* Mail */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        {/* LinkedIn */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        {/* Instagram */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm0 1.962h-3.21c-2.43 0-2.784.013-3.808.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 01-1.772 1.153 4.902 4.902 0 01-1.153 1.772c-.247.636-.416 1.363-.465 2.427-.048 1.067-.06 1.407-.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 1.962a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm5.136-3.088a1.144 1.144 0 110 2.288 1.144 1.144 0 010-2.288z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </section>

            <div className="bg-white">
                <AboutPage />
                <ProjectsPage />
                <ContactSection />
                <Footer />
            </div>

        </div>
    );
};

export default HomePage;