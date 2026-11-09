import React, { useEffect, useState } from 'react';
import { calculateScrollProgress } from '../utils/scrollProgress';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      const docEl = document.documentElement;
      const scrollY = window.scrollY || docEl.scrollTop || 0;
      const next = calculateScrollProgress(scrollY, docEl.scrollHeight, window.innerHeight);
      setProgress(next);
      frameId = null;
    };

    const handleScrollOrResize = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const percentage = Math.round(progress * 100);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[45] h-[3px] bg-[#0a0059]/10 pointer-events-none"
      role="progressbar"
      aria-label="Sayfa kaydırma ilerlemesi"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
    >
      <div
        className="h-full w-full bg-[#0a0059] origin-left transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
