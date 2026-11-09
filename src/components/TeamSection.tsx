import React, { useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';
import { Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  // Spokes opacities for the avatar frame
  const spokeOpacities = [1.0, 0.92, 0.82, 0.72, 0.60, 0.48, 0.36, 0.26, 0.18, 0.25, 0.45, 0.75];

  return (
    <section id="ekibimiz" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0059]/5 border border-[#0a0059]/20 text-xs font-bold uppercase tracking-wider text-[#0a0059]">
          <Users className="w-3.5 h-3.5" />
          <span>Uzman Kadro</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a0059]">
          EKİBİMİZ
        </h2>

        <p className="text-sm sm:text-base text-[#0a0059]/80 leading-relaxed">
          Overthink Agency'nin stratejik derinliğini, yaratıcı zihnini ve iletişim uzmanlığını hayata geçiren profesyonel ekibimiz.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <ScrollReveal key={member.id} delayMs={(idx % 5) * 65}>
            <div
              onClick={() => setActiveMember(member)}
              className="flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
            >
              {/* Avatar Framed by 12-Spoke Radial Loading Ring (Matching PDF Page 16) */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-4">
                {/* Radial Spokes SVG */}
                <svg
                  viewBox="0 0 140 140"
                  className="absolute inset-0 w-full h-full group-hover:rotate-45 transition-transform duration-700 ease-out"
                  aria-hidden="true"
                >
                  {spokeOpacities.map((op, i) => (
                    <rect
                      key={i}
                      x="66"
                      y="4"
                      width="8"
                      height="20"
                      rx="4"
                      fill="#0a0059"
                      opacity={op}
                      transform={`rotate(${i * 30} 70 70)`}
                    />
                  ))}
                </svg>

                {/* Inner Avatar Bubble */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#0a0059] text-[#fffdf1] flex items-center justify-center font-bold text-lg sm:text-xl border-2 border-[#fffdf1] shadow-md group-hover:scale-105 transition-transform">
                  {member.initials}
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="font-bold text-sm sm:text-base text-[#0a0059] group-hover:underline">
                {member.name}
              </h3>

              <p className="text-xs text-[#0a0059]/80 mt-1 font-medium leading-tight">
                {member.role}
              </p>

              <span className="text-[10px] text-[#0a0059]/50 mt-2 font-mono">
                #{idx + 1}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Selected Member Detail Modal / Card */}
      {activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0059]/60 backdrop-blur-xs"
          onClick={() => setActiveMember(null)}
        >
          <div
            className="bg-[#fffdf1] border-2 border-[#0a0059] rounded-2xl max-w-md w-full p-6 shadow-2xl text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#0a0059] text-[#fffdf1] flex items-center justify-center font-bold text-2xl shadow-lg border-2 border-[#fffdf1]">
              {activeMember.initials}
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#0a0059]">{activeMember.name}</h4>
              <p className="text-xs uppercase font-bold text-[#0a0059]/70 tracking-wider mt-0.5">
                {activeMember.role}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0059]/5 border border-[#0a0059]/15 text-sm text-[#0a0059] leading-relaxed">
              {activeMember.highlight}
            </div>

            <button
              onClick={() => setActiveMember(null)}
              className="px-6 py-2 rounded-full bg-[#0a0059] text-[#fffdf1] font-bold text-xs uppercase tracking-wider hover:bg-[#0a0059]/90 transition-all cursor-pointer"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
