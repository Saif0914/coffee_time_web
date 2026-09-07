import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #c49b63 0%, #e0be8a 50%, #c49b63 100%)',
        zIndex: 99999,
        boxShadow: '0 0 10px rgba(196, 155, 99, 0.6)'
      }}
    />
  );
};

export default ScrollProgress;
