import React, { useState } from 'react';
import { Eye, Users, Search, Sparkles, MessageCircle, Shuffle, ChevronRight, HelpCircle } from 'lucide-react';
import { THINK_BOX_CATEGORIES, ThinkBoxCategory } from '../data/agencyData';
import { OverthinkLogo } from './OverthinkLogo';

export const ThinkBoxSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('farkli-bak');
  const [drawnCard, setDrawnCard] = useState<{ category: ThinkBoxCategory; prompt: string } | null>(null);
  const [userIdea, setUserIdea] = useState<string>('');
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  const activeCategory = THINK_BOX_CATEGORIES.find((c) => c.id === activeCategoryId) || THINK_BOX_CATEGORIES[0];

  // Draw random question card
  const handleDrawCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const randomCat = THINK_BOX_CATEGORIES[Math.floor(Math.random() * THINK_BOX_CATEGORIES.length)];
      const randomPrompt = randomCat.cardPrompts[Math.floor(Math.random() * randomCat.cardPrompts.length)];
      setDrawnCard({ category: randomCat, prompt: randomPrompt });
      setIsFlipping(false);
    }, 280);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'MessageCircle':
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="think-box" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Signature PDF Window Container */}
      <div className="rounded-3xl border-2 border-[#0a0059] bg-[#fffdf1] overflow-hidden shadow-2xl">
        {/* Navy Window Top Bar */}
        <div className="bg-[#0a0059] text-[#fffdf1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OverthinkLogo variant="cream-on-navy" size="sm" showWordmark={false} animate={true} />
            <h2 className="font-extrabold tracking-wider uppercase text-base sm:text-xl text-[#fffdf1]">
              THINK BOX – FİKİR KUTUSU
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#d5d2ca] font-semibold">
            Yaratıcı Düşünme Aracı
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Authentic Description from PDF Page 14 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#0a0059]/15 pb-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0a0059]/70">
                Stratejik İletişim Metodolojisi
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0059] leading-tight">
                Daha iyi fikirler için, farklı açılardan düşün.
              </h3>
              <p className="text-sm sm:text-base text-[#0a0059]/90 leading-relaxed">
                Overthink Agency olarak iletişimde yalnızca ne söylendiğini değil, söylenenin nasıl algılanacağını
                ve nasıl bir etki yaratacağını da düşünüyoruz. <strong>Think Box</strong>, bu yaklaşımımızı
                somutlaştırdığımız yaratıcı bir düşünme aracıdır.
              </p>
              <p className="text-sm sm:text-base text-[#0a0059]/90 leading-relaxed">
                Halkla ilişkiler ve iletişim alanında farklı bakış açıları geliştirmek, fikirleri sorgulamak ve yaratıcı
                çözümler üretmek amacıyla tasarladığımız Think Box, beş farklı kategoriden oluşuyor:
                <em> Farklı Bak, Hedef Kitleni Anla, Sorgula, Yeniden Tasarla ve Bağ Kur.</em>
              </p>
            </div>

            {/* Interactive Draw Card Box Widget */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className={`w-full max-w-sm rounded-2xl p-6 border-2 transition-all duration-300 shadow-md ${
                  drawnCard ? 'border-[#0a0059]' : 'border-[#0a0059]/30 bg-[#0a0059]/5'
                }`}
                style={{
                  backgroundColor: drawnCard ? drawnCard.category.bgLight : undefined,
                  borderColor: drawnCard ? drawnCard.category.borderLight : undefined
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a0059]">
                    {drawnCard ? drawnCard.category.name : 'Think Box Kartı'}
                  </span>
                  <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={false} />
                </div>

                <div className={`min-h-[110px] flex items-center justify-center text-center p-2 transition-all ${
                  isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  <p className="text-base sm:text-lg font-bold text-[#0a0059] leading-snug">
                    {drawnCard
                      ? `“${drawnCard.prompt}”`
                      : '“Bir kampanya fikriniz mi var? Düşünceyi derinleştirecek rastgele bir kart çekin.”'}
                  </p>
                </div>

                <button
                  onClick={handleDrawCard}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0a0059] text-[#fffdf1] font-bold text-xs uppercase tracking-wider hover:bg-[#0a0059]/90 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  <Shuffle className="w-4 h-4" />
                  <span>{drawnCard ? 'Başka Bir Soru Çek' : 'Fikir Kartı Çek'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* 5 Categories Tabs matching PDF pastel cards */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-xl font-bold text-[#0a0059]">
                  5 Özel Pastel Kategori
                </h4>
                <p className="text-xs sm:text-sm text-[#0a0059]/75">
                  Her kategori, kurumsal iletişimin farklı bir stratejik boyutuna odaklanan sorular içerir.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {THINK_BOX_CATEGORIES.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className="p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-28 relative group"
                    style={{
                      backgroundColor: cat.bgLight,
                      borderColor: isActive ? '#0a0059' : cat.borderLight,
                      transform: isActive ? 'scale(1.03)' : 'scale(1)',
                      boxShadow: isActive ? '0 10px 25px -5px rgba(10, 0, 89, 0.15)' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="p-1.5 rounded-lg bg-white/70 text-[#0a0059]">
                        {getCategoryIcon(cat.icon)}
                      </span>
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0a0059]" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold block" style={{ color: cat.textColor }}>
                        {cat.name}
                      </span>
                      <span className="text-[10px] text-[#0a0059]/70 font-medium">
                        {cat.cardPrompts.length} Soru Kartı
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Category Display (Card Deck from PDF) */}
            <div
              className="p-6 sm:p-8 rounded-2xl border-2 transition-all"
              style={{
                backgroundColor: activeCategory.bgLight,
                borderColor: '#0a0059'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#0a0059]/15 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#0a0059]">
                    {getCategoryIcon(activeCategory.icon)}
                  </div>
                  <div>
                    <h5 className="text-2xl font-extrabold" style={{ color: activeCategory.textColor }}>
                      {activeCategory.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-[#0a0059]/80 font-medium">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-white/80 border border-[#0a0059]/20 text-xs font-bold text-[#0a0059]">
                  PDF Örnek Kartı: “{activeCategory.sampleQuestion}”
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory.cardPrompts.map((prompt, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/90 border border-[#0a0059]/20 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#0a0059]/10 text-[#0a0059]">
                        Kart #{idx + 1}
                      </span>
                      <OverthinkLogo variant="navy-on-cream" size="sm" showWordmark={false} />
                    </div>

                    <p className="text-sm sm:text-base font-bold text-[#0a0059] leading-snug">
                      “{prompt}”
                    </p>

                    <div className="text-[11px] text-[#0a0059]/60 font-medium pt-2 border-t border-[#0a0059]/10">
                      Overthink Yaratıcı Düşünme Soru Seti
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
