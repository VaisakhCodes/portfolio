import { Container } from '@/components/layout/Container';

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent mt-auto relative z-10">
      {/* Subtle Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      
      <Container>
        <div className="flex items-center justify-center py-6 md:py-8 text-[14px] md:text-[15px] text-text-muted">
          <p>
            &copy; 2026 Vaisakh Mohan. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
