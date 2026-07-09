import React from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  variant?: 'default' | 'outlined' | 'glowing';
  children: React.ReactNode;
}

export const HeroBadge = ({
  icon: Icon,
  variant = 'default',
  className,
  children,
  ...props
}: HeroBadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-body-s font-medium transition-all',
        {
          'bg-surface-elevated text-text-primary border border-border': variant === 'default',
          'border border-primary text-primary bg-transparent': variant === 'outlined',
          'bg-surface-elevated text-text-primary shadow-lg shadow-primary/20 border border-primary/30': variant === 'glowing',
        },
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
};
