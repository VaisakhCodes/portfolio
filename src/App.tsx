import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary font-sans antialiased relative overflow-hidden">
      {/* Premium Background Atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-surface/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-surface/50 to-transparent" />
      </div>

      <a 
        href="#main-content" 
        className="fixed top-0 left-0 -translate-y-full focus:translate-y-0 z-50 bg-primary text-text-primary p-4 transition-transform focus:outline-none focus:ring-2 focus:ring-primary-hover focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" className="flex-grow pt-24 pb-16 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
