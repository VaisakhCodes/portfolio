import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info';

export interface ToastOptions {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  toast: (options: Omit<ToastOptions, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const toast = useCallback((options: Omit<ToastOptions, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...options, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed bottom-0 right-0 z-toast m-6 flex flex-col gap-2 w-full max-w-sm pointer-events-none">
            {toasts.map((t) => (
              <ToastItem key={t.id} {...t} onRemove={() => removeToast(t.id)} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

interface ToastItemProps extends ToastOptions {
  onRemove: () => void;
}

const ToastItem = ({ title, description, variant = 'info', duration = 5000, onRemove }: ToastItemProps) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || duration === 0) return;
    const timer = setTimeout(onRemove, duration);
    return () => clearTimeout(timer);
  }, [duration, onRemove, isPaused]);

  const Icon = {
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
    info: Info,
  }[variant];

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={cn(
        'pointer-events-auto flex w-full items-start gap-3 rounded-lg border-thin bg-surface-elevated p-4 shadow-lg text-text-primary transition-all animate-in slide-in-from-right-full fade-in-0 duration-medium ease-out',
        {
          'border-border': variant === 'info',
          'border-l-4 border-l-success border-y-border border-r-border': variant === 'success',
          'border-l-4 border-l-warning border-y-border border-r-border': variant === 'warning',
          'border-l-4 border-l-error border-y-border border-r-border': variant === 'error',
        }
      )}
    >
      <Icon
        className={cn('h-5 w-5 shrink-0 mt-0.5', {
          'text-text-primary': variant === 'info',
          'text-success': variant === 'success',
          'text-warning': variant === 'warning',
          'text-error': variant === 'error',
        })}
      />
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="font-semibold text-body-s">{title}</h3>
        {description && <p className="text-caption opacity-90">{description}</p>}
      </div>
      <button
        onClick={onRemove}
        className="shrink-0 rounded-md opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
