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
      <div className="fixed inset-0 z-[-1] pointer-events-none" style={{ background: 'radial-gradient(circle at top center, #0B1120 0%, #09101D 35%, #070B17 100%)' }}>
        {/* Subtle indigo ambient glow behind Hero (top right) */}
        <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.10)' }} />
        {/* Faint glow near lower-left */}
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(124,58,237,0.06)' }} />
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
