'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { SITE } from '@/config/constants';
import { MdClose } from 'react-icons/md';

const navLinks = [
  { name: 'من نحن', href: '#about' },
  { name: 'إلعب الآن', href: '#play' },
  { name: 'تعرف على شطارة', href: '#guide' },
];

export function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-brand-brown/10 supports-[backdrop-filter]:bg-white/80"
        style={{ willChange: 'transform' }}
      >
        <nav className="max-w-6xl mx-auto px-4 py-3" dir="rtl">
          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className="shrink-0 group">
              <Image
                src="/assets/images/logon.png"
                alt={SITE.name}
                width={120}
                height={50}
                className="h-9 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-base font-semibold text-brand-purple hover:text-brand-brown transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex-1" />

            <div className="flex items-center gap-6">
              <Link
                href="/login"
                className="px-6 py-2 rounded-lg bg-brand-purple text-white font-black text-sm shadow-md shadow-brand-purple/20 hover:shadow-brand-purple/30 transition-all uppercase"
              >
                تسجيل الدخول
              </Link>
              
              <button className="text-brand-brown hover:text-brand-purple transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center justify-between">
            <Link href="/">
              <Image
                src="/assets/images/logon.png"
                alt={SITE.name}
                width={120}
                height={50}
                className="h-9 w-auto"
              />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-brand-brown"
              aria-label="فتح القائمة"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeMobile}
          />
          <div
            className="fixed inset-y-0 end-0 w-64 bg-white shadow-2xl z-50"
            dir="rtl"
          >
            <div className="flex items-center justify-between p-3 border-b border-brand-brown/10">
              <Image
                src="/assets/images/logon.png"
                alt={SITE.name}
                width={120}
                height={50}
                className="h-10 w-auto"
              />
              <button
                onClick={closeMobile}
                className="p-1.5 text-brand-brown rounded-lg hover:bg-brand-brown/10 transition-colors"
                aria-label="إغلاق القائمة"
              >
                <MdClose className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col p-3 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  className="px-4 py-3 rounded-xl text-brand-brown hover:bg-brand-purple/10 hover:text-brand-purple font-semibold text-base transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <hr className="border-brand-brown/10 my-2" />

              <Link
                href="/login"
                onClick={closeMobile}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-purple text-white font-bold text-base"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
