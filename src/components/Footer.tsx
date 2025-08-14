'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'AI Chatbots', href: '#services' },
    { name: 'Prompt Engineering', href: '#services' },
    { name: 'Integrations', href: '#services' },
    { name: 'Consulting', href: '#services' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Cases', href: '#cases' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ssuvorin', icon: '🔗' },
  { name: 'Twitter', href: 'https://twitter.com/sergeidotsol', icon: '🐦' },
  { name: 'GitHub', href: 'https://github.com/ssuvorin', icon: '💻' },
];

export function Footer() {
  return (
    <footer className="bg-onyx border-t border-onyx/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <motion.div
                className="text-2xl font-switzer font-bold gradient-text mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                suvorin.dev
              </motion.div>
            </Link>
            <p className="text-steel mb-6 leading-relaxed">
              Building the future of AI automation. From chatbots to integrations,
              we transform businesses with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center text-steel hover:text-cyber-lime hover:bg-onyx transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-cyber-lime transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-cyber-lime transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-cyber-lime transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-onyx/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-steel text-sm">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              suvorin.dev
              All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="mailto:hello@suvorin.dev"
                className="text-steel hover:text-cyber-lime transition-colors duration-200 text-sm"
              >
                hello@suvorin.dev
              </a>
              <Link
                href="/#contact"
                className="btn-primary text-sm px-4 py-2"
              >
                Let&apos;s Build Something
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
