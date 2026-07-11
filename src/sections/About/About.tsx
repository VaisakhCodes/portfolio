import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { GraduationCap } from 'lucide-react';

export const About = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 40,
      scale: prefersReducedMotion ? 1 : 0.98,
      filter: prefersReducedMotion ? 'blur(0px)' : 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <PageTransition>
      <Section id="about" className="pt-6 pb-24 md:pt-8 md:pb-24" background="transparent">
        <Container>
          <motion.div 
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Left Column: About Content & Education */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
              
              <div className="mb-4 lg:mb-6 flex flex-col gap-3 text-left items-start">
                <motion.h2 
                  variants={childVariants}
                  className="text-body-s font-semibold uppercase tracking-wider text-primary"
                >
                  About Me
                </motion.h2>
                <motion.p 
                  variants={childVariants}
                  className="text-body-l text-text-secondary max-w-2xl leading-relaxed"
                >
                  I'm Vaisakh, a software developer committed to creating innovative applications. I seamlessly integrate engaging front-end aesthetics with rock-solid underlying logic.
                </motion.p>
              </div>
              
              <motion.div variants={childVariants} className="w-full">
                <div className="group relative w-full overflow-hidden bg-surface-elevated/30 rounded-[24px] p-7 sm:p-8 hover:bg-surface-elevated/50 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[14px] bg-primary/10 flex items-center justify-center border border-primary/20">
                      <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-text-muted uppercase">
                      Education
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-1.5 mb-8">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                      Master of Computer Applications
                    </h4>
                    <p className="text-sm sm:text-base text-text-muted font-medium">
                      Amrita Vishwa Vidyapeetham
                    </p>
                  </div>

                  {/* Batch Badge */}
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-border/40 text-xs font-semibold text-text-secondary">
                    Batch: 2024 – 2026
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Developer Portrait */}
            <div className="w-full lg:w-[45%] flex justify-center">
              <motion.div variants={childVariants} className="relative group w-full max-w-sm lg:max-w-md mx-auto">
                {/* Ambient Glow Behind Portrait */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                
                {/* Soft-Edged Portrait Container */}
                <div 
                  className="relative aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
                  style={{
                    maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)'
                  }}
                >
                  {/* Image */}
                  <img 
                    src="/photo.png" 
                    alt="Vaisakh Mohan - Software Developer" 
                    className="relative w-full h-full object-cover object-center z-10" 
                    loading="lazy" 
                  />
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </Container>
      </Section>
    </PageTransition>
  );
};
