import React, { useRef, useEffect, useState } from 'react';

const images1 = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];
const images2 = [
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const MarqueeSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
            const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(scrollOffset);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderRow = (images: string[], direction: 'left' | 'right') => {
        const translate = direction === 'right' ? offset - 200 : -(offset - 200);
        const tripled = [...images, ...images, ...images];
        return (
            <div
                className="flex gap-3 will-change-transform"
                style={{ transform: `translateX(${translate}px)` }}
            >
                {tripled.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt="marquee gif"
                        width={420}
                        height={270}
                        loading="lazy"
                        className="rounded-2xl object-cover w-[420px] h-[270px]"
                        draggable={false}
                    />
                ))}
            </div>
        );
    };

    return (
        <section ref={ref} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3">
            {renderRow(images1, 'right')}
            {renderRow(images2, 'left')}
        </section>
    );
};

export default MarqueeSection;
