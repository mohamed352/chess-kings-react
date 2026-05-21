"use client";

import React, { useState, InputHTMLAttributes } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: "email" | "password";
    placeholder: string;
}

export default function LoginInput({
    icon,
    placeholder,
    type: initialType = "text",
    ...props
}: LoginInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = icon === "password";
    const inputType = isPassword
        ? showPassword ? "text" : "password"
        : initialType;

    return (
        <div
            dir="rtl"
            className="flex items-center w-full border border-gray-300 rounded-xl bg-white overflow-hidden
                 focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-100
                 transition-all duration-200 h-11"
        >
            {/* RIGHT: mail or lock icon */}
            <div className="flex items-center justify-center w-10 h-full shrink-0 text-gray-400">
                {icon === "email"
                    ? <Mail size={16} strokeWidth={1.5} />
                    : <Lock size={16} strokeWidth={1.5} />
                }
            </div>

            {/* CENTER: Arabic input */}
            <input
                {...props}
                type={inputType}
                placeholder={placeholder}
                className="flex-1 h-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none text-right px-2"
            />

            {/* LEFT: eye toggle (password only) */}
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="flex items-center justify-center w-10 h-full shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                    {showPassword
                        ? <Eye size={16} strokeWidth={1.5} />
                        : <EyeOff size={16} strokeWidth={1.5} />
                    }
                </button>
            )}
        </div>
    );
}