'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { getTopCases } from '../../content/cases';

const cases = getTopCases();

export function FeaturedCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="cases" className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-charcoal">
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
            Featured
            {' '}
            <span className="gradient-text">Cases</span>
          </h2>
          <p className="text-xl text-steel max-w-3xl mx-auto">
            Real projects that demonstrate our expertise in AI automation
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Categories removed as per new data structure */}
        </motion.div>

        {/* Cases Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {cases.map((caseItem) => (
            <motion.div key={caseItem.slug} variants={cardVariants}>
              <Link href={`/cases/${caseItem.slug}`} className="block group">
                <div className="glassmorphism rounded-xl overflow-hidden case-thumbnail h-full">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-onyx to-charcoal">
                    <Image
                      src={caseItem.hero}
                      alt={caseItem.title}
                      className="object-cover w-full h-full rounded-t-xl"
                      loading="lazy"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="w-5 h-5 text-cyber-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyber-lime/10 text-cyber-lime text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-switzer font-bold text-white mb-3 group-hover:text-cyber-lime transition-colors">
                      {caseItem.title}
                    </h3>

                    {/* Year */}
                    <div className="text-steel text-xs mb-2">{caseItem.year}</div>

                    {/* Result */}
                    <div className="flex items-center text-sm text-electric mb-4">
                      <ul className="list-disc pl-5">
                        {caseItem.result.split('\n').map((line) => (
                          <li key={line}>
                            {line.replace(/^•\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Read More */}
                    <div className="mt-6 flex items-center text-cyber-lime group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">Read Case Study</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
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
            Want to see more of our work?
          </p>
          <Link href="/cases" className="btn-secondary inline-flex items-center">
            View All Cases
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
