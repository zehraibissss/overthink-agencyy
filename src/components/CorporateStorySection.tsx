import React, { useState } from 'react';
import { AGENCY_DETAILS } from '../data/agencyData';
import { OverthinkLogo } from './OverthinkLogo';
import { Target, Compass, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CorporateStorySection: React.FC = () => {
  const [isStoryExpanded, setIsStoryExpanded] = useState<boolean>(false);

  return (
    <section id="hikayemiz" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. OVERTHINK'İN HİKAYESİ (Signature Window from PDF Page 4) */}
      <div className="rounded-3xl border-2 border-[#0a0059] bg-[#fffdf1] overflow-hidden shadow-xl">
        <div className="bg-[#0a0059] text-[#fffdf1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OverthinkLogo variant="cream-on-navy" size="sm" showWordmark={false} animate={true} />
            <h2 className="font-extrabold tracking-wider uppercase text-base sm:text-xl text-[#fffdf1]">
              OVERTHINK’İN HİKAYESİ
            </h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#d5d2ca] font-semibold hidden sm:inline-block">
            Kurumsal Felsefe
          </span>
        </div>

        <div className="p-6 sm:p-10 space-y-6 text-[#0a0059]">
          <div className="max-w-4xl space-y-4 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-xl text-[#0a0059]">
              {AGENCY_DETAILS.story.paragraphs[0]}
            </p>
            <p>
              {AGENCY_DETAILS.story.paragraphs[1]}
            </p>
            <p className="p-4 rounded-xl bg-[#0a0059]/5 border-l-4 border-[#0a0059] font-medium">
              {AGENCY_DETAILS.story.paragraphs[2]}
            </p>

            {/* Collapsible / Expandable Full Story to keep page balanced or view in full */}
            {isStoryExpanded ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                {AGENCY_DETAILS.story.paragraphs.slice(3).map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-[#0a0059]/90">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#0a0059]/75 italic">
                {AGENCY_DETAILS.story.paragraphs[3]}
              </p>
            )}
          </div>

          <button
            onClick={() => setIsStoryExpanded(!isStoryExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0a0059] text-xs font-bold uppercase tracking-wider text-[#0a0059] hover:bg-[#0a0059] hover:text-[#fffdf1] transition-all cursor-pointer"
          >
            {isStoryExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Daha Az Göster</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>Hikayenin Tamamını Oku (PDF Kılavuzu)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. MİSYONUMUZ & VİZYONUMUZ (Two Windows side by side as in PDF Page 7) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Misyon Window */}
        <ScrollReveal className="flex">
          <div className="rounded-3xl border-2 border-[#0a0059] bg-[#fffdf1] overflow-hidden shadow-lg flex flex-col w-full">
            <div className="bg-[#0a0059] text-[#fffdf1] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#fffdf1]" />
                <h3 className="font-extrabold tracking-wider uppercase text-sm sm:text-base text-[#fffdf1]">
                  {AGENCY_DETAILS.mission.title}
                </h3>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#d5d2ca] font-mono">
                Misyon
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm sm:text-base text-[#0a0059] leading-relaxed">
                {AGENCY_DETAILS.mission.text}
              </p>
              <div className="p-3.5 rounded-xl bg-[#0a0059]/5 border-l-2 border-[#0a0059] text-xs text-[#0a0059]/80 font-medium">
                Kurumların özgün biçimde ifade bulması ve toplumla güvene dayalı sürdürülebilir bağlar.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Vizyon Window */}
        <ScrollReveal delayMs={120} className="flex">
          <div className="rounded-3xl border-2 border-[#0a0059] bg-[#fffdf1] overflow-hidden shadow-lg flex flex-col w-full">
            <div className="bg-[#0a0059] text-[#fffdf1] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Target className="w-4 h-4 text-[#fffdf1]" />
                <h3 className="font-extrabold tracking-wider uppercase text-sm sm:text-base text-[#fffdf1]">
                  {AGENCY_DETAILS.vision.title}
                </h3>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#d5d2ca] font-mono">
                Vizyon
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm sm:text-base text-[#0a0059] leading-relaxed">
                {AGENCY_DETAILS.vision.text}
              </p>
              <div className="p-3.5 rounded-xl bg-[#0a0059]/5 border-l-2 border-[#0a0059] text-xs text-[#0a0059]/80 font-medium">
                Fazla düşünmeyi kusur değil, stratejik bir avantaja dönüştürerek iz bırakan bir ajans.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
