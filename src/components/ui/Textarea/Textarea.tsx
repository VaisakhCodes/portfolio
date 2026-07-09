import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      success,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'text-body-s font-medium text-text-primary transition-opacity',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            className={cn(
              'flex min-h-[80px] w-full rounded-md border-thin border-border bg-surface px-4 py-2 text-body text-text-primary transition-colors placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-error focus-visible:ring-error focus-visible:border-error',
              success && 'border-success focus-visible:ring-success focus-visible:border-success',
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
        </div>
        {(error || success || helperText) && (
          <p
            className={cn(
              'text-caption transition-colors',
              error ? 'text-error' : success ? 'text-success' : 'text-text-muted'
            )}
          >
            {error || success || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
