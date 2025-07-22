/* eslint-disable no-plusplus, consistent-return, @typescript-eslint/no-use-before-define, max-len, no-multi-assign */

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Download } from 'lucide-react';

// GlowButton with ripple effect
import Link from 'next/link';

// Dynamic mesh background component
function DynamicMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Simple animated mesh effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 3; i++) {
        const cx = width * (0.2 + 0.3 * i + 0.1 * Math.sin(frame / 80 + i));
        const cy = height * (0.3 + 0.3 * i + 0.1 * Math.cos(frame / 100 + i));
        const r = 220 + 40 * Math.sin(frame / (60 + 20 * i));
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, i === 1 ? '#6AE3FF' : '#CBFF4D');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      frame += 1;
      requestAnimationFrame(draw);
    }
    draw();
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-onyx to-charcoal z-0">
        <DynamicMeshBackground />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-lime/10 border border-cyber-lime/20 text-cyber-lime text-sm font-medium mb-8"
          variants={itemVariants}
        >
          <span className="w-2 h-2 bg-cyber-lime rounded-full mr-2 animate-pulse" />
          Hi, I&apos;m Sergei Suvorin: Fullstack & AI Developer
        </motion.div>
        {/* Main Headline with parallax tilt */}
        <ParallaxHeadline>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-switzer font-bold text-white mb-6 leading-tight drop-shadow-[0_0_32px_#CBFF4D88]"
            variants={itemVariants}
          >
            Fullstack Development
            {' '}
            <br />
            &
            {' '}
            <span className="gradient-text">AI Solutions</span>
          </motion.h1>
        </ParallaxHeadline>
        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl text-steel mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Web, backend, and AI automation for startups and businesses: from idea to launch I build robust products and integrate the latest AI
          {' '}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <GlowButton
            href="https://wa.me/971585172288?text=Hi%20Suvorin%2C%20need%20AI%20automation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <span className="flex items-center justify-center">
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </GlowButton>
          <GlowButton
            href="#contact"
            className="btn-secondary group"
          >
            <span className="flex items-center justify-center">
              Get Deck
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </GlowButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-steel rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-lime rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

// Parallax headline component (tilt только при наведении)
function ParallaxHeadline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.transform = `perspective(900px) rotateY(${-x * 6}deg) rotateX(${y * 4}deg)`;
  }
  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.5s cubic-bezier(.23,1.02,.32,1)';
    el.style.transform = '';
    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 500);
  }
  return (
    <div
      ref={ref}
      className="transition-transform will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
function GlowButton({ children, className = '', ...props }: any) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const handleClick = useCallback((e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const circle = document.createElement('span');
    circle.className = 'ripple';
    const size = Math.max(btn.offsetWidth, btn.offsetHeight);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.nativeEvent.offsetX - size / 2}px`;
    circle.style.top = `${e.nativeEvent.offsetY - size / 2}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }, []);
  return (
    <Link ref={btnRef} {...props} className={`${className} relative overflow-hidden glow-btn`} onClick={handleClick}>
      {children}
    </Link>
  );
}
