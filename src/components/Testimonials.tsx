'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle, Clock, UserCheck, LifeBuoy,
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const wowFeatures = [
  {
    icon: MessageCircle,
    title: 'Direct Chat',
    subtitle: 'No managers. You always talk to me',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    subtitle: 'Quick answers, no waiting',
  },
  {
    icon: UserCheck,
    title: 'Personal Approach',
    subtitle: 'Every project is hands-on and unique',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    subtitle: 'I stay with you after launch',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-4">
            Why
            {' '}
            <span className="gradient-text">Clients Choose Me</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {wowFeatures.map((feature, i) => (
            <Tilt
              key={feature.title}
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              scale={1.04}
              transitionSpeed={400}
              glareEnable
              glareMaxOpacity={0.18}
              className="group"
            >
              <motion.div
                className="relative flex flex-col items-center justify-center bg-onyx rounded-2xl p-12 min-h-[260px] border-2 border-transparent shadow-elev-glow transition-all duration-300 overflow-visible wow-card"
                style={{ boxShadow: '0 0 32px 0 rgba(203,255,77,0.10)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ boxShadow: '0 0 48px 8px #CBFF4D55' }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-lime to-electric flex items-center justify-center mb-6 shadow-elev-glow"
                  whileHover={{ y: -8, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                >
                  <feature.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-switzer font-bold text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-steel text-lg text-center opacity-80">
                  {feature.subtitle}
                </p>
                <div className="wow-card-border absolute inset-0 rounded-2xl pointer-events-none" />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
