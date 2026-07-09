import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SocialLinks } from '@/components/portfolio/SocialLinks';
import { Button } from '@/components/ui/Button/Button';
import { ArrowRight, Download, TerminalSquare, Layers, CheckCircle2 } from 'lucide-react';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } // Premium cinematic easing
  }
};

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, damped physics for premium feel
  const springConfig = { damping: 40, stiffness: 120, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Base 3D rotation with gentle mouse parallax (±4°)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [16, 8]); // Base 12°
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-22, -14]); // Base -18°

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <PageTransition>
      <Section className="relative min-h-screen flex flex-col justify-center pt-12 pb-10 md:pt-16 md:pb-12 lg:pt-12 lg:pb-12" background="transparent">
        
        {/* Background Environment - Extended to overlap seamlessly */}
        <div className="absolute inset-x-0 top-0 bottom-[-800px] z-0 pointer-events-none">
          {/* Subtle Grain Texture */}
          <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }} />
          
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-60" />
          <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen opacity-40" />
          
          {/* Soft Vignette with vertical fade out */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_120%)] opacity-80" style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }} />
        </div>
        
        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Content Column */}
            <motion.div 
              className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 lg:-translate-y-7 md:-translate-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              <motion.h1 variants={itemVariants} className="text-[3rem] leading-[0.9] md:text-[4.5rem] lg:text-[5.125rem] font-extrabold tracking-tight text-text-primary mb-6 md:mb-7">
                Vaisakh Mohan <br className="hidden lg:block" />
                <span className="font-light text-text-secondary tracking-normal text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] block mt-7 md:mt-8 opacity-90">
                  Software Developer
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-body-l md:text-[1.1875rem] text-text-secondary mb-7 md:mb-8 max-w-2xl leading-relaxed font-light opacity-90">
                Delivering clean, maintainable, and user-centric software solutions. Specialized in building responsive applications with modern frontend architectures and robust backend systems.
              </motion.p>
              
              {/* Premium Inline Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 mb-7 md:mb-8 text-body-s font-medium text-text-secondary">
                <span className="flex items-center gap-2.5"><TerminalSquare className="w-4 h-4 text-primary/80"/> Python & Django</span>
                <span className="flex items-center gap-2.5"><Layers className="w-4 h-4 text-primary/80"/> Modern Frontend</span>
                <span className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary/80"/> Production-Ready</span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                {/* Primary CTA */}
                <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden shadow-[0_8px_40px_-12px_rgba(var(--color-primary),0.4)] hover:shadow-[0_12px_50px_-12px_rgba(var(--color-primary),0.6)] transition-all duration-500 px-8">
                  <span className="relative z-10 flex items-center font-semibold tracking-wide">
                    View Projects
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </span>
                </Button>
                
                {/* Secondary CTA */}
                <Button variant="outline" size="lg" className="w-full sm:w-auto group bg-transparent border-border/40 hover:bg-surface-elevated/40 hover:border-border/80 transition-all duration-500 px-8">
                  <Download className="mr-3 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1" />
                  Resume
                </Button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mt-6 lg:mt-7">
                <span className="text-caption font-semibold text-text-muted uppercase tracking-[0.2em]">
                  Connect
                </span>
                <div className="h-px w-12 bg-border hidden sm:block" />
                <SocialLinks 
                  mode="icon"
                  githubUrl="https://github.com/VaisakhCodes"
                  linkedinUrl="https://linkedin.com/in/vaisakh-mohan"
                />
              </motion.div>
            </motion.div>

            {/* Image / Visual Column */}
            <motion.div 
              className="relative w-full max-w-xl mx-auto lg:max-w-none lg:col-span-5 flex items-center justify-center cursor-default bg-transparent"
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={prefersReducedMotion ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 1, filter: 'blur(0px)', y: [0, -8, 0] }}
              transition={{
                 opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                 filter: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                 y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                 scale: { duration: 0.35, ease: 'easeOut' }
              }}
              style={{ 
                perspective: 1400,
                rotateX: prefersReducedMotion ? 12 : rotateX,
                rotateY: prefersReducedMotion ? -18 : rotateY,
                rotateZ: -8,
                transformStyle: "preserve-3d"
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.02 }}
            >
              {/* Premium Ambient Glow - Using radial gradient instead of blur to prevent bounding box clipping/card appearance */}
              <div className="absolute inset-0 -translate-y-12 -translate-x-12 md:-translate-y-20 md:-translate-x-16 lg:-translate-y-14 lg:-translate-x-4 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb,100,100,250),0.15)_0%,transparent_60%)] mix-blend-screen pointer-events-none scale-[1.3]" />
              
              <img 
                src="/iso-tech-sculpture.png" 
                alt="Vaisakh Mohan - Software Developer" 
                className="relative w-full h-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.3)] -translate-y-12 -translate-x-12 md:-translate-y-20 md:-translate-x-16 lg:-translate-y-14 lg:-translate-x-4 scale-[1.4] sm:scale-[1.55] lg:scale-[1.75] origin-center pointer-events-none"
                loading="eager"
              />
            </motion.div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
