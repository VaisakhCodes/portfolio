import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { CertificationCard } from '@/components/portfolio/CertificationCard';

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

export const Certifications = () => {
  return (
    <PageTransition>
      <Section id="certifications" className="py-24 bg-surface-elevated/10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
          >
            <SectionHeading 
              eyebrow="Continuous Learning"
              title="Certifications & Workshops"
              subtitle="Verified technical certifications and professional development workshops."
              align="center"
            />
          </motion.div>
          
          <motion.div 
            className="grid gap-6 md:grid-cols-2 mt-16 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={scrollVariants} className="h-full">
              <CertificationCard
                title="Complete Figma Course: Web and Mobile Projects from Scratch"
                organization="Udemy"
                issueDate="January 2025"
                className="h-full"
              />
            </motion.div>
            <motion.div variants={scrollVariants} className="h-full">
              <CertificationCard
                title="Data Science with Python Workshop"
                organization="IIT Hyderabad (TECHMAGHI, ELAN & VISION)"
                issueDate="2024"
                className="h-full"
              />
            </motion.div>
            <motion.div variants={scrollVariants} className="h-full">
              <CertificationCard
                title="GitHub for Developers"
                organization="Amrita Vishwa Vidyapeetham"
                issueDate="2024"
                className="h-full"
              />
            </motion.div>
            <motion.div variants={scrollVariants} className="h-full">
              <CertificationCard
                title="Mininet: Playground for SDN"
                organization="Amrita Vishwa Vidyapeetham"
                issueDate="2024"
                className="h-full"
              />
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageTransition>
  );
};
