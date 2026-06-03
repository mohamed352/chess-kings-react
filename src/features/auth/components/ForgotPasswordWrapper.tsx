"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ForgotPasswordForm from "@/features/auth/forgot-password/components/ForgotPasswordForm";

export default function ForgotPasswordWrapper() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-white lg:bg-[url('/assets/images/Login.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat">

            <div
                className="relative w-full max-w-[1440px] min-h-screen flex flex-col px-4 pt-6 pb-4 lg:pt-[32px] lg:pr-[48px] lg:pb-[24px] lg:pl-[48px]"
                dir="ltr"
            >

                {/* ── MAIN LAYOUT ── */}
                <div
                    className="relative z-10 flex flex-row items-center justify-center gap-16 lg:gap-24 w-full max-w-[1344px] mx-auto flex-1"
                    style={{ marginTop: "24px" }}
                >

                    {/* Shatara pieces image — desktop only */}
                    <div className="hidden lg:flex items-center justify-center shrink-0" style={{ width: "55%" }}>
                        <img
                            src="/assets/images/image 302.png"
                            alt="Shatara Pieces"
                            className="w-full max-w-[540px] h-auto object-contain"
                            style={{ maxHeight: "430px" }}
                        />
                    </div>

                    {/* ── DESKTOP CARD ── */}
                    <div
                        className="hidden lg:flex py-14 w-[440px] shrink-0 flex-col justify-center"
                        style={{
                            backgroundImage: "url('/assets/images/Left%20side%208%20Column.png')",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            zIndex: 10,
                        }}
                    >
                        <div className="w-full px-10">
                            <ForgotPasswordForm />
                        </div>
                    </div>

                    {/* ── MOBILE LAYOUT ── */}
                    <div className="flex lg:hidden w-full flex-col">

                        {/* Mobile header */}
                        <div className="w-full flex flex-col items-center mb-6 select-none" dir="rtl">
                            <Image
                                src="/assets/images/logoapp.png"
                                alt="شطارة شطرنج"
                                width={180}
                                height={65}
                                priority
                                className="object-contain mb-4"
                            />
                            <h1
                                className="text-[20px] font-bold mb-1.5 text-center leading-snug"
                                style={{ color: "#5C4033" }}
                            >
                                نسيت كلمة المرور؟
                            </h1>
                            <p
                                className="text-[13px] text-center px-4 leading-6"
                                style={{ color: "#6B4E45" }}
                            >
                                أدخل بريدك الإلكتروني وسنرسل لك رابط الاستعادة
                            </p>
                        </div>

                        {/* Form */}
                        <div className="w-full px-4">
                            <ForgotPasswordForm />
                        </div>

                    </div>
                </div>

                {/* ── FOOTER — desktop only ── */}
                <footer
                    className="hidden lg:flex relative z-10 flex-col lg:flex-row items-center justify-center gap-4 lg:gap-24 w-full max-w-[1344px] mx-auto pt-6 pb-2 text-[12px] font-medium"
                    style={{ color: "#6b5042", opacity: 0.85 }}
                >
                    <div className="w-full lg:w-[55%] flex justify-center shrink-0">
                        <div className="w-full max-w-[540px] flex justify-center lg:justify-start gap-6">
                            <Link href="/privacy" className="hover:underline">
                                سياسة الملكية الفكرية
                            </Link>
                            <Link href="/terms" className="hover:underline">
                                الشروط و الأحكام
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-[440px] shrink-0 flex justify-center lg:justify-end text-center lg:text-right">
                        <div>ميدان شطارة. جميع الحقوق محفوظة © 2026</div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
