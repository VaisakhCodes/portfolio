import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';

import { EducationCard } from '@/components/portfolio/EducationCard';

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

export const Experience = () => {
  return (
    <PageTransition>
      <Section id="experience" className="py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
          >
            <SectionHeading 
              eyebrow="Background"
              title="Experience & Education"
              subtitle="My professional journey and academic foundation."
              align="center"
            />
          </motion.div>
          
          <div className="max-w-3xl mx-auto mt-16">
            <motion.div 
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h3 variants={scrollVariants} className="text-h5 font-bold text-text-primary mb-4 flex items-center justify-center gap-3 border-b border-border/40 pb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                Academic Background
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
              </motion.h3>
              
              <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-6 md:before:ml-0 md:before:left-1/2 md:before:-translate-x-1/2 before:w-px before:bg-border/30">
                <motion.div variants={scrollVariants} className="relative z-10 w-full md:w-[calc(50%-2rem)] md:ml-auto">
                  <EducationCard
                    institution="Amrita Vishwa Vidyapeetham, Kochi"
                    degree="Master of Computer Application (MCA)"
                    duration="2024–2026"
                  />
                </motion.div>

                <motion.div variants={scrollVariants} className="relative z-10 w-full md:w-[calc(50%-2rem)] md:mr-auto">
                  <EducationCard
                    institution="University of Calicut, Kerala"
                    degree="Bachelor of Computer Application (BCA)"
                    duration="2021–2024"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
