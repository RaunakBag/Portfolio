import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function MotionSection({ id, className, children }) {
  const { scrollYProgress } = useScroll();
  const sectionY = useSpring(useTransform(scrollYProgress, [0, 0.9], [0, 32]), {
    stiffness: 90,
    damping: 26,
    mass: 0.8,
  });

  return (
    <motion.section
      id={id}
      className={className}
      style={{ y: sectionY }}
      initial={{ opacity: 0, y: 30, scale: 0.985, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px', amount: 0.12 }}
      transition={{ duration: 0.7, ease, delay: 0.04 }}
    >
      {children}
    </motion.section>
  );
}
