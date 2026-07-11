import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SocialLinks } from '@/components/portfolio/SocialLinks';
import { Button } from '@/components/ui/Button/Button';
import { TypewriterEffect } from '@/components/ui/TypewriterEffect';
import { ArrowRight, Download, TerminalSquare, Layers, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <PageTransition>
      <Section id="home" className="relative min-h-[70vh] lg:min-h-[75vh] flex flex-col justify-center pt-12 pb-0 md:pt-16 lg:pt-12 lg:pb-0" background="transparent">
        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Content Column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 lg:-translate-y-7 md:-translate-y-2">
              
              <span 
                className="block text-xl md:text-2xl lg:text-[28px] font-medium text-text-secondary opacity-80 mb-3 lg:mb-4 tracking-wide"
              >
                Hi, I am
              </span>

              <h1 
                className="text-[3rem] leading-[0.9] md:text-[4.5rem] lg:text-[5.125rem] font-extrabold tracking-tight text-text-primary"
              >
                Vaisakh Mohan <br className="hidden lg:block" />
              </h1>
              
              <div 
                className="font-light tracking-normal text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] block mt-4 md:mt-5 mb-5 md:mb-7 text-text-primary"
              >
                <TypewriterEffect />
              </div>
              
              {/* Premium Inline Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 mb-5 md:mb-7 text-body-s font-medium text-text-secondary">
                {[
                  { icon: TerminalSquare, text: 'Python & React' },
                  { icon: Layers, text: 'Modern Frontend' },
                  { icon: CheckCircle2, text: 'Production-Ready' }
                ].map((badge) => (
                  <span 
                    key={badge.text}
                    className="flex items-center gap-2.5"
                  >
                    <badge.icon className="w-4 h-4 text-primary/80"/> {badge.text}
                  </span>
                ))}
              </div>

              <div 
                className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
              >
                {/* Primary CTA */}
                <Button 
                  size="lg" 
                  onClick={handleScrollToProjects}
                  className="w-full sm:w-auto group relative overflow-hidden shadow-[0_8px_40px_-12px_rgba(var(--color-primary),0.4)] hover:shadow-[0_12px_50px_-12px_rgba(var(--color-primary),0.6)] transition-all duration-500 px-8"
                >
                  <span className="relative z-10 flex items-center font-semibold tracking-wide">
                    View Projects
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </span>
                </Button>
                
                {/* Secondary CTA */}
                <a 
                  href="/resume/Vaisakh_Mohan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 border border-border/40 bg-transparent hover:bg-surface-elevated/40 hover:border-border/80 text-text-secondary hover:text-text-primary transition-all duration-500 py-3 px-8 text-body-l w-full sm:w-auto group"
                >
                  <Download className="mr-3 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1" />
                  Resume
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-5 lg:mt-7">
                <span 
                  className="text-caption font-semibold text-text-muted uppercase tracking-[0.2em]"
                >
                  Connect
                </span>
                <div 
                  className="h-px w-12 bg-border hidden sm:block" 
                />
                <div>
                  <SocialLinks 
                    mode="icon"
                    githubUrl="https://github.com/VaisakhCodes"
                    linkedinUrl="https://linkedin.com/in/vaisakh-mohan"
                  />
                </div>
              </div>
            </div>

            {/* Image / Visual Column */}
            <div 
              className="relative w-full max-w-xl mx-auto lg:max-w-none lg:col-span-5 flex items-center justify-center cursor-default bg-transparent"
              style={{ 
                perspective: 1400,
                transformStyle: "preserve-3d",
                transform: "rotateX(12deg) rotateY(-18deg) rotateZ(-8deg)"
              }}
            >
              <img 
                src="/iso-tech-sculpture.png" 
                alt="Vaisakh Mohan - Software Developer" 
                className="relative w-full h-auto -translate-y-12 -translate-x-12 md:-translate-y-20 md:-translate-x-16 lg:-translate-y-14 lg:-translate-x-4 scale-[1.4] sm:scale-[1.55] lg:scale-[1.75] origin-center pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)'
                }}
                loading="eager"
              />
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};
