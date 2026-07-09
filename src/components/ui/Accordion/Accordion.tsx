import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionContextType {
  openValues: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}

export const Accordion = ({
  type = 'single',
  defaultValue,
  children,
  className,
}: AccordionProps) => {
  const [openValues, setOpenValues] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );

  const toggleItem = (value: string) => {
    setOpenValues((prev) => {
      const isOpen = prev.includes(value);
      if (type === 'single') {
        return isOpen ? [] : [value];
      } else {
        return isOpen ? prev.filter((v) => v !== value) : [...prev, value];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem }}>
      <div className={cn('flex w-full flex-col', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemContextType {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

export interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionItem must be used within Accordion');

  const isOpen = context.openValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn('border-b border-thin border-border', className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const accordionContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }

  const { toggleItem } = accordionContext;
  const { value, isOpen } = itemContext;

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={() => toggleItem(value)}
      className={cn(
        'flex flex-1 w-full items-center justify-between py-4 font-medium text-text-primary transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn('h-4 w-4 shrink-0 transition-transform duration-normal', {
          'rotate-180': isOpen,
        })}
      />
    </button>
  );
};

export const AccordionContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const itemContext = useContext(AccordionItemContext);
  if (!itemContext) throw new Error('AccordionContent must be used within AccordionItem');
  
  const { isOpen } = itemContext;

  return (
    <div
      role="region"
      className={cn(
        'grid overflow-hidden text-body-s transition-all duration-normal ease-standard',
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      )}
      {...props}
    >
      <div className="overflow-hidden">
        <div className={cn('pb-4 pt-0 text-text-secondary', className)}>{children}</div>
      </div>
    </div>
  );
};
