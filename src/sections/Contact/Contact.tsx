import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageTransition } from '@/components/layout/PageTransition';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { SocialLinks } from '@/components/portfolio/SocialLinks';
import { Send } from 'lucide-react';

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
            className="grid gap-16 lg:grid-cols-12 mt-16 max-w-5xl mx-auto"
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
            <motion.div variants={scrollVariants} className="lg:col-span-7">
              <Card className="p-8 md:p-10 border-transparent bg-surface-elevated/20 shadow-none">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2.5">
                      <label htmlFor="name" className="text-body-s font-semibold text-text-secondary block uppercase tracking-wider">
                        Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="John Doe" 
                        required
                        aria-required="true"
                        className="bg-surface/50 border-border/50 focus:bg-surface transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2.5">
                      <label htmlFor="email" className="text-body-s font-semibold text-text-secondary block uppercase tracking-wider">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="john@example.com"
                        required
                        aria-required="true"
                        className="bg-surface/50 border-border/50 focus:bg-surface transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    <label htmlFor="subject" className="text-body-s font-semibold text-text-secondary block uppercase tracking-wider">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="How can I help you?" 
                      required
                      aria-required="true"
                      className="bg-surface/50 border-border/50 focus:bg-surface transition-all duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2.5">
                    <label htmlFor="message" className="text-body-s font-semibold text-text-secondary block uppercase tracking-wider">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Write your message here..."
                      className="min-h-[150px] resize-y bg-surface/50 border-border/50 focus:bg-surface transition-all duration-300"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-3">
                      Send Message
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageTransition>
  );
};
