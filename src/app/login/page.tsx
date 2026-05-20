import { LoginVisual } from "@/features/auth/components/login-visual";
import { LoginHeader } from "@/features/auth/components/login-header";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
    return (
        <main className="min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-r from-[#edf0f4] via-[#f5f7fa] to-white overflow-hidden" dir="ltr">
            {/* Left Side - Visual (Chess pieces) - 55% width */}
            <div className="hidden lg:flex w-full lg:w-[55%] min-h-screen items-center justify-center p-10 relative">
                <LoginVisual />
            </div>

            {/* Right Side - Form Panel - 45% width with transparent glass backdrop */}
            <div className="relative w-full lg:w-[45%] min-h-screen bg-white/50 backdrop-blur-[12px] flex flex-col justify-between items-center px-8 py-12 lg:px-16 lg:py-14 z-10 shadow-2xl">
                {/* SVG Wavy Divider with blur filter for a feathered, seamless transition */}
                <div className="absolute inset-y-0 -left-24 w-28 hidden lg:block pointer-events-none z-20 filter blur-xl opacity-95">
                    <svg
                        viewBox="0 0 100 1000"
                        preserveAspectRatio="none"
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100,0 L100,1000 L85,1000 C75,850 95,700 80,500 C65,300 85,150 75,0 Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>

                {/* Top Spacer */}
                <div />

                {/* Form & Header - explicitly in RTL for Arabic content */}
                <div className="flex flex-col items-center gap-5 w-full my-auto" dir="rtl">
                    <LoginHeader />
                    <LoginForm />
                </div>

                {/* Footer Copyright */}
                <div className="mt-8 text-center" dir="rtl">
                    <p className="text-[11px] text-gray-400 font-alexandria">
                        © 2025 شطارة. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </main>
    );
}