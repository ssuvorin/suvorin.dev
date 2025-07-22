"use client";
import { motion } from "framer-motion";
import React from "react";

interface CaseAnimatedContentProps {
  caseData: {
    hero: string;
    title: string;
    stack: string[];
    year: number;
    problem: string;
    solution: string;
    result: string;
  };
}

export default function CaseAnimatedContent({ caseData }: CaseAnimatedContentProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <img src={caseData.hero} alt={caseData.title} className="w-full rounded-xl mb-8 shadow-lg" />
        <h1 className="text-4xl sm:text-5xl font-switzer font-bold text-white mb-4">
          {caseData.title}
        </h1>
        <div className="flex flex-wrap gap-3 mb-4">
          {caseData.stack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-cyber-lime/10 text-cyber-lime text-xs rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="text-steel text-sm mb-2">{caseData.year}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-cyber-lime mb-2">Challenge</h2>
        <p className="mb-4 text-steel">{caseData.problem}</p>
        <h2 className="text-2xl font-bold text-cyber-lime mb-2">Solution</h2>
        <p className="mb-4 text-steel">{caseData.solution}</p>
        <h2 className="text-2xl font-bold text-cyber-lime mb-2">Results</h2>
        <ul className="list-disc pl-6 text-electric">
          {caseData.result.split("\n").map((line, idx) => (
            <li key={idx}>{line.replace(/^•\s*/, "")}</li>
          ))}
        </ul>
      </motion.div>
    </>
  );
} 