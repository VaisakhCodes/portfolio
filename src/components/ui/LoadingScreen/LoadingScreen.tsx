import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [counter, setCounter] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCounter(100);
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }

    const duration = 1800; // 1.8 seconds
    const intervalTime = duration / 100;
    
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, onComplete]);

  useEffect(() => {
    if (counter === 100 && !prefersReducedMotion) {
      const timeout = setTimeout(onComplete, 200);
      return () => clearTimeout(timeout);
    }
  }, [counter, onComplete, prefersReducedMotion]);

  const formattedCounter = counter.toString().padStart(3, '0');

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-[72px] md:text-[96px] font-extrabold text-text-primary tabular-nums tracking-tight">
        {formattedCounter}
      </div>
    </motion.div>
  );
};
