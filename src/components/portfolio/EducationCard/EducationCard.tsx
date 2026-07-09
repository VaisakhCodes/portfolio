import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export interface EducationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  description?: string;
}

export const EducationCard = ({
  institution,
  degree,
  duration,
  grade,
  description,
  className,
  ...props
}: EducationCardProps) => {
  return (
    <Card variant="default" className={cn('flex flex-col p-8 border-border/40 bg-transparent shadow-none hover:bg-surface/50 transition-colors duration-300', className)} {...props}>
      <div className="mb-6 flex items-start gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-elevated/50 text-text-secondary">
          <GraduationCap className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-h4 font-bold text-text-primary">{institution}</h3>
          <p className="text-body font-medium text-text-secondary">{degree}</p>
        </div>
      </div>
      
      <div className="mb-4 flex flex-wrap gap-5 text-caption text-text-muted">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <span>{duration}</span>
        </div>
        {grade && (
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" aria-hidden="true" />
            <span>Grade: {grade}</span>
          </div>
        )}
      </div>

      {description && (
        <p className="text-body-s text-text-secondary leading-relaxed pt-5 border-t border-border/40 mt-auto">
          {description}
        </p>
      )}
    </Card>
  );
};
