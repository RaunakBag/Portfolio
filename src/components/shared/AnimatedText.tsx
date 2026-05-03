import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.8', 'end 0.2'],
    });

    return (
        <p ref={ref} className={`relative ${className}`} style={{ display: 'inline-block', textAlign: 'center' }}>
            {text.split('').map((char, i) => {
                const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
                return (
                    <span key={i} style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{ opacity: 0 }}>{char === ' ' ? '\u00A0' : char}</span>
                        <motion.span
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                opacity,
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    </span>
                );
            })}
        </p>
    );
};

export default AnimatedText;
