'use client';

import Image from 'next/image';
import { HiChartBar, HiGlobeAlt, HiChevronDown } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa6';

interface Player {
  id: number;
  name: string;
  handle: string;
  rank: string;
  color: string;
}

const leaderboard: Player[] = [
  { id: 1, name: 'Nour', handle: '@nour_off', rank: '#1', color: 'bg-brand-purple' },
  { id: 2, name: 'Nour', handle: '@nour_off', rank: '#2', color: 'bg-red-400' },
  { id: 3, name: 'Nour', handle: '@nour_off', rank: '#3', color: 'bg-orange-400' },
  { id: 4, name: 'Nour', handle: '@nour_off', rank: '#4', color: 'bg-green-400' },
  { id: 5, name: 'Nour', handle: '@nour_off', rank: '#5', color: 'bg-blue-400' },
  { id: 6, name: 'Nour', handle: '@nour_off', rank: '#6', color: 'bg-gray-400' },
];

export function ChessPreview() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Leaderboard */}
          <div className="lg:col-span-4 bg-surface-light rounded-3xl p-6 shadow-inner anim-fade-right">
            <div className="flex items-center justify-between mb-8">
              <div className="flex bg-white rounded-lg p-1 border border-border-default">
                <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-surface-light text-brand-brown shadow-sm flex items-center gap-2">
                  <HiChartBar className="w-4 h-4" />
                  <span>عالمي</span>
                </button>
                <button className="px-4 py-1.5 rounded-md text-sm font-medium text-text-secondary hover:bg-surface-light flex items-center gap-2">
                  <HiGlobeAlt className="w-4 h-4" />
                  <span>بناء</span>
                </button>
              </div>
              <button className="text-text-secondary hover:text-brand-brown transition-colors">
                <HiChevronDown className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {leaderboard.map((player) => (
                <div key={player.id} className="bg-white p-3 rounded-xl flex items-center justify-between border border-border-default hover:border-brand-purple/30 transition-all shadow-sm group">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gray-100 overflow-hidden relative border-2 border-white shadow-sm transition-transform group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                    </div>
                    <div className="text-right">
                      <div className="font-black text-brand-brown text-sm leading-tight">{player.name}</div>
                      <div className="text-[10px] text-brand-brown/40 font-bold">{player.handle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-brand-green/10 text-brand-green hover:bg-brand-green/20 transition-colors">
                      <FaPlay className="w-3 h-3" />
                    </button>
                    <div className={`${player.color} text-white text-[10px] font-black px-2 py-1 rounded-md min-w-[36px] text-center shadow-sm`}>
                      {player.rank}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-gray-100 text-brand-brown/40 font-black text-xs hover:bg-gray-200 transition-colors uppercase tracking-wider">
              عرض الكل
            </button>
          </div>

          {/* Right Column: Chess Board Preview */}
          <div className="lg:col-span-8 bg-[#AB86B9]/15 rounded-3xl p-4 lg:p-6 shadow-xl shadow-brand-purple/5 anim-fade-up">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="flex flex-col lg:flex-row h-full min-h-[400px]">
                {/* Chess Board Side */}
                <div className="flex-[3] relative aspect-square bg-[#F8F9FA]">
                  <Image
                    src="/assets/images/shatraBord.png"
                    alt="لوحة شطرنج"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Moves List Side (Desktop only) */}
                <div className="hidden lg:flex flex-[1.2] flex-col border-r border-border-default bg-[#FDFDFD]">
                  <div className="p-4 border-b border-border-default bg-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-brand-brown opacity-60">مباريات قائمة الآن</span>
                      <button className="text-[9px] font-black bg-surface-light px-2 py-1 rounded text-text-secondary flex items-center gap-1 border border-black/5">
                        <span>بار</span>
                        <HiChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="flex items-center justify-between px-3 py-2 text-[10px] font-bold text-text-secondary hover:bg-surface-light rounded transition-colors">
                        <span>22_123 {i}</span>
                        <span className="text-brand-brown/40">32</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-white border-t border-border-default">
                    <button className="w-full py-2 rounded-lg bg-surface-light text-brand-brown/60 font-black text-[10px] hover:bg-gray-200 transition-colors uppercase">
                      عرض الكل
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="bg-white/60 backdrop-blur-md border border-white/80 text-brand-brown py-4 rounded-2xl font-black text-sm hover:bg-white transition-all flex items-center justify-center gap-3">
                <span className="w-5 h-5 rounded border-2 border-brand-purple/30 bg-white" />
                <span>تحدي أصدقائك</span>
              </button>
              <button className="bg-white/60 backdrop-blur-md border border-white/80 text-brand-brown py-4 rounded-2xl font-black text-sm hover:bg-white transition-all flex items-center justify-center gap-3">
                <span className="w-5 h-5 rounded border-2 border-brand-purple/30 bg-white" />
                <span>تحدي المحترفين</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
