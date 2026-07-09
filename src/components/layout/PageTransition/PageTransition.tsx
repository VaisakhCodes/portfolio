import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface PageTransitionProps extends HTMLMotionProps<'div'> {
  duration?: number;
}

export const PageTransition = ({
  children,
  className,
  duration = 0.4,
  ...props
}: PageTransitionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    animate: { 
      opacity: 1, 
      y: 0 
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : -20 
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ 
        duration, 
        ease: [0.25, 1, 0.5, 1] // Easing curve similar to our tokens
      }}
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
