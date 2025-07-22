'use client';

import {
  MessageSquare, Zap, Brain, LifeBuoy,
} from 'lucide-react';

const wowFeatures = [
  {
    icon: MessageSquare,
    title: 'Direct Chat',
    subtitle: 'No managers. You always talk to me',
    color: 'from-cyber-lime to-green-400',
    glow: 'bg-cyber-lime/20',
    iconColor: 'text-cyber-lime',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    subtitle: 'Quick answers, no waiting',
    color: 'from-electric to-blue-400',
    glow: 'bg-electric/20',
    iconColor: 'text-electric',
  },
  {
    icon: Brain,
    title: 'Personal Approach',
    subtitle: 'Every project is hands-on and unique',
    color: 'from-purple-400 to-pink-400',
    glow: 'bg-purple-400/20',
    iconColor: 'text-purple-300',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    subtitle: 'I stay with you after launch',
    color: 'from-orange-400 to-red-400',
    glow: 'bg-orange-400/20',
    iconColor: 'text-orange-300',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-4">
            Why
            {' '}
            <span className="gradient-text">Clients Choose Me</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {wowFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group bg-onyx rounded-3xl p-10 min-h-[240px] border-2 border-cyber-lime/10 shadow-elev-glow transition-all duration-300 hover:-translate-y-2 hover:border-cyber-lime/60 focus-within:border-cyber-lime/60 relative overflow-hidden flex flex-col items-center justify-center cursor-pointer outline-none"
              tabIndex={0}
              role="button"
              aria-label={feature.title}
            >
              {/* Glow background */}
              <span
                className={`absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-70 z-0 ${feature.glow} group-hover:scale-125 group-hover:opacity-90 transition-all duration-300`}
              />
              <div className="mb-6 z-10 flex items-center justify-center">
                <feature.icon className={`w-14 h-14 ${feature.iconColor} drop-shadow-[0_0_16px_rgba(203,255,77,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_0_32px_rgba(203,255,77,0.7)] transition-transform duration-300`} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-switzer font-bold text-white mb-2 text-center z-10">
                {feature.title}
              </h3>
              <p className="text-steel text-lg text-center opacity-80 z-10">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
