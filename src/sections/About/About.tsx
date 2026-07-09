import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Code2, GraduationCap, Sparkles } from 'lucide-react';

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
            className="grid gap-8 mt-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={scrollVariants} className="flex flex-col gap-8">
              <Card className="p-8 md:p-10 border-transparent bg-surface-elevated/20 shadow-none">
                <h3 className="text-h4 font-bold text-text-primary mb-6 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
                  My Journey
                </h3>
                <div className="space-y-6 text-body-l text-text-secondary leading-relaxed">
                  <p>
                    Software Developer with practical experience in designing and developing responsive web applications with HTML5, CSS3 and Python. Knows how to create user-friendly interfaces, role based applications, and backend development using Flask and Django.
                  </p>
                  <p>
                    Proficiency with software development principles, database-driven software applications and version control with Git. Loves to write clean, maintainable code, embrace new technologies in a rapid pace and deliver reliable, user-centric software solutions in collaborative development environments.
                  </p>
                </div>
              </Card>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <Card className="p-8 border-transparent bg-surface-elevated/20 shadow-none">
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

                <Card className="p-8 border-transparent bg-surface-elevated/20 shadow-none">
                  <h4 className="text-h5 font-bold text-text-primary mb-5 flex items-center gap-3">
                    <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
                    Core Focus
                  </h4>
                  <ul className="space-y-3 text-body text-text-secondary">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Full-Stack Web Development</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Python & Django Architectures</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Database-Driven Applications</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Responsive UI Implementation</li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageTransition>
  );
};
