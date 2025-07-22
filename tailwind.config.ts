import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0F1014',
        },
        onyx: {
          DEFAULT: '#1A1C22',
        },
        'cyber-lime': {
          DEFAULT: '#CBFF4D',
        },
        electric: {
          DEFAULT: '#6AE3FF',
        },
        steel: {
          DEFAULT: '#8C8F9A',
        },
      },
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        md: '0.75rem',
        xl: '1.5rem',
      },
      boxShadow: {
        'elev-soft': '0 4px 12px rgba(0,0,0,.25)',
        'elev-glow': '0 0 16px rgba(203,255,77,.45)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-my',
        'slide-up': 'slideUp 0.8s ease-my',
        'scale-in': 'scaleIn 0.4s ease-my',
        'glow-pulse': 'glowPulse 2s ease-in-my infinite',
        noise: 'noise 0.2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(203,255,77,.45)' },
          '50%': { boxShadow: '0 0 24px rgba(203,255,77,.65)' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0%)' },
          '70%': { transform: 'translate(0%,10%)' },
          '80%': { transform: 'translate(-15%,0%)' },
          '90%': { transform: 'translate(10%,5%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    forms,
    typography,
    animate,
  ],
};

export default config;
