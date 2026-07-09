import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  withContainer?: boolean;
  background?: 'default' | 'elevated' | 'transparent';
  containerSize?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Section = ({
  id,
  withContainer = true,
  background = 'default',
  containerSize = 'default',
  className,
  children,
  ...props
}: SectionProps) => {
  const content = withContainer ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24', // Default vertical spacing
        {
          'bg-surface': background === 'default',
          'bg-surface-elevated': background === 'elevated',
          'bg-transparent': background === 'transparent',
        },
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
};
