import React from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface TechBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon?: LucideIcon;
  variant?: 'default' | 'highlighted' | 'outlined';
}

export const TechBadge = ({
  text,
  icon: Icon,
  variant = 'default',
  className,
  ...props
}: TechBadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-caption font-medium transition-colors',
        {
          'bg-surface-elevated text-text-secondary hover:text-text-primary': variant === 'default',
          'bg-primary/10 text-primary': variant === 'highlighted',
          'border border-border bg-transparent text-text-secondary hover:text-text-primary hover:border-text-secondary': variant === 'outlined',
        },
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      <span>{text}</span>
    </div>
  );
};
