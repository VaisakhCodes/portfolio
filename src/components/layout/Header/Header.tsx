import React from 'react';
import { cn } from '@/lib/utils';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export const Header = ({
  title,
  subtitle,
  actions,
  align = 'left',
  className,
  ...props
}: HeaderProps) => {
  return (
    <header
      className={cn(
        'mb-8 flex flex-col gap-4',
        {
          'text-left items-start': align === 'left',
          'text-center items-center': align === 'center',
          'text-right items-end': align === 'right',
        },
        className
      )}
      {...props}
    >
      <div className="space-y-2">
        <h1 className="text-h2 font-bold tracking-tight text-text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="text-body-l text-text-secondary max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="mt-2 flex gap-4">{actions}</div>}
    </header>
  );
};
