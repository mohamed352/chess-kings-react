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
          <div className="lg:col-span-4 bg-[#F8F9FA] rounded-[24px] p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex bg-white rounded-lg p-1 border border-gray-200">
                <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-white text-gray-500 hover:text-gray-800 flex items-center gap-2">
                  <span>عالمي</span>
                  <HiGlobeAlt className="w-4 h-4" />
                </button>
                <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-gray-100 text-gray-800 flex items-center gap-2">
                  <span>بناء</span>
                  <HiChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {leaderboard.map((player) => (
                <div key={player.id} className="bg-white p-3 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`${player.color} text-white text-[11px] font-bold px-2.5 py-1 rounded-md min-w-[36px] text-center`}>
                      {player.rank}
                    </div>
                    <div className="text-right flex flex-col">
                      <div className="font-bold text-gray-800 text-sm">{player.name}</div>
                      <div className="text-[10px] text-gray-400 font-bold">{player.handle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-[#06AC2A] hover:opacity-80 transition-opacity">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button className="text-[#06AC2A] hover:opacity-80 transition-opacity ml-1">
                      <FaPlay className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-gray-200 text-gray-500 font-bold text-xs hover:bg-gray-300 transition-colors uppercase">
              عرض الكل
            </button>
          </div>

          {/* Right Column: Chess Board Preview */}
          <div className="lg:col-span-8 bg-[#AB86B9] rounded-[24px] p-6 shadow-xl">
            <div className="bg-white rounded-[16px] overflow-hidden flex flex-col lg:flex-row h-full min-h-[450px]">
              {/* Chess Board Side */}
              <div className="flex-[2.5] relative bg-[#E8DCC4]">
                <Image
                  src="/assets/images/shatraBord.png"
                  alt="لوحة شطرنج"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Moves List Side (Desktop only) */}
              <div className="hidden lg:flex flex-[1] flex-col bg-white">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex items-center justify-between">
                    <button className="text-[10px] font-bold bg-white px-2 py-1 rounded border border-gray-200 text-gray-500 flex items-center gap-1 shadow-sm">
                      <HiChevronDown className="w-3 h-3" />
                      <span>بار</span>
                    </button>
                    <span className="text-xs font-bold text-gray-500">مباريات قائمة الآن</span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto py-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-2.5 text-[11px] font-bold text-gray-500 hover:bg-gray-50 transition-colors">
                      <span>32</span>
                      <span className="text-gray-400 font-medium">Z2_123 {i}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-100">
                  <button className="w-full py-2.5 rounded-lg bg-gray-200 text-gray-500 font-bold text-[11px] hover:bg-gray-300 transition-colors">
                    عرض الكل
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 grid grid-cols-2 gap-6">
              <button className="bg-white text-gray-500 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 shadow-sm flex items-center justify-center gap-3">
                <span className="w-5 h-5 rounded border-2 border-[#AB86B9] bg-[#AB86B9]" />
                <span>تحدي أصدقائك</span>
              </button>
              <button className="bg-white text-gray-500 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 shadow-sm flex items-center justify-center gap-3">
                <span className="w-5 h-5 rounded border-2 border-[#AB86B9] bg-[#AB86B9]" />
                <span>تحدي أصدقائك</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
