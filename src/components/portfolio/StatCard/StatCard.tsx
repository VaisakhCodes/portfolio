import React from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  value: number | string;
  label: string;
  suffix?: string;
}

export const StatCard = ({
  icon: Icon,
  value,
  label,
  suffix,
  className,
  ...props
}: StatCardProps) => {
  return (
    <Card
      variant="elevated"
      className={cn('flex flex-col items-center justify-center p-6 text-center', className)}
      {...props}
    >
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
      <div className="flex items-baseline gap-1">
        <span className="text-h3 font-bold text-text-primary">{value}</span>
        {suffix && <span className="text-h4 font-semibold text-primary">{suffix}</span>}
      </div>
      <p className="mt-1 text-body-s text-text-secondary">{label}</p>
    </Card>
  );
};
