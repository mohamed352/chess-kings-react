import type { Metadata } from "next";
import MobileAuthWrapper from "@/features/auth/components/MobileAuthWrapper";

export const metadata: Metadata = {
    title: "إنشاء حساب | شطارة شطرنج",
    description: "أنشئ حسابك في منصة شطارة للشطرنج وانضم إلى مجتمع الشطرنج",
};

export default function RegisterPage() {
    return <MobileAuthWrapper defaultTab="register" />;
}
