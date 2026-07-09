import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

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

export const Projects = () => {
  return (
    <PageTransition>
      <Section id="projects" className="py-16 md:py-24" background="transparent">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
          >
            <SectionHeading 
              eyebrow="Featured Work"
              title="Projects & Case Studies"
              subtitle="A selection of verified projects demonstrating my experience in full-stack development, deep learning integrations, and complex UI implementations."
              align="center"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-16 md:gap-24 mt-16 md:mt-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Featured Project */}
            <motion.div variants={scrollVariants} className="w-full">
              <ProjectCard
                featured
                metadata="AI Application"
                title="Medical Chatbot"
                description="A specialized Deep Learning application utilizing Retrieval-Augmented Generation (RAG) to provide highly accurate medical information. Engineered robust knowledge retrieval pipelines and developed an intuitive interface to bridge the gap between complex medical data and user accessibility. Developed in a team of 2."
                technologies={['Python', 'Deep Learning', 'RAG', 'NLP']}
                githubUrl="#"
              >
                <div className="flex flex-col gap-3 text-body-s text-text-secondary/90">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                    <span>RAG-based knowledge retrieval architecture</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                    <span>Deep learning NLP integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                    <span>Intuitive medical information interface</span>
                  </div>
                </div>
              </ProjectCard>
            </motion.div>
            
            {/* Secondary Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div variants={scrollVariants} className="h-full">
                <ProjectCard
                  metadata="Web Platform"
                  title="Easy Bus"
                  description="A comprehensive role-based web application for bus tracking and seat reservation. Features a secure admin dashboard for fleet management and a streamlined frontend for seamless user bookings. Developed in a team of 4 (Sep 2023 – Jan 2024)."
                  technologies={['Django', 'React', 'PostgreSQL']}
                  githubUrl="#"
                >
                  <div className="flex flex-col gap-2.5 text-body-s text-text-secondary/80">
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Role-based access control</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Admin fleet management dashboard</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Streamlined booking interface</span>
                    </div>
                  </div>
                </ProjectCard>
              </motion.div>

              <motion.div variants={scrollVariants} className="h-full">
                <ProjectCard
                  metadata="Portfolio Website"
                  title="Premium Developer Portfolio"
                  description="A premium software developer portfolio engineered with modern frontend technologies. Designed using a comprehensive design system with a strong focus on performance, accessibility, reusable architecture, responsive layouts, and polished user experience."
                  technologies={['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion']}
                  githubUrl="#"
                >
                  <div className="flex flex-col gap-2.5 text-body-s text-text-secondary/80">
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Premium Design System architecture</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Fully responsive UI</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Component-driven architecture</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Accessibility-first implementation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>Smooth animations and micro-interactions</span>
                    </div>
                  </div>
                </ProjectCard>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </PageTransition>
  );
};
