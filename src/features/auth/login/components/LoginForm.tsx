"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginInput from "./LoginInput";
import SocialLoginButton from "./SocialLoginButton";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col w-full" dir="rtl">

            {/* Logo — centered only (SVG contains icon + text) */}
            <div className="w-full flex justify-center mb-5 select-none">
                <Image
                    src="/assets/images/LOGO.svg"
                    alt="شطارة شطرنج"
                    width={220}
                    height={80}
                    priority
                    className="object-contain"
                />
            </div>

            {/* Heading */}
            <div className="w-full text-center mb-5">
                <h1 className="text-[24px] font-bold mb-2 leading-snug" style={{ color: "#5C4033" }}>
                    عضو في شطارة!
                </h1>
                <p className="text-[14px] leading-6" style={{ color: "#6B4E45" }}>
                    أهلاً بعودتك!، إستخدم بياناتك لتسجيل الدخول مباشرة
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3" noValidate>

                <LoginInput
                    icon="email"
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                />

                <LoginInput
                    icon="password"
                    type="password"
                    placeholder="كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />

                {/* Forgot password */}
                <div className="w-full flex justify-start mt-0.5">
                    <Link
                        href="/forgot-password"
                        className="text-xs hover:underline transition-colors"
                        style={{ color: "#A67BC4" }}
                    >
                        نسيت كلمة المرور؟
                    </Link>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full h-11 mt-1 rounded-xl text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#A67BC4" }}
                >
                    تسجيل الدخول
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center w-full my-4 gap-3">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-xs text-gray-400 whitespace-nowrap">أو عن طريق</span>
                <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Google */}
            <div className="w-full" dir="ltr">
                <SocialLoginButton />
            </div>

            {/* Register */}
            <p className="w-full mt-4 text-sm text-gray-500 text-center">
                ليس لديك حساب؟{" "}
                <Link
                    href="/register"
                    className="font-bold hover:underline transition-colors"
                    style={{ color: "#7B3FA0" }}
                >
                    أنشئ حساب جديد
                </Link>
            </p>

            {/* Footer */}
            <p className="w-full mt-4 text-xs text-gray-400 text-center">
                © 2025 شطارة. جميع الحقوق محفوظة.
            </p>
        </div>
    );
}