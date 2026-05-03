import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import LiveProjectButton from '../components/shared/LiveProjectButton';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        number: '01',
        name: 'Nextlevel Studio',
        category: 'Client',
        live: '#',
        images: [
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
        ],
    },
    {
        number: '02',
        name: 'Aura Brand Identity',
        category: 'Personal',
        live: '#',
        images: [
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
        ],
    },
    {
        number: '03',
        name: 'Solaris Digital',
        category: 'Client',
        live: '#',
        images: [
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
        ],
    },
];

const ProjectsSection: React.FC = () => {
    // Card stacking effect with Framer Motion
    return (
        <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 pb-32">
            <FadeIn as="h2" delay={0} y={40} className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
                Project
            </FadeIn>
            <div className="relative h-[85vh] max-w-6xl mx-auto">
                {projects.map((project, index) => {
                    const totalCards = projects.length;
                    const targetScale = 1 - (totalCards - 1 - index) * 0.03;
                    return (
                        <motion.div
                            key={project.number}
                            className="sticky top-24 md:top-32 z-10"
                            style={{
                                scale: targetScale,
                                top: `${index * 28}px`,
                            }}
                        >
                            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 mb-8">
                                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-8">
                                    <div className="flex items-center gap-6">
                                        <span className="font-black text-[clamp(3rem,10vw,140px)] text-[#D7E2EA] leading-none select-none min-w-[90px] text-right">{project.number}</span>
                                        <span className="uppercase font-medium tracking-widest text-[#D7E2EA] text-base md:text-lg">{project.category}</span>
                                        <span className="font-bold text-2xl md:text-3xl text-[#D7E2EA]">{project.name}</span>
                                    </div>
                                    <LiveProjectButton href={project.live} target="_blank" rel="noopener noreferrer" />
                                </div>
                                <div className="flex gap-6">
                                    {/* Left column: 2 stacked images */}
                                    <div className="flex flex-col gap-4 w-2/5">
                                        <img src={project.images[0]} alt="Project 1" className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-[clamp(130px,16vw,230px)]" />
                                        <img src={project.images[1]} alt="Project 2" className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-[clamp(160px,22vw,340px)]" />
                                    </div>
                                    {/* Right column: 1 tall image */}
                                    <div className="w-3/5">
                                        <img src={project.images[2]} alt="Project 3" className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full min-h-[clamp(300px,32vw,480px)]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
