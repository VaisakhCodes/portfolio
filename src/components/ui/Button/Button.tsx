import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled,
      leadingIcon,
      trailingIcon,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          
          // Full width
          fullWidth ? 'w-full' : '',
          
          // Variants
          variant === 'primary' && 'bg-primary text-text-primary hover:bg-primary-hover shadow-sm',
          variant === 'secondary' && 'bg-surface-elevated text-text-primary hover:bg-surface shadow-sm',
          variant === 'outline' && 'border-default border-border bg-transparent hover:bg-surface text-text-secondary hover:text-text-primary',
          variant === 'ghost' && 'bg-transparent hover:bg-surface text-text-secondary hover:text-text-primary',
          variant === 'destructive' && 'bg-error text-text-primary hover:opacity-90 shadow-sm',
          variant === 'icon' && 'bg-transparent hover:bg-surface text-text-secondary hover:text-text-primary',
          
          // Sizes 
          size === 'sm' && variant !== 'icon' && 'h-9 px-4 text-body-s',
          size === 'md' && variant !== 'icon' && 'h-11 px-6 text-body',
          size === 'lg' && variant !== 'icon' && 'py-3 px-8 text-body-l',
          variant === 'icon' && 'h-10 w-10',
          
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && leadingIcon && <span className="mr-2">{leadingIcon}</span>}
        {children}
        {!loading && trailingIcon && <span className="ml-2">{trailingIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
