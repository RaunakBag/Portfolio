import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import AnimatedText from '../components/shared/AnimatedText';
import ContactButton from '../components/shared/ContactButton';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16">
            {/* Decorative Images */}
            <FadeIn as="img" delay={0.1} x={-80} y={0} duration={0.9} src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none" />
            <FadeIn as="img" delay={0.25} x={-80} y={0} duration={0.9} src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none" />
            <FadeIn as="img" delay={0.15} x={80} y={0} duration={0.9} src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none" />
            <FadeIn as="img" delay={0.3} x={80} y={0} duration={0.9} src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none" />

            {/* Heading */}
            <FadeIn as="h2" delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
                About me
            </FadeIn>

            {/* Animated Paragraph */}
            <AnimatedText
                text={"With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"}
                className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
            />

            {/* Contact Button */}
            <div className="pt-8">
                <ContactButton />
            </div>
        </section>
    );
};

export default AboutSection;
