import React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'title' | 'avatar' | 'button' | 'card' | 'image' | 'custom';
}

export const Skeleton = ({
  className,
  variant = 'text',
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-surface-elevated',
        {
          'h-4 w-full': variant === 'text',
          'h-8 w-3/4': variant === 'title',
          'h-12 w-12 rounded-full': variant === 'avatar',
          'h-11 w-32': variant === 'button',
          'h-64 w-full rounded-xl': variant === 'card',
          'h-full w-full': variant === 'image',
          '': variant === 'custom', // Leave dimensions to className
        },
        className
      )}
      role="status"
      aria-label="Loading skeleton"
      {...props}
    />
  );
};
