import React, { useState } from 'react';
import { QrCode, Moon, Sun, RotateCcw, Menu, X, ArrowUpRight } from 'lucide-react';
import { OverthinkLogo } from './OverthinkLogo';

interface NavbarProps {
  onOpenQr: () => void;
  onOpenSplash: () => void;
  isNightMode: boolean;
  onToggleNightMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQr,
  onOpenSplash,
  isNightMode,
  onToggleNightMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Hikayemiz', href: '#hikayemiz' },
    { label: '12 Parçalı Şablon', href: '#ilkeler-degerler' },
    { label: 'Think Box', href: '#think-box' },
    { label: 'Ekibimiz', href: '#ekibimiz' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-[#0a0059]/15 transition-colors duration-500 bg-[#fffdf1]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group cursor-pointer"
          aria-label="Overthink Agency Ana Sayfa"
        >
          <OverthinkLogo variant="navy-on-cream" size="md" showWordmark={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#0a0059]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:opacity-70 transition-opacity relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0a0059] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* QR Code Action Button */}
          <button
            onClick={onOpenQr}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#0a0059] text-xs font-bold text-[#0a0059] hover:bg-[#0a0059] hover:text-[#fffdf1] transition-all cursor-pointer shadow-xs"
            aria-label="Giriş Ekranı QR Kodunu Görüntüle"
            title="Giriş Ekranı QR Kodu"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">QR Kod</span>
          </button>

          {/* Re-enter Fullscreen Splash */}
          <button
            onClick={onOpenSplash}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#0a0059] text-[#fffdf1] text-xs font-bold hover:bg-[#0a0059]/90 active:scale-95 transition-all cursor-pointer shadow-sm"
            aria-label="Açılış Ekranına Dön"
            title="Açılış Ekranını Tekrar Başlat"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Açılış Ekranı</span>
          </button>

          {/* Gentle Day / Night Mode Toggle */}
          <button
            onClick={onToggleNightMode}
            className="p-2 sm:p-2.5 rounded-full border border-[#0a0059]/30 text-[#0a0059] hover:bg-[#0a0059]/10 transition-colors cursor-pointer"
            aria-label={isNightMode ? 'Gündüz Moduna Geç (Krem)' : 'Gece Moduna Geç (Lacivert)'}
            title={isNightMode ? 'Gündüz Modu (Krem Zemin)' : 'Gece Modu (Lacivert Zemin)'}
          >
            {isNightMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0a0059] hover:bg-[#0a0059]/10 transition-colors cursor-pointer"
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffdf1] border-b-2 border-[#0a0059] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-bold text-[#0a0059] hover:translate-x-1 transition-transform flex items-center justify-between py-1 border-b border-[#0a0059]/10"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQr();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#0a0059] text-xs font-bold text-[#0a0059]"
            >
              <QrCode className="w-4 h-4" />
              <span>Giriş Ekranı QR Kodunu Göster</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSplash();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0a0059] text-[#fffdf1] text-xs font-bold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Açılış Ekranını Tekrar Başlat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
