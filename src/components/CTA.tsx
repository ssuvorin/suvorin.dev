/* eslint-disable jsx-a11y/label-has-associated-control, max-len */

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '', email: '', phone: '', project: '',
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to submit');
      }
    } catch (networkError) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-lime/5 via-electric/5 to-cyber-lime/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-lime/10 via-transparent to-electric/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to build
            <span className="gradient-text">your next product</span>
            <br />
            or automate your business with AI?
          </motion.h2>
          <motion.p
            className="text-xl text-steel max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let’s discuss how fullstack development and AI can drive your business forward
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            className="glassmorphism rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-steel mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Name"
                    className="w-full px-4 py-3 bg-onyx/50 border border-onyx/40 rounded-md text-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-cyber-lime/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-steel mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Email"
                    className="w-full px-4 py-3 bg-onyx/50 border border-onyx/40 rounded-md text-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-cyber-lime/50 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-steel mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-label="Phone"
                    className="w-full px-4 py-3 bg-onyx/50 border border-onyx/40 rounded-md text-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-cyber-lime/50 focus:border-transparent transition-all duration-300"
                    placeholder="+971 58 517 2288"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-steel mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    aria-label="Project Details"
                    rows={4}
                    className="w-full px-4 py-3 bg-onyx/50 border border-onyx/40 rounded-md text-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-cyber-lime/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-lime to-electric rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-switzer font-bold text-white mb-4">
                  Message Sent!
                </h3>
                <p className="text-steel">
                  Thank you for reaching my. We&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 btn-secondary"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-switzer font-bold text-white mb-6">
                Let&apos;s Build Something Amazing
              </h3>
              <p className="text-steel leading-relaxed mb-8">
                Whether you need a custom AI chatbot, seamless integrations, or strategic consulting,
                <br />
                we&apos;re here to help you leverage the power of AI automation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-lime to-electric rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                  <p className="text-steel text-sm">
                    Get a response within 24 hours and start your project within a week
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric to-cyber-lime rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Custom Solutions</h4>
                  <p className="text-steel text-sm">
                    Tailored AI solutions designed specifically for your business needs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-lime to-electric rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-steel text-sm">
                    Continuous support and optimization to ensure maximum ROI
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="pt-6 border-t border-onyx/40">
              <p className="text-steel mb-4">
                Prefer to chat directly?
              </p>
              <a
                href="https://wa.me/971585172288?text=Hi%20Suvorin%2C%20need%20AI%20automation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                Chat on WhatsApp
                <Send className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
