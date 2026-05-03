import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function MotionSection({ id, className, children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px', amount: 0.12 }}
      transition={{ duration: 0.68, ease }}
    >
      {children}
    </motion.section>
  );
}
