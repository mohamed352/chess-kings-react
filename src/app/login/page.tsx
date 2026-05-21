import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/features/auth/login/components/LoginForm";

export const metadata: Metadata = {
    title: "تسجيل الدخول | شطارة شطرنج",
    description: "سجّل دخولك إلى منصة شطارة للشطرنج",
};

export default function LoginPage() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#f0f0f0" }}>
            
            <div 
                className="relative w-full max-w-[1440px] min-h-screen flex flex-col"
                style={{ padding: "32px 48px 40px 48px" }}
                dir="ltr"
            >
                
                {/* Layer 0: Background pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/assets/images/image 291.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "auto",
                        opacity: 0.4,
                        zIndex: 0,
                    }}
                />

                {/* Layer 1: Chess pieces */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[90%]"
                    style={{
                        backgroundImage: "url('/assets/images/image 295 (2).png')",
                        backgroundSize: "cover",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                        zIndex: 1,
                    }}
                />

                {/* Layer 2: Gradient overlay - lighter */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(240, 240, 240, 0) 20%, rgba(240, 240, 240, 0.1) 40%, rgba(240, 240, 240, 0.4) 60%, rgba(240, 240, 240, 0.8) 80%, #f0f0f0 100%)",
                        zIndex: 2,
                    }}
                />

                {/* TOP NAV */}
                <nav className="relative z-10 flex flex-row items-center gap-2 justify-start w-full max-w-[1344px] mx-auto">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: "#E9D8F5", color: "#7B3FA0" }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                        العودة
                    </Link>

                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-xs font-medium hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#7B2340" }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19 22H5v-2h14v2M13 2a5 5 0 0 1 5 5c0 2.6-2 3.86-2 3.86L16 13H8l-.04-2.14C8 10.86 6 9.6 6 7a5 5 0 0 1 5-5h2M8 13v2l1 3h6l1-3v-2H8z" />
                        </svg>
                        النسخة التجريبية
                    </button>
                </nav>

                {/* MAIN LAYOUT */}
                <div
                    className="relative z-10 flex flex-row items-center justify-between w-full max-w-[1344px] mx-auto flex-1"
                    style={{ marginTop: "24px" }}
                >
                    
                    <div className="hidden lg:block shrink-0" style={{ width: "55%" }} />

                    {/* Right card - Glassmorphism */}
                    <div
                        className="w-full lg:w-[420px] shrink-0 rounded-[24px] py-8 flex flex-col justify-center"
                        style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(50px)",
                            WebkitBackdropFilter: "blur(50px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.25)",
                            border: "1px solid rgba(255, 255, 255, 0.35)",
                            zIndex: 10,
                        }}
                    >
                        <div className="w-full px-8">
                            <LoginForm />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}