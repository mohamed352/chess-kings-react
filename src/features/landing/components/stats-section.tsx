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
    <section className="py-24 relative overflow-hidden bg-white" dir="rtl">
      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full h-[600px] max-w-6xl opacity-20">
          <Image
            src="/assets/images/stat.png"
            alt="World Map"
            fill
            className="object-cover md:object-contain object-center"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/3 text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
              أرقامنا هي من تتحدث عنا
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 flex flex-row items-center justify-end gap-12 sm:gap-20">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="text-gray-600">
                    <Icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-3xl md:text-4xl font-bold text-gray-800">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-gray-500 mt-1">
                      {stat.label}
                    </span>
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
