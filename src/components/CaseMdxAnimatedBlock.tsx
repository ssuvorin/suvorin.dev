"use client";
import { motion } from "framer-motion";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

interface CaseMdxAnimatedBlockProps {
  mdxContent: string;
}

export default function CaseMdxAnimatedBlock({ mdxContent }: CaseMdxAnimatedBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
      className="glassmorphism rounded-2xl p-8 md:p-12 mb-10 shadow-elev-glow border border-cyber-lime/10"
    >
      <div className="mb-8 border-b border-cyber-lime/10 pb-6">
        <h2 className="text-3xl sm:text-4xl font-switzer font-bold gradient-text mb-2">Case Study Details</h2>
        <p className="text-steel text-lg">Full breakdown, insights & results</p>
      </div>
      <div className="prose prose-invert max-w-none prose-li:marker:text-cyber-lime prose-h2:gradient-text prose-h3:text-cyber-lime prose-strong:text-white prose-a:text-cyber-lime prose-blockquote:border-cyber-lime/40 prose-blockquote:text-steel prose-code:bg-onyx/60 prose-code:text-cyber-lime prose-pre:bg-onyx/80 prose-pre:text-cyber-lime prose-hr:border-cyber-lime/20">
        <MDXRemote source={mdxContent} />
      </div>
    </motion.article>
  );
} 