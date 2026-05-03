import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof JSX.IntrinsicElements;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
    children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({
    as = 'div',
    delay = 0,
    duration = 0.7,
    x = 0,
    y = 30,
    children,
    ...props
}) => {
    const MotionTag = motion[as as keyof typeof motion] || motion.div;
    return (
        <MotionTag
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '50px', amount: 0 }}
            {...props}
        >
            {children}
        </MotionTag>
    );
};

export default FadeIn;
