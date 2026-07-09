import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export const Spinner = ({
  size = 'md',
  variant = 'primary',
  className,
  ...props
}: SpinnerProps) => {
  return (
    <Loader2
      className={cn(
        'animate-spin',
        {
          'h-4 w-4': size === 'sm',
          'h-8 w-8': size === 'md',
          'h-12 w-12': size === 'lg',
          'text-primary': variant === 'primary',
          'text-text-secondary': variant === 'secondary',
        },
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
};
