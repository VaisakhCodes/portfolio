import React, { useState, useRef, useEffect } from 'react';
import type { ReactElement } from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  children: ReactElement;
  content: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export const Tooltip = ({ children, content, placement = 'top', className }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const tooltipId = React.useId();

  return (
    <div 
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      ref={triggerRef}
    >
      {React.cloneElement(children as React.ReactElement<any>, {
        'aria-describedby': isVisible ? tooltipId : undefined,
      })}
      
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(
            'absolute z-tooltip w-max max-w-xs rounded-md bg-surface-elevated px-3 py-1.5 text-caption text-text-primary shadow-md border-thin border-border animate-in fade-in-0 zoom-in-95',
            {
              'bottom-full left-1/2 -translate-x-1/2 -translate-y-2': placement === 'top',
              'top-1/2 left-full -translate-y-1/2 translate-x-2': placement === 'right',
              'top-full left-1/2 -translate-x-1/2 translate-y-2': placement === 'bottom',
              'top-1/2 right-full -translate-y-1/2 -translate-x-2': placement === 'left',
            },
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
