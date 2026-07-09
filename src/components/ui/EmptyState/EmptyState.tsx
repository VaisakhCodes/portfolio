import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../Button/index';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border-thin border-dashed border-border bg-surface p-12 text-center transition-colors',
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated text-text-secondary">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>
      )}
      <h3 className="mb-2 text-h4 font-semibold text-text-primary">{title}</h3>
      {description && (
        <p className="mb-6 max-w-sm text-body text-text-secondary">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
