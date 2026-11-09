import React from 'react';
import { Mail, Instagram, ArrowUp } from 'lucide-react';
import { OverthinkLogo } from './OverthinkLogo';
import { AGENCY_DETAILS } from '../data/agencyData';

interface FooterProps {
  onOpenQr: () => void;
  onOpenSplash: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQr, onOpenSplash }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#0a0059]/15 bg-[#fffdf1] transition-colors duration-500 pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Segment: Brand & Contact Info from PDF Page 17 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-6 space-y-4">
            <OverthinkLogo variant="navy-on-cream" size="lg" showWordmark={true} showSlogan={true} />
            <p className="text-xs sm:text-sm text-[#0a0059]/80 max-w-md leading-relaxed">
              İletişimde mesele yalnızca bir şey söylemek değil, söylediğiniz şeyin karşı tarafta ne etki yaratacağını bilmektir.
              Kurumsal kimlik ve stratejik iletişim ajansı.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row gap-6 md:justify-end">
            {/* Contact Card (PDF Page 17: SOSYAL MEDYA HESAPLARIMIZ) */}
            <div className="p-5 rounded-2xl bg-[#0a0059]/5 border border-[#0a0059]/20 space-y-3 min-w-[260px]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0a0059]/60 block">
                Sosyal Medya & İletişim
              </span>

              <a
                href={AGENCY_DETAILS.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0a0059] hover:underline"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0a0059] text-[#fffdf1] flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@{AGENCY_DETAILS.contact.instagram}</span>
              </a>

              <a
                href={`mailto:${AGENCY_DETAILS.contact.email}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0a0059] hover:underline"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0a0059] text-[#fffdf1] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{AGENCY_DETAILS.contact.email}</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col justify-between py-1">
              <button
                onClick={onOpenQr}
                className="text-left text-xs font-bold text-[#0a0059] hover:underline flex items-center gap-1.5"
              >
                <span>Giriş Ekranı QR Kod</span>
              </button>
              <button
                onClick={onOpenSplash}
                className="text-left text-xs font-bold text-[#0a0059] hover:underline flex items-center gap-1.5"
              >
                <span>Açılış Ekranını Gör</span>
              </button>
              <button
                onClick={scrollToTop}
                className="text-left text-xs font-bold text-[#0a0059] hover:underline flex items-center gap-1.5"
              >
                <span>Başa Dön</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#0a0059]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0a0059]/70">
          <span>
            © 2026 Overthink Agency. Tüm hakları saklıdır.
          </span>
          <span className="flex items-center gap-1">
            Resmi Kurumsal Kimlik Kılavuzuna Göre Hazırlanmıştır.
          </span>
        </div>
      </div>
    </footer>
  );
};
