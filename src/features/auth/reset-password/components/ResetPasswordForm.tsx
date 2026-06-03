"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginInput from "@/features/auth/login/components/LoginInput";
import { CheckCircle } from "lucide-react";

export default function ResetPasswordForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!password || !confirmPassword) return;

        if (password !== confirmPassword) {
            setError("كلمتا المرور غير متطابقتين");
            return;
        }

        if (password.length < 8) {
            setError("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل");
            return;
        }

        setLoading(true);
        // TODO: call your API endpoint here with the token from the URL
        await new Promise((r) => setTimeout(r, 800)); // simulate network
        setLoading(false);
        setSubmitted(true);
    };

    /* ── Success state ── */
    if (submitted) {
        return (
            <div className="flex flex-col w-full items-center" dir="rtl">
                {/* Logo */}
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

                <div className="flex flex-col items-center gap-4 py-4 text-center">
                    <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#F3EEF7" }}
                    >
                        <CheckCircle size={30} style={{ color: "#A67BC4" }} strokeWidth={1.5} />
                    </div>

                    <h2 className="text-[18px] font-bold leading-snug" style={{ color: "#5C4033" }}>
                        تم تغيير كلمة المرور!
                    </h2>
                    <p className="text-[13px] leading-6 px-2" style={{ color: "#6B4E45" }}>
                        تم تعيين كلمة المرور الجديدة بنجاح.
                        <br />
                        يمكنك الآن تسجيل الدخول.
                    </p>

                    <Link
                        href="/login"
                        className="w-full h-11 mt-2 rounded-xl text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center"
                        style={{ backgroundColor: "#A67BC4" }}
                    >
                        الذهاب لتسجيل الدخول
                    </Link>
                </div>
            </div>
        );
    }

    /* ── Default state ── */
    return (
        <div className="flex flex-col w-full" dir="rtl">

            {/* Logo — desktop only */}
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

            {/* Heading — desktop only */}
            <div className="w-full hidden lg:block text-center mb-5">
                <h1 className="text-[18px] font-bold mb-2 leading-snug" style={{ color: "#5C4033" }}>
                    تعيين كلمة مرور جديدة
                </h1>
                <p className="text-[14px] leading-6" style={{ color: "#6B4E45" }}>
                    أدخل كلمة المرور الجديدة وأكّدها
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3" noValidate>

                <LoginInput
                    icon="password"
                    type="password"
                    placeholder="كلمة المرور الجديدة"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />

                <LoginInput
                    icon="password"
                    type="password"
                    placeholder="تأكيد كلمة المرور"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />

                {/* Inline error */}
                {error && (
                    <p
                        className="text-[12px] font-medium text-center px-1"
                        style={{ color: "#C0392B" }}
                    >
                        {error}
                    </p>
                )}

                <button
                    id="reset-password-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 mt-3 rounded-xl text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#A67BC4" }}
                >
                    {loading ? (
                        <>
                            <svg
                                className="animate-spin h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            جاري الحفظ...
                        </>
                    ) : (
                        "تعيين كلمة المرور"
                    )}
                </button>
            </form>

            {/* Back to login */}
            <p className="w-full mt-5 text-[13px] text-[#6B4E45] font-medium text-center">
                <Link
                    href="/login"
                    className="font-bold hover:underline transition-colors"
                    style={{ color: "#6B4E45" }}
                >
                    العودة لتسجيل الدخول
                </Link>
            </p>

        </div>
    );
}
