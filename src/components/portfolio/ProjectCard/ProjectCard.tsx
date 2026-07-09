import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  metadata?: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({
  metadata,
  title,
  description,
  imageUrl,
  technologies = [],
  githubUrl,
  demoUrl,
  featured,
  className,
  children,
  ...props
}: ProjectCardProps) => {
  return (
    <Card className={cn(
      'group overflow-hidden bg-surface border-border/20 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-border/40 transition-all duration-700 ease-out',
      featured ? 'flex flex-col lg:flex-row' : 'flex flex-col',
      className
    )} {...props}>
      {/* Image / Visual Column */}
      {imageUrl && (
        <div className={cn(
          "relative overflow-hidden bg-background/50",
          featured ? "lg:w-[50%] xl:w-[55%] aspect-video lg:aspect-auto" : "aspect-[16/10] w-full"
        )}>
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 border border-white/5 z-10 pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay pointer-events-none" />
        </div>
      )}

      {/* Content Column */}
      <div className={cn(
        "flex flex-1 flex-col",
        featured ? "p-8 md:p-14 xl:p-16 justify-center" : "p-8 md:p-10"
      )}>
        {metadata && (
          <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-text-muted mb-4 block">
            {metadata}
          </span>
        )}
        
        <h3 className="font-extrabold text-text-primary mb-5 tracking-tight text-h4">
          {title}
        </h3>
        
        <p className="text-text-secondary font-light leading-relaxed mb-6 text-body-s">
          {description}
        </p>

        {children && (
          <div className="mb-8">
            {children}
          </div>
        )}
        
        {technologies.length > 0 && (
          <div className="mb-10 mt-auto">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {technologies.map((tech, index) => (
                <React.Fragment key={tech}>
                  <span className="text-[0.8rem] font-medium text-text-muted tracking-wide">
                    {tech}
                  </span>
                  {index < technologies.length - 1 && (
                    <span className="text-border/60">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {(githubUrl || demoUrl) && (
          <div className="flex flex-wrap items-center gap-8 pt-2">
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-body-s font-semibold text-text-primary hover:text-primary transition-colors group/link"
              >
                Live Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 ease-out group-hover/link:translate-x-1" />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-body-s font-medium text-text-secondary hover:text-text-primary transition-colors group/link"
              >
                <GithubIcon className="mr-2 h-4 w-4 transition-transform duration-500 ease-out group-hover/link:-translate-y-0.5 group-hover/link:text-text-primary" /> Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
