import React, { useEffect } from 'react';
import { X, Quote, CheckCircle2, Compass } from 'lucide-react';
import { OverthinkLogo } from './OverthinkLogo';

interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  category?: 'ilke' | 'deger' | 'bilgi' | 'fikir';
  children: React.ReactNode;
  quote?: string;
}

export const CorporateModal: React.FC<CorporateModalProps> = ({
  isOpen,
  onClose,
  title,
  badge,
  category = 'bilgi',
  children,
  quote
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0059]/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="corporate-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#fffdf1] rounded-xl overflow-hidden shadow-2xl border-2 border-[#0a0059] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Signature PDF-Style Navy Window Titlebar */}
        <div className="bg-[#0a0059] text-[#fffdf1] px-5 py-3.5 flex items-center justify-between select-none border-b border-[#0a0059]">
          <div className="flex items-center gap-3">
            <OverthinkLogo variant="cream-on-navy" size="sm" showWordmark={false} animate={true} />
            <div className="flex items-center gap-2">
              <span
                id="corporate-modal-title"
                className="font-bold tracking-wider uppercase text-sm sm:text-base text-[#fffdf1]"
              >
                {title}
              </span>
              {badge && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#fffdf1] text-[#0a0059]">
                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* Crisp X Close Button from PDF */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-[#fffdf1] text-[#0a0059] flex items-center justify-center hover:bg-[#d5d2ca] active:scale-90 transition-all font-bold cursor-pointer"
            aria-label="Pencereyi kapat"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body in Cream Background */}
        <div className="p-6 sm:p-8 overflow-y-auto text-[#0a0059] space-y-5">
          {children}

          {quote && (
            <div className="relative mt-6 p-4 sm:p-5 rounded-lg bg-[#0a0059]/5 border-l-4 border-[#0a0059]">
              <Quote className="w-5 h-5 text-[#0a0059]/40 mb-1" />
              <p className="font-quote text-xl sm:text-2xl text-[#0a0059] leading-snug">
                “{quote}”
              </p>
              <span className="block mt-2 text-xs font-semibold uppercase tracking-wider text-[#0a0059]/70">
                Overthink Agency İlkeleri
              </span>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#0a0059]/5 border-t border-[#0a0059]/10 flex items-center justify-between text-xs text-[#0a0059]/70">
          <span className="font-medium">Think More, Connect Better.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#0a0059] text-[#fffdf1] text-xs font-bold hover:bg-[#0a0059]/90 transition-colors cursor-pointer"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};
