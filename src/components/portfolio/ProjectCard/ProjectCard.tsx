import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  gradientClass?: string;
  chipHoverClass?: string;
}

export const ProjectCard = ({
  title,
  imageUrl,
  technologies = [],
  githubUrl,
  demoUrl,
  gradientClass,
  chipHoverClass,
  className,
  ...props
}: ProjectCardProps) => {
  return (
    <Card className={cn(
      'group overflow-hidden bg-surface border-border/20 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-border/40 transition-all duration-700 ease-out',
      'flex flex-col h-[440px] w-full',
      className
    )} {...props}>
      
      {/* Image / Visual Area (Top) */}
      <motion.div 
        className="relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="relative w-full aspect-[16/10] overflow-hidden flex items-center justify-center"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${title} preview`}
              className="block h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-border/40 transition-transform duration-1000 ease-out group-hover:scale-[1.05] group-hover:text-primary/40">
              <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold font-mono">{title.substring(0, 2).toUpperCase()}</span>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase opacity-50">Preview Unavailable</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Content Area (Bottom) */}
      <div className={cn(
        "relative flex flex-col items-start text-left flex-grow w-full px-6 pb-8 pt-5",
      )}>
        {/* Ambient Glow Background */}
        <div className={cn(
          "absolute inset-0 pointer-events-none transition-all duration-500",
          "bg-gradient-to-b opacity-40 group-hover:opacity-80",
          gradientClass || "from-white/5 to-transparent"
        )} />

        <h3 className="relative font-extrabold text-text-primary mb-3 tracking-tight text-h5 w-full z-10 drop-shadow-sm">
          {title}
        </h3>
        
        {technologies.length > 0 && (
          <div className="relative mb-4 w-full z-10">
            <div className="flex flex-wrap items-center justify-start gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className={cn(
                    "bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[0.65rem] font-semibold tracking-wider text-text-primary/70 uppercase transition-all duration-300",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
                    chipHoverClass || "hover:border-white/20 hover:bg-white/10"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

