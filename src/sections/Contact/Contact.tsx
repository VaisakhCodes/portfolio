import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { SocialLinks } from '@/components/portfolio/SocialLinks';
import { Send, CheckCircle2 } from 'lucide-react';

const scrollVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <Section id="contact" className="py-24" background="transparent">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollVariants}
          >
            <SectionHeading 
              eyebrow="Get In Touch"
              title="Let's Connect"
              subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
              align="center"
            />
          </motion.div>
          
          <motion.div 
            className="grid gap-16 lg:grid-cols-12 mt-16 max-w-5xl mx-auto items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            
            {/* Contact Info */}
            <motion.div variants={scrollVariants} className="lg:col-span-5 flex flex-col gap-10">
              <div className="space-y-6">
                <h3 className="text-h5 font-bold text-text-primary">Contact Information</h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Feel free to reach out to me directly through email or connect with me on professional networks.
                </p>
              </div>
              
              <div className="space-y-6 pt-6 border-t border-border/40">
                <h4 className="text-h5 font-bold text-text-primary">Follow My Work</h4>
                <SocialLinks 
                  githubUrl="https://github.com/VaisakhCodes"
                  linkedinUrl="https://linkedin.com/in/vaisakh-mohan"
                  email="mailto:vaisakhmohan002@gmail.com"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={scrollVariants} className="lg:col-span-7 w-full">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-6 min-h-[400px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">Message sent successfully.</h3>
                    <p className="text-text-secondary text-lg max-w-sm">
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form key="form" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2.5">
                        <label htmlFor="name" className="text-xs font-semibold text-text-secondary block uppercase tracking-wider">
                          Name
                        </label>
                        <input 
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="What's your name?"
                          required
                          className="w-full bg-white border border-black/10 rounded-[14px] px-4 py-3.5 text-[#111111] placeholder:text-gray-400 text-base outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white focus:shadow-[0_0_15px_-3px_rgba(var(--color-primary),0.15)] hover:border-black/20"
                        />
                      </div>
                      
                      <div className="space-y-2.5">
                        <label htmlFor="email" className="text-xs font-semibold text-text-secondary block uppercase tracking-wider">
                          Email Address
                        </label>
                        <input 
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="What's your email?"
                          required
                          className="w-full bg-white border border-black/10 rounded-[14px] px-4 py-3.5 text-[#111111] placeholder:text-gray-400 text-base outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white focus:shadow-[0_0_15px_-3px_rgba(var(--color-primary),0.15)] hover:border-black/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-text-secondary block uppercase tracking-wider">
                        Subject
                      </label>
                      <input 
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        required
                        className="w-full bg-white border border-black/10 rounded-[14px] px-4 py-3.5 text-[#111111] placeholder:text-gray-400 text-base outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white focus:shadow-[0_0_15px_-3px_rgba(var(--color-primary),0.15)] hover:border-black/20"
                      />
                    </div>
                    
                    <div className="space-y-2.5">
                      <label htmlFor="message" className="text-xs font-semibold text-text-secondary block uppercase tracking-wider">
                        Message
                      </label>
                      <textarea 
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                        className="w-full min-h-[160px] resize-y bg-white border border-black/10 rounded-[14px] px-4 py-3.5 text-[#111111] placeholder:text-gray-400 text-base outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white focus:shadow-[0_0_15px_-3px_rgba(var(--color-primary),0.15)] hover:border-black/20"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full sm:w-auto overflow-hidden rounded-[14px] bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(var(--color-primary),0.5)] active:translate-y-0 active:shadow-none disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                        
                        <span className="relative flex items-center justify-center gap-2.5">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageTransition>
  );
};
