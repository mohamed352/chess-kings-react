'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChessKnight } from 'react-icons/fa6';

export function LandingHero() {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 anim-fade-up">
          {/* Saudi Patent Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-white text-[#4A8564] border border-[#4A8564] shadow-sm">
            <span className="text-xs font-bold font-sans">🇸🇦</span>
            <span className="text-[13px] font-bold mr-2">براءة اختراع سعودية</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#644B48] leading-[1.3] max-w-3xl mx-auto">
            المعركة بدأت، وجيشك بانتظار أوامرك
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-500 font-medium leading-relaxed">
            اختبر شطارتك في أقوى تجربة شطرنج عالمية ومجتمع متكامل
            <br />
            للتواصل معه.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="#play"
              className="flex items-center gap-3 px-8 py-3 bg-[#AB86B9] text-white text-lg font-bold shadow hover:bg-[#AB86B9]/90 transition-all"
            >
              <FaChessKnight className="w-5 h-5" />
              <span>إلعب الآن</span>
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div
          className="mt-12 relative w-full h-[400px] md:h-[500px] lg:h-[600px] anim-fade-up overflow-hidden"
          style={{ '--anim-delay': '0.2s' } as React.CSSProperties}
        >
          <Image
            src="/assets/images/looog.png"
            alt="شطرنج شطارة"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
        linear-gradient(to bottom, white 0%, transparent 10%, transparent 90%, white 100%),
        linear-gradient(to right, white 0%, transparent 10%, transparent 90%, white 100%)
      `
            }}
          />
        </div>
      </div>
    </section>
  );
}
