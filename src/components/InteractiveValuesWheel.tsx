import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { CORPORATE_ITEMS, CorporateItem } from '../data/agencyData';
import { CorporateModal } from './CorporateModal';

export const InteractiveValuesWheel: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CorporateItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [filter, setFilter] = useState<'all' | 'ilke' | 'deger'>('all');
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Filtered items
  const filteredItems = CORPORATE_ITEMS.filter((item) => {
    if (filter === 'ilke') return item.type === 'ilke';
    if (filter === 'deger') return item.type === 'deger';
    return true;
  });

  // Smooth continuous rotation when active
  useEffect(() => {
    if (!isRotating) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        // ~6 degrees per second (smooth, graceful pace)
        setRotationAngle((prev) => (prev + (delta * 0.012)) % 360);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRotating]);

  // Current active item for preview
  const currentPreviewItem = hoveredIndex !== null
    ? CORPORATE_ITEMS[hoveredIndex]
    : CORPORATE_ITEMS[activeIndex];

  const handleSpokeClick = (item: CorporateItem) => {
    setActiveIndex(item.index);
    setSelectedItem(item);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 12);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <section
      id="ilkeler-degerler"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-label="İlke ve Değerlerimizin Dönen Şablonu"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0059]/5 border border-[#0a0059]/20 text-xs font-bold uppercase tracking-wider text-[#0a0059]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>12 Parçalı Kurumsal Düşünce Çarkı</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a0059]">
          İlkelerimiz ve Değerlerimiz
        </h2>

        <p className="text-sm sm:text-base text-[#0a0059]/80 leading-relaxed">
          Overthink Agency logosunun 12 çizgisi, kurum kültürümüzün 7 ilkesi ve 5 temel değerini temsil eder.
          Dönen şablon üzerindeki çizgilere veya başlıklara tıklayarak detaylı açıklama penceresini açabilirsiniz.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#0a0059] text-[#fffdf1] shadow-md'
                : 'bg-[#0a0059]/5 text-[#0a0059] hover:bg-[#0a0059]/10'
            }`}
          >
            Tümü (12 Parça)
          </button>
          <button
            onClick={() => setFilter('ilke')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'ilke'
                ? 'bg-[#0a0059] text-[#fffdf1] shadow-md'
                : 'bg-[#0a0059]/5 text-[#0a0059] hover:bg-[#0a0059]/10'
            }`}
          >
            İlkelerimiz (7 Parça)
          </button>
          <button
            onClick={() => setFilter('deger')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'deger'
                ? 'bg-[#0a0059] text-[#fffdf1] shadow-md'
                : 'bg-[#0a0059]/5 text-[#0a0059] hover:bg-[#0a0059]/10'
            }`}
          >
            Değerlerimiz (5 Parça)
          </button>
        </div>
      </div>

      {/* Main Wheel Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fffdf1] rounded-3xl p-6 sm:p-10 border-2 border-[#0a0059]/15 shadow-xl relative overflow-hidden">
        {/* Subtle decorative curves in background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-dashed border-[#0a0059]/15 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-dashed border-[#0a0059]/15 pointer-events-none" />

        {/* Wheel Graphic Container (Col 1 to 7) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
          {/* Wheel wrapper with mouse hover pause */}
          <div
            className="relative w-[300px] h-[300px] sm:w-[430px] sm:h-[430px] md:w-[470px] md:h-[470px] flex items-center justify-center max-w-full"
            onMouseEnter={() => setIsRotating(false)}
            onMouseLeave={() => setIsRotating(true)}
          >
            {/* Interactive Rotating 12-Spoke Loading Icon SVG (matches OverthinkLogo geometry & opacity trail) */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
              }}
              role="group"
              aria-label="12 Çizgili Dönen İlke ve Değer Loading Şablonu"
            >
              {CORPORATE_ITEMS.map((item) => {
                const angle = item.angle;
                const isHovered = hoveredIndex === item.index;
                const isActive = activeIndex === item.index;
                const isMatchingFilter = filter === 'all' || item.type === filter;

                // Authentic trailing opacity gradient from OverthinkLogo (index 0 darkest, fading clockwise)
                const baseOpacities = [1.0, 0.16, 0.22, 0.29, 0.37, 0.45, 0.53, 0.62, 0.71, 0.80, 0.89, 0.96];
                const baseOp = baseOpacities[item.index % 12];
                const opacity = isActive || isHovered ? 1.0 : isMatchingFilter ? baseOp : 0.1;

                // Spoke bar geometry scaled cleanly from OverthinkLogo (100x100 -> 500x500)
                const barWidth = isActive || isHovered ? 46 : 42;
                const barX = 250 - barWidth / 2;
                const barY = isActive || isHovered ? 20 : 28;
                const barHeight = isActive || isHovered ? 130 : 120;
                const barRx = barWidth / 2;
                const numberY = barY + 26;
                // Keep spoke number legible on both dark and translucent bars
                const labelFill = opacity >= 0.5 ? '#fffdf1' : '#0a0059';

                return (
                  <g
                    key={item.id}
                    transform={`rotate(${angle} 250 250)`}
                    className="cursor-pointer group focus:outline-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.categoryName} ${item.index + 1}: ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpokeClick(item);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSpokeClick(item);
                      }
                    }}
                    onMouseEnter={() => setHoveredIndex(item.index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Authentic pill-shaped loading spoke bar */}
                    <rect
                      x={barX}
                      y={barY}
                      width={barWidth}
                      height={barHeight}
                      rx={barRx}
                      fill="#0a0059"
                      opacity={opacity}
                      className="transition-all duration-200"
                    />

                    {/* Subtle upright index number integrated cleanly inside the outer tip of the pill bar */}
                    <text
                      x="250"
                      y={numberY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={labelFill}
                      fontSize={isActive || isHovered ? "15" : "13"}
                      fontWeight="700"
                      opacity={isMatchingFilter || isActive || isHovered ? 0.95 : 0.35}
                      transform={`rotate(${-angle - rotationAngle} 250 ${numberY})`}
                      className="pointer-events-none select-none"
                    >
                      {item.index + 1}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Fixed Central Hub Content inside the hollow center of the loading icon */}
            <button
              type="button"
              className="absolute z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#fffdf1]/95 flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0a0059]/40"
              onClick={() => handleSpokeClick(currentPreviewItem)}
              aria-label={`Seçili ${currentPreviewItem.categoryName}: ${currentPreviewItem.title} detaylarını aç`}
              title="Açmak için dokunun"
            >
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0a0059]/60">
                {currentPreviewItem.categoryName} {currentPreviewItem.index + 1}/12
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0a0059] line-clamp-3 px-1 leading-tight mt-1">
                {currentPreviewItem.title}
              </span>
              <span className="text-[10px] text-[#0a0059]/80 underline mt-1.5 font-semibold">
                Detayları Gör
              </span>
            </button>
          </div>

          {/* Wheel Controls underneath */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0059] text-[#fffdf1] text-xs font-bold hover:bg-[#0a0059]/90 active:scale-95 transition-all cursor-pointer shadow-md"
              aria-label={isRotating ? "Dönüşü Duraklat" : "Dönüşü Başlat"}
            >
              {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isRotating ? 'Dönüşü Duraklat' : 'Dönüşü Başlat'}</span>
            </button>

            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-[#0a0059]/30 text-[#0a0059] hover:bg-[#0a0059]/10 transition-colors cursor-pointer"
              aria-label="Önceki İlke/Değer"
              title="Önceki"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-[#0a0059]/30 text-[#0a0059] hover:bg-[#0a0059]/10 transition-colors cursor-pointer"
              aria-label="Sonraki İlke/Değer"
              title="Sonraki"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Detail Panel & Fast Selector (Col 8 to 12) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Active / Hovered Item Card */}
          <div className="p-6 rounded-2xl bg-[#0a0059]/5 border-2 border-[#0a0059] relative shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-[#0a0059] text-[#fffdf1] text-xs font-bold uppercase tracking-wider">
                {currentPreviewItem.categoryName} #{currentPreviewItem.index + 1}
              </span>
              <span className="text-xs font-semibold text-[#0a0059]/70">
                {currentPreviewItem.tag}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0a0059] mb-3 leading-snug">
              {currentPreviewItem.title}
            </h3>

            <p className="text-sm text-[#0a0059]/90 leading-relaxed mb-4">
              {currentPreviewItem.summary}
            </p>

            {currentPreviewItem.quote && (
              <div className="border-l-2 border-[#0a0059] pl-3 py-1 mb-5 italic text-sm text-[#0a0059]">
                “{currentPreviewItem.quote}”
              </div>
            )}

            <button
              onClick={() => setSelectedItem(currentPreviewItem)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0a0059] text-[#fffdf1] font-bold text-sm hover:bg-[#0a0059]/90 transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Tam Metin Penceresini Aç</span>
            </button>
          </div>

          {/* Quick List of 12 Elements */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#0a0059] uppercase tracking-wider">
              <span>Hızlı Seçim Çizgileri</span>
              <span>12 Çizgi / Değer</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
              {filteredItems.map((item) => {
                const isActive = activeIndex === item.index;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSpokeClick(item)}
                    className={`flex items-center gap-2 p-2 rounded-lg text-left text-xs font-medium transition-all border cursor-pointer ${
                      isActive
                        ? 'bg-[#0a0059] text-[#fffdf1] border-[#0a0059] font-bold shadow-sm'
                        : 'bg-[#fffdf1] text-[#0a0059] border-[#0a0059]/20 hover:border-[#0a0059] hover:bg-[#0a0059]/5'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isActive ? 'bg-[#fffdf1] text-[#0a0059]' : 'bg-[#0a0059]/10 text-[#0a0059]'
                      }`}
                    >
                      {item.index + 1}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Modal Window for full detailed reading */}
      <CorporateModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem ? `${selectedItem.categoryName}: ${selectedItem.title}` : ''}
        badge={selectedItem?.tag}
        category={selectedItem?.type}
        quote={selectedItem?.quote}
      >
        {selectedItem && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0059]/70">
              <span className="w-2 h-2 rounded-full bg-[#0a0059]" />
              <span>Overthink Kurumsal İlkeleri • Çizgi #{selectedItem.index + 1}</span>
            </div>

            <h4 className="text-2xl font-bold text-[#0a0059] leading-tight">
              {selectedItem.title}
            </h4>

            <p className="text-base sm:text-lg text-[#0a0059] leading-relaxed">
              {selectedItem.fullText}
            </p>

            <div className="pt-4 border-t border-[#0a0059]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#0a0059]/80">
              <div className="p-3 rounded-lg bg-[#0a0059]/5">
                <strong className="block text-[#0a0059] mb-1 font-bold">Kurumsal Yansıma:</strong>
                İletişim kararlarını rastlantıya bırakmaz; kelimelerin ve sembollerin hedef kitledeki etkisini önceden hesaplar.
              </div>
              <div className="p-3 rounded-lg bg-[#0a0059]/5">
                <strong className="block text-[#0a0059] mb-1 font-bold">Stratejik Avantaj:</strong>
                Düşünceyi bir kusur veya yük olarak değil, kurumun itibarını ve güven bağlarını güçlendiren bir avantaj olarak kullanır.
              </div>
            </div>
          </div>
        )}
      </CorporateModal>
    </section>
  );
};
