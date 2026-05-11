'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE, CONTACT } from '@/config/constants';
import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

const footerLinks = {
  pages: [
    { name: 'الرئيسية', href: '/' },
    { name: 'تعرف على شطارة', href: '#guide' },
    { name: 'إلعب الآن', href: '#play' },
    { name: 'من نحن', href: '#about' },
  ],
  socials: [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaXTwitter, href: '#', label: 'X' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ],
};

export function LandingFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Newsletter */}
          <div className="order-4 lg:order-1 text-right">
            <h3 className="text-lg font-bold text-gray-900 mb-6">ابقى مطلع على جديد شطارة</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-purple transition-colors text-right"
                />
                <button
                  type="submit"
                  className="absolute left-1.5 top-1.5 px-4 py-1.5 rounded-lg bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 transition-colors"
                >
                  إشترك الآن
                </button>
              </div>
            </form>
            <div className="mt-8">
              <h4 className="text-sm font-bold text-gray-400 mb-4">حسابات شطارة</h4>
              <div className="flex items-center justify-end space-x-reverse space-x-3">
                {footerLinks.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover-lift"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="order-3 lg:order-2 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <p className="text-gray-500 font-medium">{CONTACT.email}</p>
              <p className="text-gray-900 font-bold" dir="ltr">{CONTACT.phone}</p>
              <button className="px-6 py-2.5 rounded-xl bg-brand-purple/10 text-brand-purple font-bold text-sm hover:bg-brand-purple/20 transition-colors">
                مركز المساعدة والدعم
              </button>
            </div>
          </div>

          {/* Column 3: Links */}
          <div className="order-2 lg:order-3 text-right">
            <h3 className="text-lg font-bold text-gray-900 mb-6">الصفحات</h3>
            <ul className="space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-brand-purple font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Logo & About */}
          <div className="order-1 lg:order-4 text-right">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/images/logon.png"
                alt={SITE.name}
                width={120}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs ml-auto">
              {SITE.description}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 شطارة. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center space-x-reverse space-x-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-brand-purple transition-colors">الشروط والأحكام</Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-brand-purple transition-colors">سياسة الملكية الفكرية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
