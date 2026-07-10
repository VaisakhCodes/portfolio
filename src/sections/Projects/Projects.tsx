import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
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

type Project = {
  id: string;
  metadata: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
  features: string[];
  gradientClass?: string;
  chipHoverClass?: string;
};

const projectsData: Project[] = [
  {
    id: 'medical-chatbot',
    metadata: "AI Application",
    title: "Medical Chatbot",
    imageUrl: "/images/projects/medical-chatbot.png",
    description: "A specialized Deep Learning application utilizing Retrieval-Augmented Generation (RAG) to provide highly accurate medical information. Engineered robust knowledge retrieval pipelines and developed an intuitive interface to bridge the gap between complex medical data and user accessibility. Developed in a team of 2.",
    technologies: ['Python', 'Deep Learning', 'RAG', 'NLP'],
    githubUrl: "#",
    features: [
      "RAG-based knowledge retrieval architecture",
      "Deep learning NLP integration",
      "Intuitive medical information interface"
    ],
    gradientClass: 'from-cyan-500/15 via-blue-500/5 to-transparent',
    chipHoverClass: 'hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:text-cyan-200'
  },
  {
    id: 'easy-bus',
    metadata: "Web Platform",
    title: "Easy Bus",
    imageUrl: "/images/projects/easy-bus.png",
    description: "A comprehensive role-based web application for bus tracking and seat reservation. Features a secure admin dashboard for fleet management and a streamlined frontend for seamless user bookings. Developed in a team of 4 (Sep 2023 – Jan 2024).",
    technologies: ['Django', 'JavaScript', 'PostgreSQL'],
    githubUrl: "#",
    features: [
      "Role-based access control",
      "Admin fleet management dashboard",
      "Streamlined booking interface"
    ],
    gradientClass: 'from-orange-500/15 via-red-500/5 to-transparent',
    chipHoverClass: 'hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:text-orange-200'
  },
  {
    id: 'premium-portfolio',
    metadata: "Portfolio Website",
    title: "Premium Developer Portfolio",
    imageUrl: "/images/projects/portfolio-preview.png",
    description: "A premium software developer portfolio engineered with modern frontend technologies. Designed using a comprehensive design system with a strong focus on performance, accessibility, reusable architecture, responsive layouts, and polished user experience.",
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: "#",
    features: [
      "Premium Design System architecture",
      "Fully responsive UI",
      "Component-driven architecture",
      "Accessibility-first implementation",
      "Smooth animations and micro-interactions"
    ],
    gradientClass: 'from-purple-500/15 via-indigo-500/5 to-transparent',
    chipHoverClass: 'hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:text-purple-200'
  }
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleDragEnd = (_: any, { offset, velocity }: PanInfo) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -100) {
      handleNext();
    } else if (swipe > 100) {
      handlePrev();
    }
  };

  const renderProjectCard = (project: typeof projectsData[0]) => (
    <ProjectCard
      title={project.title}
      technologies={project.technologies}
      githubUrl={project.githubUrl}
      imageUrl={project.imageUrl}
      gradientClass={project.gradientClass}
      chipHoverClass={project.chipHoverClass}
      className="w-full h-full"
    />
  );

  return (
    <PageTransition>
      <Section id="projects" className="py-16 md:py-24 overflow-hidden" background="transparent">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
          >
            <SectionHeading 
              eyebrow="Featured Work"
              title="Projects"
              align="center"
            />
          </motion.div>
          
          <div 
            className="relative mt-12 md:mt-16 mb-16 h-[440px] flex items-center justify-center w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-lg mx-auto flex items-center justify-center h-full">
              {projectsData.map((project, idx) => {
                let zIndex = 0;
                let scale = 0.9;
                let opacity = 0;
                let x = '0%';
                let isClickable = false;

                if (idx === currentIndex) {
                  zIndex = 10;
                  scale = 1;
                  opacity = 1;
                  x = '0%';
                } else if (idx === (currentIndex - 1 + projectsData.length) % projectsData.length) {
                  zIndex = 5;
                  scale = 0.9;
                  opacity = 0.75;
                  x = '-105%';
                  isClickable = true;
                } else if (idx === (currentIndex + 1) % projectsData.length) {
                  zIndex = 5;
                  scale = 0.9;
                  opacity = 0.75;
                  x = '105%';
                  isClickable = true;
                } else {
                  zIndex = -1;
                  scale = 0.8;
                  opacity = 0;
                  const diff = (idx - currentIndex + projectsData.length) % projectsData.length;
                  if (diff > projectsData.length / 2) {
                     x = '-200%';
                  } else {
                     x = '200%';
                  }
                }

                return (
                  <motion.div
                    key={project.id}
                    className="absolute w-full h-full flex items-center justify-center"
                    animate={{ x, scale, opacity, zIndex }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    onClick={() => {
                      if (isClickable) {
                        if (idx === (currentIndex - 1 + projectsData.length) % projectsData.length) handlePrev();
                        if (idx === (currentIndex + 1) % projectsData.length) handleNext();
                      }
                    }}
                    drag={idx === currentIndex ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={idx === currentIndex ? handleDragEnd : undefined}
                    whileHover={idx === currentIndex ? { y: -4, transition: { duration: 0.3 } } : {}}
                    style={{ 
                      cursor: idx === currentIndex ? 'grab' : isClickable ? 'pointer' : 'default',
                      pointerEvents: (idx === currentIndex || isClickable) ? 'auto' : 'none'
                    }}
                  >
                    {renderProjectCard(project)}
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 pointer-events-auto">
            <div className="flex gap-2">
              {projectsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border/50 hover:bg-border'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
