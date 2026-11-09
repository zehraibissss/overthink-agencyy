import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveValuesWheel } from './components/InteractiveValuesWheel';
import { ThinkBoxSection } from './components/ThinkBoxSection';
import { CorporateStorySection } from './components/CorporateStorySection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { QrCodeModal } from './components/QrCodeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  // Check if URL has ?autostart=1 to bypass splash (e.g. automated tests or direct bookmark)
  const [showSplash, setShowSplash] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('autostart') !== '1';
    }
    return true;
  });

  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  // Smooth scroll behavior on mount
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ease-in-out font-sans ${
        isNightMode ? 'bg-[#0a0059] text-[#fffdf1]' : 'bg-[#fffdf1] text-[#0a0059]'
      }`}
    >
      {/* Top Corporate Navy Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Full-screen Navy Opening Loading Splash Screen */}
      {showSplash && (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      )}

      {/* 2. Main Website Navbar */}
      <Navbar
        onOpenQr={() => setIsQrModalOpen(true)}
        onOpenSplash={() => setShowSplash(true)}
        isNightMode={isNightMode}
        onToggleNightMode={() => setIsNightMode(!isNightMode)}
      />

      {/* 3. Main Content Sections strictly in corporate cream and navy */}
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <ScrollReveal immediate>
          <HeroSection
            onOpenQr={() => setIsQrModalOpen(true)}
            onOpenSplash={() => setShowSplash(true)}
          />
        </ScrollReveal>

        {/* 12-Segment Rotating Values & Principles Spoke Wheel */}
        <ScrollReveal>
          <InteractiveValuesWheel />
        </ScrollReveal>

        {/* Think Box - Fikir Kutusu with 5 pastel card categories */}
        <ScrollReveal>
          <ThinkBoxSection />
        </ScrollReveal>

        {/* Kurumsal Hikaye, Misyon & Vizyon */}
        <ScrollReveal>
          <CorporateStorySection />
        </ScrollReveal>

        {/* Ekibimiz (10 members framed in loading rings) */}
        <ScrollReveal>
          <TeamSection />
        </ScrollReveal>
      </main>

      {/* 4. Footer with Social Media */}
      <ScrollReveal>
        <Footer
          onOpenQr={() => setIsQrModalOpen(true)}
          onOpenSplash={() => setShowSplash(true)}
        />
      </ScrollReveal>

      {/* 5. QR Code Modal for Direct Access to Entry Splash */}
      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        onGoToSplash={() => {
          setIsQrModalOpen(false);
          setShowSplash(true);
        }}
      />
    </div>
  );
}
