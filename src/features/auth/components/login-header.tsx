import Image from "next/image";

export function LoginHeader() {
    return (
        <div className="flex flex-col items-center w-full">
            {/* Logo */}
            <div className="relative h-20 w-64 mb-3">
                <Image
                    src="/assets/images/logon.png"
                    alt="شطرنج شطارة"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Welcome Text */}
            <div className="text-center">
                <h2 className="text-[22px] font-bold text-[#4c3e34] lg:text-[23px] font-alexandria tracking-tight">
                    عضو في شطارة!
                </h2>
                <p className="mt-1.5 text-xs lg:text-sm text-gray-500 leading-relaxed font-normal font-alexandria">
                    أهلاً بعودتك! إستخدم بياناتك لتسجيل
                    <br />
                    الدخول مباشرةً
                </p>
            </div>
        </div>
    );
}