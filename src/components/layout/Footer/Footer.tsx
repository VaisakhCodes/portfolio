import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="bg-transparent py-4 relative z-10 mt-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-caption text-text-muted">
          <p>&copy; {currentYear} Vaisakh Mohan. All rights reserved.</p>
        </div>
      </Container>
    </motion.footer>
  );
};
