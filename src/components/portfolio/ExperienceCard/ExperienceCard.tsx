import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { TechBadge } from '../TechBadge';
import { Building2, Calendar, MapPin } from 'lucide-react';

export interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string;
  technologies?: string[];
}

export const ExperienceCard = ({
  company,
  role,
  duration,
  location,
  description,
  technologies = [],
  className,
  ...props
}: ExperienceCardProps) => {
  return (
    <Card className={cn('flex flex-col p-6', className)} {...props}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-h4 font-bold text-text-primary">{role}</h3>
          <div className="flex items-center gap-2 text-body-s font-medium text-primary">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            <span>{company}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-caption text-text-secondary md:items-end">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{duration}</span>
          </div>
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="mt-6 mb-6 text-body-s text-text-secondary leading-relaxed">
        {description}
      </p>

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-thin border-border">
          {technologies.map((tech) => (
            <TechBadge key={tech} text={tech} variant="default" />
          ))}
        </div>
      )}
    </Card>
  );
};
