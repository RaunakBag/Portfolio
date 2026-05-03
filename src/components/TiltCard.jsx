import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Mouse-driven 3D tilt (subtle). Wrap interactive cards for depth.
 */
export function TiltCard({ children, className = '', intensity = 10 }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const spring = { stiffness: 280, damping: 28 };

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [intensity, -intensity]),
    spring
  );
  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-intensity, intensity]),
    spring
  );

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className={`tilt-perspective ${className}`}>
      <motion.div
        ref={ref}
        className="tilt-inner"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
