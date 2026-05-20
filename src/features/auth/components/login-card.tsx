import { LoginVisual } from "./login-visual";
import { LoginHeader } from "./login-header";
import { LoginForm } from "./login-form";

export function LoginCard() {
    return (
        <div className="w-full max-w-[900px] bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px]">
                {/* Left Side - Visual */}
                <div className="hidden lg:flex items-center justify-center bg-[#f5f7fa] p-8">
                    <LoginVisual />
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col items-center justify-center px-16 py-14 gap-6">
                    <LoginHeader />
                    <LoginForm />
                </div>
            </div>

            {/* Footer */}
            <div className="py-4 text-center border-t border-gray-100">
                <p className="text-[11px] text-gray-400">
                    © شطارة. جميع الحقوق محفوظة. 2025
                </p>
            </div>
        </div>
    );
}