import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          {
            'bg-primary text-text-primary': variant === 'primary',
            'bg-surface-elevated text-text-primary': variant === 'secondary',
            'bg-success text-background': variant === 'success',
            'bg-warning text-background': variant === 'warning',
            'bg-error text-text-primary': variant === 'error',
            'bg-surface text-text-secondary border-thin border-border': variant === 'neutral',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
