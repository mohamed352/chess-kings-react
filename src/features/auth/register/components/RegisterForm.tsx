"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterInput from "./RegisterInput";
import SocialLoginButton from "@/features/auth/login/components/SocialLoginButton";

/* ─── Country codes ─────────────────────────────────────── */
const COUNTRIES = [
    { code: "sa", dial: "+966", name: "السعودية" },
    { code: "eg", dial: "+20", name: "مصر" },
    { code: "ae", dial: "+971", name: "الإمارات" },
    { code: "kw", dial: "+965", name: "الكويت" },
    { code: "qa", dial: "+974", name: "قطر" },
    { code: "bh", dial: "+973", name: "البحرين" },
    { code: "om", dial: "+968", name: "عُمان" },
    { code: "jo", dial: "+962", name: "الأردن" },
    { code: "lb", dial: "+961", name: "لبنان" },
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
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState(COUNTRIES[0]);
    const [dropOpen, setDropOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    /* country-code picker shown next to the phone input */
    const countryPicker = (
        <div className="relative w-[95px] shrink-0">
            <button
                type="button"
                onClick={() => setDropOpen((v) => !v)}
                className="flex items-center justify-between w-full h-11 px-2 border border-[#E5D7CE] rounded-xl bg-white/70 backdrop-blur-sm
                     focus:border-[#9A8174] focus:ring-1 focus:ring-[#9A8174]/20 focus:outline-none
                     hover:bg-white/95 transition-all duration-200"
                dir="ltr"
            >
                {/* Left: arrow icon */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8C7467] shrink-0">
                    <path d="m6 9 6 6 6-6" />
                </svg>

                {/* Middle: dial code */}
                <span className="text-xs text-[#5C4033] font-semibold tracking-tight">
                    {country.dial}
                </span>

                {/* Right: flag */}
                <FlagImg code={country.code} size={20} />
            </button>

            {dropOpen && (
                <>
                    {/* Full-screen invisible backdrop to handle closing when clicking outside */}
                    <div
                        className="fixed inset-0 z-40 bg-transparent cursor-default"
                        onClick={() => setDropOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-1 w-48 rounded-xl border border-[#E5D7CE] bg-white shadow-lg z-50 overflow-hidden">
                        {COUNTRIES.map((c) => (
                            <button
                                key={c.code}
                                type="button"
                                onClick={() => { setCountry(c); setDropOpen(false); }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-[#5C4033] hover:bg-[#F7F0EC] transition-colors
                                    ${c.code === country.code ? "bg-[#F7F0EC] font-semibold" : ""}`}
                            >
                                <span className="text-xs font-medium">{c.name}</span>
                                <div className="flex items-center gap-2" dir="ltr">
                                    <span className="text-[#8C7467] text-xs font-semibold">{c.dial}</span>
                                    <FlagImg code={c.code} size={20} />
                                </div>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

    return (
        <div className="flex flex-col w-full" dir="rtl">

            {/* Logo */}
            <div className="w-full hidden lg:flex justify-center mb-7 select-none">
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
            <div className="w-full hidden lg:block text-center mb-5">
                <h1 className="text-[18px] font-bold mb-1.5 leading-snug" style={{ color: "#5C4033" }}>
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
                {/* Phone number row */}
                <div className="flex gap-3 w-full">
                    {/* Country code picker */}
                    {countryPicker}

                    {/* Phone number input */}
                    <div className="flex-1 min-w-0">
                        <RegisterInput
                            icon="phone"
                            type="tel"
                            placeholder="رقم الهاتف"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                            required
                        />
                    </div>
                </div>

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
                    className="w-full h-11 mt-1 rounded-xl text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
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
