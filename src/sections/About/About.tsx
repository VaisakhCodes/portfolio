import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { Card } from '@/components/ui/Card';
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
                <motion.div variants={scrollVariants}>
                  <Card className="p-8 md:p-10 border-transparent bg-surface-elevated/20 shadow-none">
                    <h4 className="text-h5 font-bold text-text-primary mb-5 flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                      Education
                    </h4>
                    <ul className="space-y-5">
                      <li className="flex flex-col gap-1">
                        <span className="text-body font-semibold text-text-primary">Master of Computer Applications</span>
                        <span className="text-body-s text-text-muted">Amrita Vishwa Vidyapeetham (2024–2026)</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <span className="text-body font-semibold text-text-primary">Bachelor of Computer Applications</span>
                        <span className="text-body-s text-text-muted">University of Calicut (2021–2024)</span>
                      </li>
                    </ul>
                  </Card>
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
                <div className="absolute -inset-4 bg-primary/20 blur-[80px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-400 pointer-events-none" />
                
                {/* Portrait Container */}
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-400 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
                  {/* Subtle Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                  
                  {/* Image */}
                  <img 
                    src="/photo.png" 
                    alt="Vaisakh Mohan - Software Developer" 
                    className="relative w-full h-full object-cover object-center z-10" 
                    loading="lazy" 
                  />
                  
                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-20" />
                  
                  {/* Glass Border Overlay */}
                  <div className="absolute inset-0 rounded-[32px] border border-white/10 opacity-50 z-20 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
