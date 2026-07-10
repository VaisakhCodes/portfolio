import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { GraduationCap } from 'lucide-react';

const scrollVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const About = () => {
  return (
    <PageTransition>
      <Section id="about" className="pt-6 pb-24 md:pt-8 md:pb-24" background="transparent">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
            {/* Left Column: About Content & Education */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollVariants}
              >
                <SectionHeading 
                  eyebrow="About Me"
                  title=""
                  subtitle=" I'm Vaisakh, a software developer committed to creating innovative applications. I seamlessly integrate engaging front-end aesthetics with rock-solid underlying logic."
                />
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={scrollVariants} className="w-full">
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
              </motion.div>
            </div>

            {/* Right Column: Developer Portrait */}
            <motion.div 
              className="w-full lg:w-[45%] flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scrollVariants}
            >
              <div className="relative group w-full max-w-sm lg:max-w-md mx-auto">
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
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
