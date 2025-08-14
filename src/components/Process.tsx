'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search, Palette, Settings, Rocket,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Planning',
    description: 'We analyze your goals and define the best tech & AI approach.',
    details: ['Business needs analysis', 'AI & tech opportunity mapping', 'Project scoping'],
    color: 'from-cyber-lime to-green-400',
  },
  {
    icon: Palette,
    title: 'Architecture & Design',
    description: 'I design scalable systems and user-friendly interfaces.',
    details: ['System architecture', 'UI/UX design', 'Technical specifications'],
    color: 'from-electric to-blue-400',
  },
  {
    icon: Settings,
    title: 'Development',
    description: 'Fullstack coding: frontend, backend, and AI integration.',
    details: ['Frontend & backend development', 'AI model integration', 'API & database setup'],
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Rocket,
    title: 'Testing & Launch',
    description: 'Rigorous QA and smooth deployment.',
    details: ['Manual & automated testing', 'Production deployment', 'Performance optimization'],
    color: 'from-orange-400 to-red-400',
  },
  {
    icon: Rocket,
    title: 'Support & Growth',
    description: 'Ongoing improvements and scaling as your business grows.',
    details: ['Continuous support', 'Feature updates', 'Scaling & optimization'],
    color: 'from-cyber-lime to-electric',
  },
];

export function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-onyx relative overflow-hidden">
      {/* SVG Background Decorations */}
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" width="100%" height="100%" fill="none">
        <circle cx="10%" cy="20%" r="80" fill="url(#cyberlime)" opacity="0.08" />
        <circle cx="90%" cy="80%" r="120" fill="url(#electric)" opacity="0.08" />
        <defs>
          <radialGradient id="cyberlime" cx="0" cy="0" r="1" gradientTransform="rotate(90) scale(1 1)">
            <stop stopColor="#CBFF4D" />
            <stop offset="1" stopColor="#CBFF4D" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="electric" cx="0" cy="0" r="1" gradientTransform="rotate(90) scale(1 1)">
            <stop stopColor="#6AE3FF" />
            <stop offset="1" stopColor="#6AE3FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-6">
            My
            {' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-steel max-w-3xl mx-auto">
            My approach: fullstack development and AI, from idea to launch and beyond
          </p>
        </motion.div>

        {/* Zigzag Timeline */}
        <motion.div
          ref={ref}
          className="relative flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyber-lime via-electric to-cyber-lime opacity-40 -translate-x-1/2 z-0 timeline-glow" />
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={step.title}
                className={`relative flex flex-col lg:flex-row items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} z-10`}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Left side (content) */}
                {isLeft && (
                  <div className="w-full lg:w-1/2 flex justify-end">
                    <motion.div
                      className="glassmorphism rounded-xl p-10 shadow-elev-glow max-w-xl lg:mr-12"
                      initial={{ x: -60, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring', stiffness: 80, damping: 18, delay: 0.1 * idx,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elev-glow mr-4 animate-glow`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-cyber-lime mb-1">
                            Step
                            {idx + 1}
                          </div>
                          <h3 className="text-2xl font-switzer font-bold text-white mb-1">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-steel mb-6 leading-relaxed">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyber-lime rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-steel">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}
                {/* Center timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className="w-10 h-10 bg-cyber-lime rounded-full shadow-elev-glow border-4 border-onyx flex items-center justify-center animate-glow"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring', stiffness: 120, damping: 12, delay: 0.1 * idx,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Removed step number from dot */}
                  </motion.div>
                </div>
                {/* Right side (content) */}
                {!isLeft && (
                  <div className="w-full lg:w-1/2 flex justify-start">
                    <motion.div
                      className="glassmorphism rounded-xl p-10 shadow-elev-glow max-w-xl lg:ml-12"
                      initial={{ x: 60, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring', stiffness: 80, damping: 18, delay: 0.1 * idx,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elev-glow mr-4 animate-glow`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-cyber-lime mb-1">
                            Step
                            {idx + 1}
                          </div>
                          <h3 className="text-2xl font-switzer font-bold text-white mb-1">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-steel mb-6 leading-relaxed">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyber-lime rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-steel">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-steel mb-6 text-xl">
            Ready to start your AI automation journey with me?
          </p>
          <Link
            href="/#contact"
            className="btn-primary inline-flex items-center text-lg px-10 py-5 shadow-elev-glow animate-glow"
          >
            Start Your Project with Me
            <Rocket className="ml-2 h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
