/* eslint-disable no-nested-ternary */
'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Быстрое, но плавное движение курсора
  const springConfig = { damping: 18, stiffness: 180, mass: 0.3 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    // DEBUG: log mouse position

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // WOW: scale up on interactive elements
    const handlePointerOver = (_e: MouseEvent) => {
      if ((
        (_e.target as HTMLElement)?.closest(
          'button, a, input, textarea, [role="button"], [tabindex]',
        )
      )) {
        setIsActive(true);
      }
    };
    const handlePointerOut = (_e: MouseEvent) => {
      setIsActive(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handlePointerOver);
    window.addEventListener('mouseout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handlePointerOver);
      window.removeEventListener('mouseout', handlePointerOut);
    };
  }, []);

  // Обновляем motion value при изменении mousePosition
  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition.x, mousePosition.y, cursorX, cursorY]);

  // For scale/opacity ternary at L68, extract to variables:
  const scale = isVisible ? (isActive ? 1.6 : 1) : 0;
  const opacity = isVisible ? 1 : 0;

  return (
    <motion.div
      className="custom-cursor z-50 pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale,
        opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 18,
        mass: 0.3,
      }}
    >
      <div className="cursor-glow" />
    </motion.div>
  );
}
