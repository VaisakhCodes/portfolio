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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
          >
            <SectionHeading 
              eyebrow="About Me"
              title="Developer Philosophy & Background"
              subtitle="I am a Software Developer with a strong academic foundation and hands-on experience building full-stack applications. I specialize in backend development and scalable architectures."
            />
          </motion.div>
          
          <motion.div 
            className="mt-8"
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
        </Container>
      </Section>
    </PageTransition>
  );
};
