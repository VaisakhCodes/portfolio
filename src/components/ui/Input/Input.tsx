import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
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
    const inputId = id || generatedId;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-body-s font-medium text-text-primary transition-opacity',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            type={type}
            className={cn(
              'flex h-11 w-full rounded-md border-thin border-border bg-surface px-4 py-2 text-body text-text-primary transition-colors file:border-0 file:bg-transparent file:text-body-s file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
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

Input.displayName = 'Input';
