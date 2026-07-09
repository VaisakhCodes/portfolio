import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Award, Calendar, ExternalLink, Hash } from 'lucide-react';

export interface CertificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  organization: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export const CertificationCard = ({
  title,
  organization,
  issueDate,
  credentialId,
  verificationUrl,
  className,
  ...props
}: CertificationCardProps) => {
  return (
    <Card variant="default" className={cn('flex flex-col p-6 border-border/40 bg-transparent shadow-none hover:bg-surface/50 transition-colors duration-300', className)} {...props}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h4 className="text-body font-bold text-text-primary leading-tight">{title}</h4>
          <p className="text-body-s text-primary font-medium">{organization}</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-elevated/50 text-text-secondary">
          <Award className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      
      <div className="flex flex-col gap-2 text-caption text-text-muted mb-4">
        {issueDate && (
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Issued {issueDate}</span>
          </div>
        )}
        {credentialId && (
          <div className="flex items-center gap-2">
            <Hash className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="truncate">ID: {credentialId}</span>
          </div>
        )}
      </div>

      {verificationUrl && (
        <div className="mt-auto pt-4 border-t border-border/40">
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 border border-border/40 bg-transparent hover:bg-surface-elevated text-text-secondary hover:text-text-primary h-9 px-4 text-body-s"
          >
            Verify Credential <ExternalLink className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      )}
    </Card>
  );
};
