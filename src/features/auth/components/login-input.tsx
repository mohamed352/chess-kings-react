import React from "react";

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    endElement?: React.ReactNode;
}

export function LoginInput({ icon, endElement, className, ...props }: LoginInputProps) {
    return (
        <div className="relative w-full" dir="rtl">
            {icon && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                    {icon}
                </div>
            )}
            <input
                className={`w-full bg-white border border-gray-200/80 rounded-full py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#ab86b9] focus:outline-none focus:ring-2 focus:ring-[#ab86b9]/15 transition-all duration-200 font-alexandria ${
                    icon ? "pr-11" : "pr-5"
                } ${endElement ? "pl-11" : "pl-5"} ${className || ""}`}
                {...props}
            />
            {endElement && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center z-10">
                    {endElement}
                </div>
            )}
        </div>
    );
}