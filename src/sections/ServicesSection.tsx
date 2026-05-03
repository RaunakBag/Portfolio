import React from 'react';
import FadeIn from '../components/shared/FadeIn';

const services = [
    {
        number: '01',
        name: '3D Modeling',
        description:
            'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
    },
    {
        number: '02',
        name: 'Rendering',
        description:
            'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
    },
    {
        number: '03',
        name: 'Motion Design',
        description:
            'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
    },
    {
        number: '04',
        name: 'Branding',
        description:
            'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
    },
    {
        number: '05',
        name: 'Web Design',
        description:
            'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
            <FadeIn as="h2" delay={0} y={40} className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
                Services
            </FadeIn>
            <div className="max-w-5xl mx-auto flex flex-col divide-y divide-[rgba(12,12,12,0.15)]">
                {services.map((service, i) => (
                    <FadeIn
                        as="div"
                        key={service.number}
                        delay={0.1 * i}
                        y={30}
                        className="flex items-start gap-8 py-8 sm:py-10 md:py-12"
                    >
                        <div className="font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none select-none min-w-[90px] text-right">
                            {service.number}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C]">{service.name}</div>
                            <div className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60 text-[#0C0C0C]">
                                {service.description}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
