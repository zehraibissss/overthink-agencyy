import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { OverthinkLogo } from './OverthinkLogo';

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [pulseClick, setPulseClick] = useState(false);

  const handleEnterSite = () => {
    setPulseClick(true);
    setIsFadingOut(true);
    setTimeout(() => {
      onEnter();
    }, 550);
  };

  // Keyboard accessibility: pressing Enter or Space enters the site
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleEnterSite();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between items-center bg-[#0a0059] text-[#fffdf1] p-6 sm:p-12 transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Overthink Agency Giriş Ekranı"
    >
      {/* Subtle background ambient decorations mimicking the PDF curved dash arcs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute -top-32 -left-32 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="240"
            stroke="#fffdf1"
            strokeWidth="3"
            strokeDasharray="12 12"
          />
          <circle
            cx="300"
            cy="300"
            r="160"
            stroke="#d5d2ca"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>

        <svg
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px]"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="300"
            stroke="#fffdf1"
            strokeWidth="3"
            strokeDasharray="16 16"
          />
        </svg>
      </div>

      {/* Top bar info */}
      <header className="w-full max-w-5xl flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fffdf1] animate-ping" />
          <span className="text-xs tracking-widest uppercase font-semibold text-[#d5d2ca]">
            Kurumsal İletişim & Strateji
          </span>
        </div>
        <div className="text-xs text-[#d5d2ca] tracking-wider hidden sm:block">
          Overthink Agency © 2026
        </div>
      </header>

      {/* Center Interactive Hub: Authentic Rotating Loading Logo & Core Message */}
      <main className="flex flex-col items-center justify-center text-center my-auto z-10 max-w-2xl px-4">
        {/* Clickable emblem button with tooltip */}
        <button
          onClick={handleEnterSite}
          className={`group relative p-8 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#d5d2ca]/40 cursor-pointer ${
            pulseClick ? 'scale-110' : ''
          }`}
          title="Keşfetmek için dokunun"
          aria-label="Siteye girmek için loading logosuna tıklayın"
        >
          {/* Subtle glowing ring aura */}
          <div className="absolute inset-0 rounded-full bg-[#fffdf1]/5 group-hover:bg-[#fffdf1]/10 blur-xl transition-all duration-500" />
          
          {/* Central Authentic 12-Spoke Rotating Spinner */}
          <div className="relative">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              className="animate-spin-step filter drop-shadow-[0_0_12px_rgba(255,253,241,0.25)]"
              aria-hidden="true"
            >
              {[1.0, 0.92, 0.82, 0.72, 0.60, 0.48, 0.36, 0.26, 0.18, 0.25, 0.45, 0.75].map((op, i) => (
                <rect
                  key={i}
                  x="46"
                  y="10"
                  width="8"
                  height="22"
                  rx="4"
                  fill="#fffdf1"
                  opacity={op}
                  transform={`rotate(${i * 30} 50 50)`}
                />
              ))}
            </svg>
          </div>

          <span className="block mt-4 text-sm tracking-widest text-[#d5d2ca] group-hover:text-[#fffdf1] transition-colors font-medium">
            Loading
          </span>
        </button>

        {/* Short Agency Message */}
        <div className="mt-4 space-y-4 flex flex-col items-center">
          <h1 className="sr-only">Overthink Agency</h1>
          <OverthinkLogo
            variant="cream-on-navy"
            size="lg"
            showWordmark={true}
            showSlogan={false}
          />

          <p className="text-sm sm:text-base text-[#d5d2ca] max-w-xl leading-relaxed mx-auto">
            İyi iletişim, düşünmeyi bıraktığımız yerde değil;
            <br />
            <strong className="text-[#fffdf1] font-semibold">
              daha fazlasını düşünmeye başladığımız yerde ortaya çıkıyor.
            </strong>
          </p>
        </div>

        {/* Keşfet Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleEnterSite}
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#fffdf1] text-[#0a0059] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:bg-[#d5d2ca] hover:shadow-xl active:scale-95 transition-all duration-300 group cursor-pointer"
            aria-label="Keşfet butonuna basarak web sitesini açın"
          >
            <span>Kurumu Keşfet</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-[11px] text-[#d5d2ca]/70 mt-4">
          Logoya veya keşfet butonuna dokunarak doğrudan kurumsal portala geçiş yapabilirsiniz.
        </p>
      </main>

      {/* Bottom Bar: Signature Quote from PDF Page 1 */}
      <footer className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#fffdf1]/10 pt-4 z-10">
        <div className="text-xs text-[#d5d2ca]/80 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#fffdf1]" />
          <span>Derin Düşünce • Stratejik İletişim • Kurumsal Etki</span>
        </div>

        {/* Quote in Caveat font with authentic quotation marks as in PDF page 1 */}
        <div className="relative pl-6 pr-2 py-1 border-l-2 border-[#fffdf1]/30">
          <span className="font-quote text-xl sm:text-2xl text-[#fffdf1] tracking-wide">
            “Think More, Connect Better.”
          </span>
        </div>
      </footer>
    </div>
  );
};
