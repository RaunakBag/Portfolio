import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function ParallaxCard({
    className = '',
    children,
    intensity = 18,
    direction = 1,
    initial,
    whileInView,
    viewport,
    transition,
    style,
    ...props
}) {
    const { scrollYProgress } = useScroll();
    const y = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, intensity * direction]),
        { stiffness: 140, damping: 30, mass: 0.8 }
    );

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            style={{ ...style, y }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
