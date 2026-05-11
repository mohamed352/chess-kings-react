'use client';

import type React from 'react';
import Image from 'next/image';
import { HiUsers, HiOutlineGlobeAlt, HiUserGroup } from 'react-icons/hi';

interface StatItem {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
}

const stats: StatItem[] = [
  {
    label: 'متواجد حاليا',
    value: '12',
    icon: HiUsers,
    color: 'text-brand-green',
    bg: 'bg-brand-green/10',
  },
  {
    label: 'زائر',
    value: '128',
    icon: HiUserGroup,
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
  },
  {
    label: 'بلدا',
    value: '20',
    icon: HiOutlineGlobeAlt,
    color: 'text-brand-brown',
    bg: 'bg-brand-brown/10',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white" dir="rtl">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-5xl opacity-[0.05]">
          <Image
            src="/assets/images/stat.png"
            alt="World Map"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/3 text-right anim-fade-right">
            <h2 className="text-3xl md:text-[40px] font-black text-brand-brown leading-[1.2]">
              أرقامنا هي من <br />
              تتحدث عنا
            </h2>
            <div className="mt-4 mr-0 w-24 h-1.5 bg-brand-purple rounded-full opacity-60" />
          </div>

          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 anim-stagger">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl md:text-5xl font-black text-brand-brown tracking-tighter">
                      {stat.value}
                    </span>
                    <div className={`${stat.color} transition-transform group-hover:scale-110`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
                    </div>
                  </div>
                  <div className="text-brand-brown font-black text-lg md:text-xl opacity-70">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
