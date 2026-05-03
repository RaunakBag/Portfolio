import React from 'react';
import { LucideMail } from 'lucide-react';
import Magnet from '../components/shared/Magnet';
import FadeIn from '../components/shared/FadeIn';
import ContactButton from '../components/shared/ContactButton';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen flex flex-col overflow-x-clip main-wrapper">
            {/* Navbar */}
            <FadeIn as="nav" delay={0} y={-20} className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
                <div className="flex gap-8">
                    <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
                    <a href="#price" className="hover:opacity-70 transition-opacity duration-200">Price</a>
                </div>
                <div className="flex gap-8">
                    <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
                    <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
                </div>
            </FadeIn>

            {/* Hero Heading */}
            <div className="flex-1 flex flex-col justify-center items-center relative z-10">
                <FadeIn as="div" delay={0.15} y={40} className="overflow-hidden w-full flex justify-center">
                    <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
                        Hi, i&apos;m jack
                    </h1>
                </FadeIn>
                {/* Hero Portrait */}
                <FadeIn as="div" delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 flex justify-center items-center">
                    <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
                        <img
                            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                            alt="Jack 3D Portrait"
                            className="w-full rounded-3xl shadow-xl object-cover"
                            draggable={false}
                        />
                    </Magnet>
                </FadeIn>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end w-full pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 absolute bottom-0 left-0 z-20">
                <FadeIn as="p" delay={0.35} y={20} className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
                    a 3d creator driven by crafting striking and unforgettable projects
                </FadeIn>
                <FadeIn as="div" delay={0.5} y={20}>
                    <ContactButton />
                </FadeIn>
            </div>
        </section>
    );
};

export default HeroSection;
