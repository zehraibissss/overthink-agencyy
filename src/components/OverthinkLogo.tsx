import React from 'react';

interface OverthinkLogoProps {
  variant?: 'navy-on-cream' | 'cream-on-navy';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showWordmark?: boolean;
  showSlogan?: boolean;
  animate?: boolean;
  className?: string;
  onClick?: () => void;
}

export const OverthinkLogo: React.FC<OverthinkLogoProps> = ({
  variant = 'navy-on-cream',
  size = 'md',
  showWordmark = true,
  showSlogan = false,
  animate = false,
  className = '',
  onClick
}) => {
  const isNavyBg = variant === 'cream-on-navy';
  const primaryColor = isNavyBg ? '#fffdf1' : '#0a0059';
  const secondaryColor = isNavyBg ? '#d5d2ca' : '#2b236e';
  const agencyColor = isNavyBg ? '#d5d2ca' : '#73708a';

  // Size configurations: loading icon height/width strictly proportional to "verthink" text
  const sizeMap = {
    sm: {
      iconClass: 'w-[22px] h-[22px]',
      text: 'text-lg',
      subtext: 'text-[9px]',
      agency: 'text-[11px]',
      gap: 'gap-[2px]'
    },
    md: {
      iconClass: 'w-[30px] h-[30px]',
      text: 'text-2xl',
      subtext: 'text-xs',
      agency: 'text-sm',
      gap: 'gap-[3px]'
    },
    lg: {
      iconClass: 'w-[38px] h-[38px]',
      text: 'text-3xl',
      subtext: 'text-sm',
      agency: 'text-base',
      gap: 'gap-1'
    },
    xl: {
      iconClass: 'w-[46px] h-[46px]',
      text: 'text-4xl',
      subtext: 'text-base',
      agency: 'text-lg',
      gap: 'gap-1.5'
    },
    hero: {
      iconClass: 'w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] md:w-[76px] md:h-[76px]',
      text: 'text-3xl sm:text-5xl md:text-6xl',
      subtext: 'text-xs sm:text-base md:text-lg',
      agency: 'text-sm sm:text-xl md:text-2xl',
      gap: 'gap-1 sm:gap-1.5 md:gap-2'
    },
  };

  const currentSize = sizeMap[size];

  // 12 spokes of the loading logo matching PDF Pages 2 & 5 (darkest at 10-12 o'clock, fading clockwise to 1-2 o'clock)
  const opacities = [1.0, 0.12, 0.18, 0.25, 0.34, 0.42, 0.50, 0.58, 0.68, 0.78, 0.88, 0.96];

  const spinnerSvg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${currentSize.iconClass} shrink-0 ${animate ? 'animate-spin-step' : ''} transition-transform duration-300`}
      aria-hidden="true"
    >
      {opacities.map((op, i) => {
        const angle = i * 30; // 12 spokes * 30 deg = 360
        return (
          <rect
            key={i}
            x="45.5"
            y="6"
            width="9"
            height="24"
            rx="4.5"
            fill={primaryColor}
            opacity={op}
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  );

  if (!showWordmark) {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
        role={onClick ? 'button' : undefined}
        aria-label="Overthink Agency Logo"
      >
        {spinnerSvg}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      role={onClick ? 'button' : undefined}
      aria-label="Overthink Agency Logo"
    >
      <div className="inline-flex flex-col items-end">
        {/* Top line: Loading Icon + "verthink" strictly symmetrical on the same horizontal axis */}
        <div className={`inline-flex items-center ${currentSize.gap}`}>
          {spinnerSvg}
          <span
            className={`font-bold tracking-tight leading-[0.85] pb-[0.06em] ${currentSize.text}`}
            style={{ color: primaryColor }}
          >
            verthink
          </span>
        </div>

        {/* Bottom line: "agency" aligned neatly under the right side of "verthink" as in PDF */}
        <span
          className={`font-medium tracking-wide lowercase leading-none mt-0.5 ${currentSize.agency}`}
          style={{ color: agencyColor }}
        >
          agency
        </span>
      </div>

      {/* Slogan */}
      {showSlogan && (
        <span
          className={`font-medium tracking-tight mt-2 opacity-90 text-center ${currentSize.subtext}`}
          style={{ color: secondaryColor }}
        >
          Think More, Connect Better.
        </span>
      )}
    </div>
  );
};
