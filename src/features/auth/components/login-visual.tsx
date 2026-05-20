import Image from "next/image";

export function LoginVisual() {
    return (
        <div className="relative w-full max-w-[500px] aspect-[4/3]">
            <Image
                src="/assets/images/image 302.png"
                alt="قطع شطارة"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}