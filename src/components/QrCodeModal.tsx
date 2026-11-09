import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { QrCode, Copy, Check, Download, ExternalLink, X, Smartphone, Sparkles } from 'lucide-react';
import { OverthinkLogo } from './OverthinkLogo';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToSplash?: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose, onGoToSplash }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [targetUrl, setTargetUrl] = useState<string>('');

  useEffect(() => {
    // Current web origin or window.location.href
    const currentUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : 'https://overthinkagency.com';
    
    setTargetUrl(currentUrl);

    // Generate crisp QR code
    QRCode.toDataURL(currentUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: '#0a0059', // Brand Navy
        light: '#fffdf1', // Brand Cream
      },
      errorCorrectionLevel: 'H'
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR code generation error:', err));
  }, [isOpen]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = 'overthink-agency-qr.png';
    link.href = qrDataUrl;
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0059]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#fffdf1] rounded-2xl border-2 border-[#0a0059] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navy Window Header */}
        <div className="bg-[#0a0059] text-[#fffdf1] px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <QrCode className="w-5 h-5 text-[#fffdf1]" />
            <h3 id="qr-modal-title" className="font-bold tracking-wider uppercase text-sm sm:text-base text-[#fffdf1]">
              Giriş Ekranı QR Kodu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded bg-[#fffdf1] text-[#0a0059] flex items-center justify-center hover:bg-[#d5d2ca] transition-colors font-bold cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0a0059]/60">
              Doğrudan Erişim
            </span>
            <h4 className="text-xl font-extrabold text-[#0a0059]">
              Overthink Agency Web Portalı
            </h4>
            <p className="text-xs text-[#0a0059]/75 max-w-xs mx-auto">
              Akıllı telefonunuzun kamerasıyla tarayarak web sitemizin tam ekran açılış ekranına doğrudan ulaşın.
            </p>
          </div>

          {/* QR Container */}
          <div className="p-4 bg-[#fffdf1] rounded-2xl border-2 border-[#0a0059] shadow-inner relative group">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="Overthink Agency Giriş Ekranı QR Kodu"
                className="w-52 h-52 object-contain rounded-lg"
              />
            ) : (
              <div className="w-52 h-52 flex items-center justify-center">
                <OverthinkLogo variant="navy-on-cream" size="md" showWordmark={false} animate={true} />
              </div>
            )}

            {/* Center Logo Watermark in QR code */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="p-1.5 rounded-full bg-[#fffdf1] border border-[#0a0059]/30 shadow-xs">
                <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={false} />
              </div>
            </div>
          </div>

          {/* Target URL Preview */}
          <div className="w-full bg-[#0a0059]/5 border border-[#0a0059]/15 rounded-xl p-3 flex items-center justify-between gap-2 text-left">
            <span className="text-xs font-mono text-[#0a0059] truncate">
              {targetUrl}
            </span>
            <button
              onClick={handleCopyLink}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0059] text-[#fffdf1] text-xs font-bold hover:bg-[#0a0059]/90 active:scale-95 transition-all cursor-pointer"
              title="Bağlantıyı Kopyala"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3 w-full pt-1">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#0a0059] text-[#0a0059] text-xs font-bold hover:bg-[#0a0059]/5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>QR İndir</span>
            </button>

            {onGoToSplash && (
              <button
                onClick={() => {
                  onClose();
                  onGoToSplash();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0a0059] text-[#fffdf1] text-xs font-bold hover:bg-[#0a0059]/90 transition-all cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Girişi Aç</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
