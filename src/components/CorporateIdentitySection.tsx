import React, { useState } from 'react';
import { BRAND_ASSETS, BrandAsset } from '../data/agencyData';
import { OverthinkLogo } from './OverthinkLogo';
import { Briefcase, Calendar, CreditCard, BatteryCharging, FileText, PenTool, Sparkles, CheckCircle2 } from 'lucide-react';

export const CorporateIdentitySection: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<BrandAsset | null>(null);

  const renderAssetVisual = (type: BrandAsset['mockupType']) => {
    switch (type) {
      case 'calendar':
        return (
          <div className="w-full h-44 bg-[#fffdf1] rounded-xl border-2 border-[#0a0059] p-3 flex flex-col justify-between shadow-sm relative overflow-hidden group-hover:scale-102 transition-transform">
            <div className="flex items-center justify-between border-b border-[#0a0059]/20 pb-2">
              <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={true} />
              <span className="text-[10px] font-bold text-[#0a0059]">2026 MASA TAKVİMİ</span>
            </div>
            {/* Calendar grid representation */}
            <div className="grid grid-cols-7 gap-1 text-[8px] text-center font-mono text-[#0a0059]/60">
              {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => (
                <span key={d} className="font-bold text-[#0a0059]">{d}</span>
              ))}
              {Array.from({ length: 28 }).map((_, i) => (
                <span key={i} className={`p-0.5 rounded ${i === 14 ? 'bg-[#0a0059] text-[#fffdf1] font-bold' : ''}`}>
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="text-[9px] text-center font-semibold text-[#0a0059]/75 bg-[#0a0059]/5 py-1 rounded">
              Think More, Connect Better.
            </div>
          </div>
        );
      case 'notebook':
        return (
          <div className="w-full h-44 bg-[#fffdf1] rounded-xl border-2 border-[#0a0059] p-4 flex flex-col justify-between shadow-sm relative group-hover:scale-102 transition-transform border-l-8 border-l-[#0a0059]">
            <div className="flex justify-end">
              <span className="text-[9px] font-mono uppercase text-[#0a0059]/70">Hardcover 14x21cm</span>
            </div>
            <div className="text-center my-auto">
              <OverthinkLogo variant="navy-on-cream" size="md" showWordmark={true} showSlogan={true} />
            </div>
            <div className="flex items-center justify-between text-[8px] text-[#0a0059]/60 border-t border-[#0a0059]/15 pt-2">
              <span>Kurumsal Not Defteri</span>
              <span>Krem Sayfalar</span>
            </div>
          </div>
        );
      case 'powerbank':
        return (
          <div className="w-full h-44 bg-[#fffdf1] rounded-2xl border-2 border-[#0a0059] p-4 flex flex-col items-center justify-between shadow-sm relative group-hover:scale-102 transition-transform">
            <div className="w-8 h-1 rounded-full bg-[#0a0059]/30" />
            {/* LED Circular Indicator with 12 spokes */}
            <div className="relative w-20 h-20 rounded-full border-2 border-[#0a0059] flex items-center justify-center p-2 bg-[#0a0059]/5">
              <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={false} animate={true} />
              <span className="absolute text-[8px] font-bold text-[#0a0059] bottom-1">100%</span>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-bold text-[#0a0059] block">Overthink Powerbank</span>
              <span className="text-[8px] text-[#0a0059]/70">10,000 mAh • USB-C Fast Charge</span>
            </div>
          </div>
        );
      case 'badge':
        return (
          <div className="w-full h-44 bg-[#fffdf1] rounded-xl border-2 border-[#0a0059] p-3 flex flex-col items-center justify-between shadow-sm relative group-hover:scale-102 transition-transform">
            {/* Lanyard strap */}
            <div className="w-12 h-3 bg-[#0a0059] rounded-b-md flex items-center justify-center -mt-3">
              <div className="w-3 h-1 bg-[#d5d2ca] rounded" />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#0a0059] text-[#fffdf1] flex items-center justify-center text-xs font-bold my-1">
              PRO
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-[#0a0059] block">Kurumsal Yaka Kartı</span>
              <span className="text-[9px] text-[#0a0059]/70">Overthink Agency Ekibi</span>
            </div>
            <div className="w-full flex justify-center border-t border-[#0a0059]/20 pt-1">
              <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={true} />
            </div>
          </div>
        );
      case 'card':
        return (
          <div className="w-full h-44 bg-[#fffdf1] rounded-xl border-2 border-[#0a0059] p-4 flex flex-col justify-between shadow-sm relative group-hover:scale-102 transition-transform">
            <div className="flex justify-between items-start">
              <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={true} />
              <span className="text-[8px] font-mono text-[#0a0059]/60">350gr Pamuklu</span>
            </div>
            <div className="space-y-0.5 text-left my-auto">
              <span className="text-xs font-bold text-[#0a0059] block">Kurumsal Kartvizit</span>
              <span className="text-[9px] text-[#0a0059]/70 block">info.overthinkagency@gmail.com</span>
              <span className="text-[9px] text-[#0a0059]/70 block">@overthinkagency_</span>
            </div>
            <div className="text-[8px] font-medium text-[#0a0059]/60 border-t border-[#0a0059]/20 pt-1">
              Think More, Connect Better.
            </div>
          </div>
        );
      case 'pen':
      default:
        return (
          <div className="w-full h-44 bg-[#fffdf1] rounded-xl border-2 border-[#0a0059] p-4 flex flex-col items-center justify-center shadow-sm relative group-hover:scale-102 transition-transform">
            {/* Pen graphic representation */}
            <div className="w-40 h-4 bg-gradient-to-r from-[#d5d2ca] via-[#fffdf1] to-[#0a0059] rounded-full border border-[#0a0059] shadow-sm flex items-center px-2 relative gap-0.5">
              <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={false} className="scale-[0.36] -ml-1.5 -mr-1.5" />
              <span className="text-[6px] font-mono text-[#0a0059] font-bold leading-none">verthink</span>
              <div className="w-2 h-2 rounded-full bg-[#0a0059] ml-auto" />
            </div>
            <div className="text-center mt-6">
              <span className="text-xs font-bold text-[#0a0059] block">Metal Kurumsal Kalem</span>
              <span className="text-[9px] text-[#0a0059]/70">Lazer Kazıma Logo & Ergonomik Gövde</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="kurumsal-kimlik" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Signature PDF Window Container */}
      <div className="rounded-3xl border-2 border-[#0a0059] bg-[#fffdf1] overflow-hidden shadow-xl">
        <div className="bg-[#0a0059] text-[#fffdf1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OverthinkLogo variant="cream-on-navy" size="sm" showWordmark={false} animate={true} />
            <h2 className="font-extrabold tracking-wider uppercase text-base sm:text-xl text-[#fffdf1]">
              KURUMSAL KİMLİK ÖĞELERİMİZ
            </h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#d5d2ca] font-semibold hidden sm:inline-block">
            Resmi Tasarım & Materyaller
          </span>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-2xl font-bold text-[#0a0059]">
              Fiziksel Dünyada Overthink Dokunuşu
            </h3>
            <p className="text-sm sm:text-base text-[#0a0059]/85 leading-relaxed">
              PDF kılavuzunun 13. sayfasında tanımlanan kurumsal kimlik unsurları; derin düşüncenin yalın estetiğini,
              krem zemin ve lacivert ton uyumunu günlük iş yaşamına taşır.
            </p>
          </div>

          {/* 6 Assets Grid from PDF Page 13 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND_ASSETS.map((asset) => (
              <div
                key={asset.id}
                onClick={() => setSelectedAsset(asset)}
                className="p-5 rounded-2xl border-2 border-[#0a0059]/20 hover:border-[#0a0059] bg-[#fffdf1] shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#0a0059]/10 text-[#0a0059]">
                      {asset.category}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#0a0059]/40 group-hover:text-[#0a0059] transition-colors" />
                  </div>

                  <div className="mb-4">
                    {renderAssetVisual(asset.mockupType)}
                  </div>

                  <h4 className="text-base font-bold text-[#0a0059] group-hover:underline">
                    {asset.name}
                  </h4>
                  <p className="text-xs text-[#0a0059]/80 mt-1 leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-[#0a0059]/10 flex items-center justify-between text-[11px] font-bold text-[#0a0059]">
                  <span>Özellikleri İncele</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Asset Modal */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0059]/65 backdrop-blur-xs"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="bg-[#fffdf1] border-2 border-[#0a0059] rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#0a0059]/20 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0a0059]/60">
                  {selectedAsset.category}
                </span>
                <h4 className="text-xl font-bold text-[#0a0059]">{selectedAsset.name}</h4>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="w-7 h-7 rounded bg-[#0a0059] text-[#fffdf1] flex items-center justify-center font-bold text-xs"
              >
                ✕
              </button>
            </div>

            <div>{renderAssetVisual(selectedAsset.mockupType)}</div>

            <p className="text-sm text-[#0a0059] leading-relaxed">
              {selectedAsset.description}
            </p>

            <div className="p-3 rounded-xl bg-[#0a0059]/5 border border-[#0a0059]/10 text-xs text-[#0a0059]/80 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0a0059]" />
                <span>Kurumsal Renkler: #0a0059 (Lacivert) & #fffdf1 (Krem)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0a0059]" />
                <span>Tipografi Standardı: Arimo Regular / Bold</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedAsset(null)}
              className="w-full py-2.5 rounded-full bg-[#0a0059] text-[#fffdf1] text-xs font-bold uppercase tracking-wider hover:bg-[#0a0059]/90 transition-all cursor-pointer"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
