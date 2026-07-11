import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface LoadingScreenProps {
  onComplete: () => void;
}

const MESSAGES = [
  "Initializing...",
  "Loading Assets...",
  "Building Components...",
  "Loading Portfolio...",
  "Preparing Experience...",
  "Rendering Interface...",
  "Optimizing Performance...",
  "Finalizing...",
  "Welcome."
];

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [counter, setCounter] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCounter(100);
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }

    const duration = 2000; // 2 seconds
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
  
  // Calculate which message to show based on progress
  const messageIndex = useMemo(() => {
    // 9 messages, each getting roughly 11.1% of the 1-100 range
    return Math.min(Math.floor((counter - 1) / 11.5), MESSAGES.length - 1);
  }, [counter]);
  
  const currentMessage = MESSAGES[messageIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center">
        
        {/* Dynamic Status Text */}
        <div className="h-6 mb-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentMessage}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -4 }}
              transition={{ duration: 0.15 }}
              className="text-caption font-semibold text-text-secondary tracking-[0.2em] uppercase text-center"
            >
              {currentMessage}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Counter */}
        <div className="text-[72px] md:text-[96px] leading-none font-extrabold text-text-primary tabular-nums tracking-tight mb-8">
          {formattedCounter}
        </div>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-[2px] bg-border/40 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary shadow-[0_0_8px_rgba(var(--color-primary),0.6)] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${counter}%` }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.1, ease: 'linear' }}
          />
        </div>

      </div>
    </motion.div>
  );
};
