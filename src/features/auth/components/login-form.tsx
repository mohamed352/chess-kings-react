"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FiAtSign, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { LoginInput } from "./login-input";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log({ email, password });
        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 w-full max-w-[360px]" dir="rtl">
            <LoginInput
                type="text"
                placeholder="إسم المستخدم"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<FiAtSign size={18} className="text-gray-400" />}
                required
            />

            <LoginInput
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<FiLock size={18} className="text-gray-400" />}
                endElement={
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none flex items-center justify-center p-1"
                        tabIndex={-1}
                    >
                        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                }
                required
            />

            <div className="text-right px-2 -mt-1">
                <a
                    href="#"
                    className="text-xs text-[#ab86b9] hover:text-[#9973a8] transition-colors font-medium"
                >
                    نسيت كلمة المرور؟
                </a>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="mt-2 h-12 w-full rounded-full bg-[#ab86b9] hover:bg-[#9973a8] text-white text-sm font-semibold
                  focus:outline-none focus:ring-2 focus:ring-[#ab86b9]/30
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200 shadow-sm shadow-[#ab86b9]/15"
            >
                {isLoading ? "جاري التحميل..." : "تسجيل الدخول"}
            </button>
        </form>
    );
}