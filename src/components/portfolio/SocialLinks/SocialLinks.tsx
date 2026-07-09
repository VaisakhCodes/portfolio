import React from 'react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'icon' | 'labeled';
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export const SocialLinks = ({
  mode = 'icon',
  githubUrl,
  linkedinUrl,
  email,
  className,
  ...props
}: SocialLinksProps) => {
  const baseLinkClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 border border-border bg-transparent hover:bg-surface text-text-secondary hover:text-text-primary';
  const sizeClasses = mode === 'icon' ? 'h-10 w-10' : 'h-11 px-6 text-body';

  return (
    <div className={cn('flex flex-wrap items-center gap-4', className)} {...props}>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className={cn(baseLinkClasses, sizeClasses)}
        >
          <GithubIcon
            className={cn({
              'mr-2 h-4 w-4': mode === 'labeled',
              'h-5 w-5': mode === 'icon',
            })}
            aria-hidden="true"
          />
          {mode === 'labeled' && 'GitHub'}
        </a>
      )}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className={cn(baseLinkClasses, sizeClasses)}
        >
          <LinkedinIcon
            className={cn({
              'mr-2 h-4 w-4': mode === 'labeled',
              'h-5 w-5': mode === 'icon',
            })}
            aria-hidden="true"
          />
          {mode === 'labeled' && 'LinkedIn'}
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          aria-label="Send Email"
          className={cn(baseLinkClasses, sizeClasses)}
        >
          <Mail
            className={cn({
              'mr-2 h-4 w-4': mode === 'labeled',
              'h-5 w-5': mode === 'icon',
            })}
            aria-hidden="true"
          />
          {mode === 'labeled' && 'Email'}
        </a>
      )}
    </div>
  );
};
