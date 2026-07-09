import React from 'react';
import { cn } from '@/lib/utils';
import { Spinner } from '../Spinner';
import { Skeleton } from '../Skeleton';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'spinner' | 'skeleton';
  message?: string;
  centered?: boolean;
  spinnerSize?: 'sm' | 'md' | 'lg';
  spinnerVariant?: 'primary' | 'secondary';
  skeletonVariant?: 'text' | 'title' | 'avatar' | 'button' | 'card' | 'image' | 'custom';
}

export const Loading = ({
  mode = 'spinner',
  message,
  centered = true,
  spinnerSize = 'md',
  spinnerVariant = 'primary',
  skeletonVariant = 'text',
  className,
  ...props
}: LoadingProps) => {
  return (
    <div
      className={cn(
        'flex flex-col',
        {
          'items-center justify-center p-8 text-center h-full min-h-[120px]': centered,
        },
        className
      )}
      {...props}
    >
      {mode === 'spinner' ? (
        <Spinner size={spinnerSize} variant={spinnerVariant} />
      ) : (
        <Skeleton variant={skeletonVariant} className={centered ? 'mx-auto' : ''} />
      )}
      
      {message && (
        <p
          className={cn('mt-4 text-body-s text-text-secondary', {
            'animate-pulse': mode === 'skeleton',
          })}
        >
          {message}
        </p>
      )}
    </div>
  );
};
