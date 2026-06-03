import type { Metadata } from "next";
import ResetPasswordWrapper from "@/features/auth/components/ResetPasswordWrapper";

export const metadata: Metadata = {
    title: "تعيين كلمة مرور جديدة | شطارة شطرنج",
    description: "قم بتعيين كلمة مرور جديدة لحسابك في شطارة شطرنج",
};

export default function ResetPasswordPage() {
    return <ResetPasswordWrapper />;
}
