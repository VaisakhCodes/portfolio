import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = 'Avatar', initials, size = 'md', ...props }, ref) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex shrink-0 overflow-hidden rounded-full bg-surface-elevated',
          {
            'h-8 w-8 text-caption': size === 'sm',
            'h-12 w-12 text-body-s': size === 'md',
            'h-16 w-16 text-body': size === 'lg',
            'h-24 w-24 text-h5': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-medium text-text-secondary uppercase">
            {initials?.slice(0, 2) || alt.slice(0, 2).toUpperCase() || '?'}
          </span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';
