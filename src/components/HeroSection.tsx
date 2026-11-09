import React from 'react';
import { Sparkles, QrCode, Layers } from 'lucide-react';
import { OverthinkLogo } from './OverthinkLogo';

interface HeroSectionProps {
  onOpenQr: () => void;
  onOpenSplash: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQr, onOpenSplash }) => {
  const scrollToWheel = () => {
    const target = document.getElementById('ilkeler-degerler');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToThinkBox = () => {
    const target = document.getElementById('think-box');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative dashed arc curves from PDF Page 2 & 18 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-25">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
          <circle cx="450" cy="50" r="320" stroke="#0a0059" strokeWidth="2.5" strokeDasharray="14 14" />
          <circle cx="450" cy="50" r="220" stroke="#0a0059" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-20">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle cx="50" cy="350" r="260" stroke="#0a0059" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      {/* Hero Body */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

        {/* Big Authentic Logo from PDF Page 2 */}
        <div className="py-2">
          <OverthinkLogo
            variant="navy-on-cream"
            size="hero"
            showWordmark={true}
            showSlogan={true}
          />
        </div>

        {/* Headline & Narrative */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#0a0059] leading-snug">
            Derin düşünmeyi bir kusur değil, kurumlar için stratejik bir avantaja dönüştürüyoruz.
          </p>

          <p className="text-sm sm:text-base text-[#0a0059]/80 leading-relaxed max-w-xl mx-auto">
            İletişimde mesele yalnızca ne söylediğiniz değil; söylediğiniz şeyin kurumunuzun hedef kitlesinde nasıl bir duygu ve güven bağı bırakacağıdır.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            onClick={scrollToWheel}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0a0059] text-[#fffdf1] font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:bg-[#0a0059]/90 active:scale-95 transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>12 Parçalı Dönen Şablonu Aç</span>
          </button>

          <button
            onClick={scrollToThinkBox}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#0a0059] text-[#0a0059] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#0a0059]/5 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Think Box – Fikir Kutusu</span>
          </button>

          <button
            onClick={onOpenQr}
            className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#0a0059]/5 border border-[#0a0059]/20 text-[#0a0059] font-bold text-xs sm:text-sm hover:bg-[#0a0059]/10 transition-all cursor-pointer"
            title="Giriş Ekranı QR Kodunu Göster"
          >
            <QrCode className="w-4 h-4" />
            <span>QR Kod</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-[#0a0059]/15 text-left">
          <div className="p-4 rounded-xl bg-[#0a0059]/5 border border-[#0a0059]/10">
            <span className="text-2xl font-extrabold text-[#0a0059] block">12</span>
            <span className="text-xs font-semibold text-[#0a0059]/80">Loading Çizgisi & İlke/Değer</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0059]/5 border border-[#0a0059]/10">
            <span className="text-2xl font-extrabold text-[#0a0059] block">5</span>
            <span className="text-xs font-semibold text-[#0a0059]/80">Pastel Think Box Kategorisi</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0059]/5 border border-[#0a0059]/10">
            <span className="text-2xl font-extrabold text-[#0a0059] block">10</span>
            <span className="text-xs font-semibold text-[#0a0059]/80">Uzman Ekip Üyesi</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0059]/5 border border-[#0a0059]/10">
            <span className="text-2xl font-extrabold text-[#0a0059] block">1</span>
            <span className="text-xs font-semibold text-[#0a0059]/80">Hedef: Güvene Dayalı İletişim</span>
          </div>
        </div>
      </div>
    </section>
  );
};
