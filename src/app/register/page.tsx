import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/features/auth/register/components/RegisterForm";

export const metadata: Metadata = {
    title: "إنشاء حساب | شطارة شطرنج",
    description: "أنشئ حسابك في منصة شطارة للشطرنج وانضم إلى مجتمع الشطرنج",
};

export default function RegisterPage() {
    return (
        <div
            className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: "url('/assets/images/Login.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className="relative w-full max-w-[1440px] min-h-screen flex flex-col"
                style={{ padding: "32px 48px 24px 48px" }}
                dir="ltr"
            >
                {/* MAIN LAYOUT */}
                <div
                    className="relative z-10 flex flex-row items-center justify-center gap-16 lg:gap-24 w-full max-w-[1344px] mx-auto flex-1"
                    style={{ marginTop: "24px" }}
                >
                    {/* Left: Chess Pieces Image */}
                    <div className="hidden lg:flex items-center justify-center shrink-0" style={{ width: "55%" }}>
                        <img
                            src="/assets/images/image 302.png"
                            alt="Chess Pieces"
                            className="w-full max-w-[540px] h-auto object-contain"
                            style={{ maxHeight: "430px" }}
                        />
                    </div>

                    {/* Right: Register Card */}
                    <div
                        className="w-full lg:w-[390px] shrink-0 py-10 flex flex-col justify-center"
                        style={{
                            backgroundImage: "url('/assets/images/Left%20side%208%20Column.png')",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            zIndex: 10,
                        }}
                    >
                        <div className="w-full px-8">
                            <RegisterForm />
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <footer
                    className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-24 w-full max-w-[1344px] mx-auto pt-6 pb-2 text-[12px] font-medium"
                    style={{ color: "#6b5042", opacity: 0.85 }}
                >
                    {/* Links — aligned with chess image column */}
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

                    {/* Copyright — aligned with form card column */}
                    <div className="w-full lg:w-[390px] shrink-0 flex justify-center lg:justify-end text-center lg:text-right">
                        <div>ميدان شطارة. جميع الحقوق محفوظة © 2026</div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
