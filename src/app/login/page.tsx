import type { Metadata } from "next";
import MobileAuthWrapper from "@/features/auth/components/MobileAuthWrapper";

export const metadata: Metadata = {
    title: "تسجيل الدخول | شطارة شطرنج",
    description: "سجّل دخولك إلى منصة شطارة للشطرنج",
};

export default function LoginPage() {
    return <MobileAuthWrapper defaultTab="login" />;
}