'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChessKnight } from 'react-icons/fa6';

export function LandingHero() {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 anim-fade-up">
          {/* Saudi Patent Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F6E9] text-[#06AC2A] border border-[#06AC2A]/20">
            <span className="text-xs font-bold ml-2">🇸🇦</span>
            <span className="text-[11px] font-black uppercase tracking-wider">براءة اختراع سعودية</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-[56px] font-black text-brand-brown leading-[1.1] tracking-tight">
            المعركة بدأت، <br />
            وجيشك بانتظار أوامرك
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary font-bold leading-relaxed opacity-80">
            اختبر شطارتك في أقوى تجربة شطرنج عالمية ومجتمع متكامل
            <br />
            للتواصل معه.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="#play"
              className="group flex items-center space-x-reverse space-x-3 px-10 py-4 rounded-xl bg-brand-purple text-white text-lg font-black shadow-lg shadow-brand-purple/25 hover:bg-brand-purple/90 transition-all hover-lift pulse-glow"
            >
              <span>إلعب الآن</span>
              <FaChessKnight className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="mt-12 relative w-full aspect-[16/8] md:aspect-[21/9] anim-fade-up"
          style={{ '--anim-delay': '0.2s' } as React.CSSProperties}
        >
          <Image
            src="/assets/images/hero.png"
            alt="شطرنج شطارة"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 -mr-24 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 -ml-24 w-64 h-64 bg-brand-brown/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
