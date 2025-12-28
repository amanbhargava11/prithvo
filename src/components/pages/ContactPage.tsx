import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-beige">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              Get in Touch
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
              Have questions about our products, artisans, or custom orders? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-4xl text-primary mb-6">
                  Let's Connect
                </h2>
                <p className="font-paragraph text-lg text-foreground/80 leading-relaxed mb-8">
                  Whether you're interested in our products, want to learn more about our artisans, or have a custom order in mind, we're here to help. Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-1">Visit Us</h3>
                    <p className="font-paragraph text-foreground/70">
                      Artisan Village, Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-1">Call Us</h3>
                    <p className="font-paragraph text-foreground/70">
                      +91 98765 43210
                    </p>
                    <p className="font-paragraph text-sm text-foreground/60 mt-1">
                      Mon-Sat, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-1">Email Us</h3>
                    <p className="font-paragraph text-foreground/70">
                      hello@prithvo.com
                    </p>
                    <p className="font-paragraph text-sm text-foreground/60 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-beige p-8 rounded-xl">
                <h3 className="font-heading text-2xl text-primary mb-3">
                  Quick Order via WhatsApp
                </h3>
                <p className="font-paragraph text-foreground/70 mb-4">
                  For immediate assistance or to place a direct order, message us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-paragraph hover:bg-terracotta transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <h2 className="font-heading text-3xl text-primary mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-beige p-8 rounded-xl text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl text-primary mb-2">
                      Thank You!
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-paragraph text-sm text-foreground/70 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-paragraph text-sm text-foreground/70 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-paragraph text-sm text-foreground/70 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-paragraph text-sm text-foreground/70 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-paragraph text-sm text-foreground/70 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-terracotta h-12 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-24 bg-beige">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="font-heading text-4xl text-primary mb-8">
                Business Hours
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-heading text-xl text-primary mb-2">Workshop Visits</h3>
                  <p className="font-paragraph text-foreground/70">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-heading text-xl text-primary mb-2">Customer Support</h3>
                  <p className="font-paragraph text-foreground/70">
                    Monday - Sunday<br />
                    8:00 AM - 8:00 PM IST
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
