
import React from 'react';
import { motion } from 'framer-motion';

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Highlight: React.FC<HighlightProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.span
      initial={{ scale: 1, color: "inherit", textShadow: "0 0 0px rgba(0,0,0,0)" }}
      whileInView={{ 
        scale: [1, 1.25, 1],
        color: ["inherit", "#fbbf24", "inherit"],
        textShadow: ["0 0 0px rgba(251,191,36,0)", "0 0 25px rgba(251,191,36,0.6)", "0 0 0px rgba(251,191,36,0)"]
      }}
      viewport={{ once: false, amount: 0.9 }}
      transition={{ 
        duration: 0.9, 
        delay, 
        times: [0, 0.5, 1],
        ease: "backOut"
      }}
      className={`inline-block font-bold transition-all duration-300 ${className}`}
    >
      {children}
    </motion.span>
  );
};
