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
            <div className="w-full hidden lg:flex justify-center mb-10 select-none">
                <Image
                    src="/assets/images/logoapp.png"
                    alt="شطارة شطرنج"
                    width={220}
                    height={80}
                    priority
                    className="object-contain"
                />
            </div>

            {/* Heading */}
            <div className="w-full hidden lg:block text-center mb-5">
                <h1 className="text-[18px] font-bold mb-2 leading-snug" style={{ color: "#5C4033" }}>
                    عضو في شطارة!
                </h1>
                <p className="text-[14px] leading-6" style={{ color: "#6B4E45" }}>
                    أهلاً بعودتك!، إستخدم بياناتك لتسجيل الدخول
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3" noValidate>

                <LoginInput
                    icon="username"
                    type="text"
                    placeholder="إسم المستخدم"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
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

                {/* Remember me & Forgot password — Mobile only */}
                <div className="w-full lg:hidden flex items-center justify-between mt-1">
                    {/* Remember me checkbox */}
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-2 border-[#8C7467] cursor-pointer accent-[#A67BC4]"
                        />
                        <span className="text-xs text-[#6B4E45] group-hover:text-[#5C4033] transition-colors">
                            تذكرني
                        </span>
                    </label>

                    {/* Forgot password */}
                    <Link
                        href="/forgot-password"
                        className="text-xs hover:underline transition-colors"
                        style={{ color: "#A67BC4" }}
                    >
                        نسيت كلمة المرور؟
                    </Link>
                </div>

                {/* Forgot password — Desktop only */}
                <div className="w-full hidden lg:flex justify-start mt-0.5">
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
                    className="w-full h-11 mt-3 rounded-xl text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
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
            <p className="w-full mt-4 text-[13px] text-[#6B4E45] font-medium text-center">
                ليس لديك حساب؟{" "}
                <Link
                    href="/register"
                    className="font-bold hover:underline transition-colors"
                    style={{ color: "#6B4E45" }}
                >
                    أنشئ حساب جديد
                </Link>
            </p>

        </div>
    );
}