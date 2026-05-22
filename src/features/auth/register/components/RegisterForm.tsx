"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterInput from "./RegisterInput";
import SocialLoginButton from "@/features/auth/login/components/SocialLoginButton";

/* ─── Country codes ─────────────────────────────────────── */
const COUNTRIES = [
    { code: "sa", dial: "+966", name: "السعودية" },
    { code: "eg", dial: "+20",  name: "مصر"       },
    { code: "ae", dial: "+971", name: "الإمارات"  },
    { code: "kw", dial: "+965", name: "الكويت"    },
    { code: "qa", dial: "+974", name: "قطر"       },
    { code: "bh", dial: "+973", name: "البحرين"   },
    { code: "om", dial: "+968", name: "عُمان"     },
    { code: "jo", dial: "+962", name: "الأردن"    },
    { code: "lb", dial: "+961", name: "لبنان"     },
];

const FlagImg = ({ code, size = 20 }: { code: string; size?: number }) => (
    <img
        src={`https://flagcdn.com/w${size}/${code}.png`}
        srcSet={`https://flagcdn.com/w${size * 2}/${code}.png 2x`}
        width={size}
        height={Math.round(size * 0.67)}
        alt={code}
        className="rounded-[2px] object-cover shrink-0"
        style={{ minWidth: size }}
    />
);

export default function RegisterForm() {
    const [fullName,  setFullName]  = useState("");
    const [email,     setEmail]     = useState("");
    const [phone,     setPhone]     = useState("");
    const [password,  setPassword]  = useState("");
    const [country,   setCountry]   = useState(COUNTRIES[0]);
    const [dropOpen,  setDropOpen]  = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    /* country-code picker shown as leftSlot of the phone input */
    const countryPicker = (
        <div className="relative">
            <button
                type="button"
                onClick={() => setDropOpen((v) => !v)}
                className="flex items-center gap-1.5 px-3 h-11 text-sm text-[#5C4033] font-medium whitespace-nowrap select-none hover:bg-[#F7F0EC] transition-colors"
            >
                <FlagImg code={country.code} size={20} />
                <span className="text-xs text-[#8C7467]">{country.dial}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#8C7467]">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {dropOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 rounded-xl border border-[#E5D7CE] bg-white shadow-lg z-50 overflow-hidden">
                    {COUNTRIES.map((c) => (
                        <button
                            key={c.code}
                            type="button"
                            onClick={() => { setCountry(c); setDropOpen(false); }}
                            className={`w-full flex items-center gap-2.5 px-4 py-2 text-sm text-right text-[#5C4033] hover:bg-[#F7F0EC] transition-colors
                                ${c.code === country.code ? "bg-[#F7F0EC] font-semibold" : ""}`}
                        >
                            <FlagImg code={c.code} size={20} />
                            <span className="text-[#8C7467] text-xs">{c.dial}</span>
                            <span className="flex-1 text-right text-xs">{c.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col w-full" dir="rtl">

            {/* Logo */}
            <div className="w-full flex justify-center mb-7 select-none">
                <Image
                    src="/assets/images/LOGO.svg"
                    alt="شطارة شطرنج"
                    width={200}
                    height={72}
                    priority
                    className="object-contain"
                />
            </div>

            {/* Heading */}
            <div className="w-full text-center mb-5">
                <h1 className="text-[22px] font-bold mb-1.5 leading-snug" style={{ color: "#5C4033" }}>
                    عضو في شطارة!
                </h1>
                <p className="text-[13px] leading-6" style={{ color: "#6B4E45" }}>
                    مرحبًا بك!، يمكنك الإنضمام إلينا عن طريق إنشاء حساب جديد
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3" noValidate>

                {/* Full Name */}
                <RegisterInput
                    icon="name"
                    type="text"
                    placeholder="الاسم الكامل"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    autoComplete="name"
                    required
                />

                {/* Email */}
                <RegisterInput
                    icon="email"
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                />

                {/* Phone with country code */}
                <RegisterInput
                    icon="phone"
                    type="tel"
                    placeholder="رقم الهاتف"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    required
                    leftSlot={countryPicker}
                />

                {/* Password */}
                <RegisterInput
                    icon="password"
                    type="password"
                    placeholder="كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full h-11 mt-1 rounded-full text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#A67BC4" }}
                >
                    أنشئ حساب جديد
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center w-full my-4 gap-3">
                <div className="flex-1 h-px bg-[#E5D7CE]" />
                <span className="text-xs text-[#8C7467] font-medium whitespace-nowrap">أو عن طريق</span>
                <div className="flex-1 h-px bg-[#E5D7CE]" />
            </div>

            {/* Google */}
            <div className="w-full" dir="ltr">
                <SocialLoginButton />
            </div>

            {/* Login link */}
            <p className="w-full mt-4 text-[13px] text-[#6B4E45] font-medium text-center">
                لديك حساب بالفعل؟{" "}
                <Link
                    href="/login"
                    className="font-bold hover:underline transition-colors"
                    style={{ color: "#6B4E45" }}
                >
                    سجل الدخول
                </Link>
            </p>

        </div>
    );
}
