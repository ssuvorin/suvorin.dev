'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AllCasesGrid({ cases }: { cases: any[] }) {
  return (
    <>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-4">
          All
          {' '}
          <span className="gradient-text">Cases</span>
        </h1>
        <p className="text-xl text-steel max-w-2xl mx-auto">
          AI, bots, and automation for startups and enterprises.
        </p>
      </motion.div>

      {/* Cases Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {cases.map((caseItem: any, idx: number) => (
          <motion.div
            key={caseItem.slug}
            className="glassmorphism rounded-xl overflow-hidden case-thumbnail h-full flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Link href={`/cases/${caseItem.slug}`} className="block group h-full">
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
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {caseItem.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-lime/10 text-cyber-lime text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-switzer font-bold text-white mb-2 group-hover:text-cyber-lime transition-colors">
                  {caseItem.title}
                </h2>
                {/* Removed year display here */}
                <ul className="list-disc pl-5 text-electric mb-4">
                  {caseItem.result.split('\n').map((line: string) => (
                    <li key={line}>
                      {line.replace(/^•\s*/, '')}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center text-cyber-lime group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Read Case Study</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
