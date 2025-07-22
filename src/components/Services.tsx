'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import {
  MessageSquare, Brain, Zap, Users,
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Automation',
    description: 'Intelligent bots and workflow automation to boost efficiency',
    features: ['Conversational AI', 'Business process automation', '24/7 support'],
    color: 'from-cyber-lime to-green-400',
  },
  {
    icon: Brain,
    title: 'Web & App Development',
    description: 'Modern, responsive websites and web apps using Flutter, Django, and more',
    features: ['Flutter, Django, Typescript', 'Mobile-friendly UI', 'Performance optimization'],
    color: 'from-electric to-blue-400',
  },
  {
    icon: Zap,
    title: 'Backend & API Engineering',
    description: 'Scalable, secure backend systems and custom APIs',
    features: ['Node.js, Python, Firebase', 'API design', 'Database architecture'],
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Users,
    title: 'AI Integrations',
    description: 'Seamless integration of AI models (OpenAI, LLMs) into your products',
    features: ['OpenAI, GPT, Claude', 'Custom AI workflows', 'Data processing'],
    color: 'from-orange-400 to-red-400',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-onyx">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-6">
            My
            {' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-steel max-w-3xl mx-auto">
            Fullstack development and AI solutions for startups and businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.01}
                transitionSpeed={400}
                glareEnable
                glareMaxOpacity={0.3}
                className="h-full"
              >
                <div className="glassmorphism rounded-xl p-6 h-full card-tilt group">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-switzer font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-steel mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-steel">
                        <div className="w-1.5 h-1.5 bg-cyber-lime rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyber-lime/20 transition-colors duration-300" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-steel mb-6">
            Ready to transform your business with AI automation?
          </p>
          <a
            href="https://wa.me/971585172288?text=Hi%20Suvorin%2C%20need%20AI%20automation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Start Your Project
            <MessageSquare className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
