import React, { useEffect, useRef, useState } from 'react';
import { getRevealClassName, isElementInRevealZone } from '../utils/scrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  delayMs?: number;
  immediate?: boolean;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delayMs = 0,
  immediate = false,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [isVisible, setIsVisible] = useState<boolean>(immediate || prefersReducedMotion);
  const [isSettled, setIsSettled] = useState<boolean>(immediate || prefersReducedMotion);

  useEffect(() => {
    if (isVisible) {
      const timer = window.setTimeout(() => {
        setIsSettled(true);
      }, 750 + delayMs);
      return () => window.clearTimeout(timer);
    }
  }, [isVisible, delayMs]);

  useEffect(() => {
    if (isVisible) return;

    const el = ref.current;
    if (!el) return;

    const checkRect = () => {
      const rect = el.getBoundingClientRect();
      if (isElementInRevealZone(rect.top, window.innerHeight, 48)) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkRect()) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (
              entry.isIntersecting ||
              isElementInRevealZone(entry.boundingClientRect.top, window.innerHeight, 48)
            ) {
              setIsVisible(true);
              observer.disconnect();
              break;
            }
          }
        },
        {
          threshold: 0.04,
          rootMargin: '0px 0px -48px 0px',
        }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }

    const onScroll = () => {
      if (checkRect()) {
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isVisible]);

  const revealClasses = getRevealClassName(isVisible, isSettled);

  return (
    <div
      ref={ref}
      className={`${revealClasses} ${className}`.trim()}
      style={!isSettled && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
      onTransitionEnd={(e) => {
        if (e.target === ref.current && isVisible) {
          setIsSettled(true);
        }
      }}
    >
      {children}
    </div>
  );
};
