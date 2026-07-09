import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import type { LucideIcon } from 'lucide-react';

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  category: string;
  icon?: LucideIcon;
  proficiency?: number;
}

export const SkillCard = ({
  name,
  category,
  icon: Icon,
  proficiency,
  className,
  ...props
}: SkillCardProps) => {
  return (
    <Card
      variant="default"
      className={cn('flex flex-col gap-4 p-5 border-border/40 bg-transparent shadow-none hover:bg-surface/50 transition-colors duration-300', className)}
      {...props}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-elevated/50 text-text-secondary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <div className="flex flex-col">
          <h4 className="text-body font-semibold text-text-primary">{name}</h4>
          <span className="text-caption text-text-muted">{category}</span>
        </div>
      </div>
      
      {typeof proficiency === 'number' && (
        <div className="mt-2 w-full">
          <div className="flex justify-between text-caption mb-1.5">
            <span className="text-text-secondary">Proficiency</span>
            <span className="font-medium text-text-primary">{proficiency}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated">
            <div
              className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: `${Math.min(Math.max(proficiency, 0), 100)}%` }}
              role="progressbar"
              aria-valuenow={proficiency}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      )}
    </Card>
  );
};
