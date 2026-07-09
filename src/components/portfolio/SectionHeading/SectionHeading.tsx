import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-3',
        {
          'text-left items-start': align === 'left',
          'text-center items-center': align === 'center',
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-body-s font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-l text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
