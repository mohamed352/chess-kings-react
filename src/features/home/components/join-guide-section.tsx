'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isFirebaseConfigured } from '@/lib/firebase';
import { COUNTRIES_AR } from '@/config/constants';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { GuideCard } from './guide-card';
import toast from 'react-hot-toast';
import {
  MdPersonOutline,
  MdBadge,
  MdAlternateEmail,
  MdPhone,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';

const registrationSchema = z.object({
  fullName: z.string().min(3, 'الاسم قصير'),
  userName: z.string().min(3, 'اسم المستخدم قصير'),
  email: z.string().email('بريد غير صحيح'),
  password: z.string().min(8, 'يجب أن تكون 8 أحرف على الأقل'),
  phone: z.string().min(7, 'رقم الهاتف غير صحيح'),
  gender: z.enum(['ذكر', 'أنثى'], { message: 'مطلوب' }),
  country: z.string().min(1, 'مطلوب'),
  age: z.number().min(5, 'غير صحيح').max(120, 'غير صحيح'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export function JoinGuideSection() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { age: 26 } as RegistrationFormData,
  });

  const onSubmit = async (data: RegistrationFormData) => {
    if (!isFirebaseConfigured) {
      toast.error('Firebase غير مُعد. يرجى إضافة مفاتيح الضبط في .env.local');
      return;
    }

    setLoading(true);
    try {
      const { createUserWithEmailAndPassword, signOut, updateProfile } =
        await import('firebase/auth');
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const { getAuth, getDb } = await import('@/lib/firebase');

      const auth = await getAuth();
      const db = await getDb();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      const user = userCredential.user;
      await updateProfile(user, { displayName: data.userName });

      await setDoc(doc(db, 'UserWatting', user.uid), {
        uid: user.uid,
        email: data.email,
        fullName: data.fullName,
        userName: data.userName,
        phone: data.phone,
        age: data.age,
        gender: data.gender,
        country: data.country,
        approvalStatus: 'pending',
        approved: false,
        createdAt: serverTimestamp(),
      });

      await signOut(auth);

      toast.success(
        'تم إنشاء الحساب بنجاح ✅\nوتم تسجيلك في قائمة الانتظار\nوفي انتظار موافقة المدير',
      );
      reset();
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'code' in err) {
        const firebaseErr = err as { code: string };
        if (firebaseErr.code === 'auth/email-already-in-use') {
          toast.error('هذا البريد الإلكتروني مستخدم مسبقًا');
        } else if (firebaseErr.code === 'auth/weak-password') {
          toast.error('كلمة المرور ضعيفة جدًا');
        } else if (firebaseErr.code === 'auth/invalid-email') {
          toast.error('البريد الإلكتروني غير صالح');
        } else {
          toast.error('حدث خطأ أثناء إنشاء الحساب');
        }
      } else {
        toast.error('حدث خطأ أثناء الحفظ');
      }
    } finally {
      setLoading(false);
    }
  };

  const countryOptions = COUNTRIES_AR.map((c) => ({ value: c, label: c }));
  const genderOptions = [
    { value: 'ذكر', label: 'ذكر' },
    { value: 'أنثى', label: 'أنثى' },
  ];

  return (
    <section className="w-full bg-surface-light py-6 px-4 md:px-6" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4">
        <div
          className="flex-[7] anim-fade-up"
          style={{ '--anim-delay': '0.25s' } as React.CSSProperties}
        >
          <Card className="hover-lift">
            <h2 className="text-brand-brown font-bold text-sm md:text-base mb-4 font-alexandria">
              يرجى تسجيل بياناتك للانضمام إلى قائمة المهتمين بمشروع شطارة
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">
              <Input
                label="اسمك بالكامل"
                placeholder="اسمك بالكامل"
                icon={<MdPersonOutline className="w-4 h-4" />}
                error={errors.fullName?.message}
                {...register('fullName')}
              />

              <Input
                label="اسم المستخدم"
                placeholder="اسم المستخدم"
                icon={<MdBadge className="w-4 h-4" />}
                error={errors.userName?.message}
                {...register('userName')}
              />

              <Input
                label="البريد الإلكتروني"
                type="email"
                placeholder="البريد الإلكتروني"
                icon={<MdAlternateEmail className="w-4 h-4" />}
                error={errors.email?.message}
                {...register('email')}
              />

              <Input
                label="كلمة المرور"
                type={showPassword ? 'text' : 'password'}
                placeholder="كلمة المرور"
                error={errors.password?.message}
                endElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-text-secondary hover:text-brand-purple transition-colors"
                    aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                  >
                    {showPassword ? (
                      <MdVisibilityOff className="w-4 h-4" />
                    ) : (
                      <MdVisibility className="w-4 h-4" />
                    )}
                  </button>
                }
                {...register('password')}
              />

              <Input
                label="رقم الهاتف"
                type="tel"
                placeholder="رقم الهاتف"
                icon={<MdPhone className="w-4 h-4" />}
                error={errors.phone?.message}
                {...register('phone')}
              />

              <Select
                label="الجنس"
                options={genderOptions}
                icon={<span className="text-xs">👤</span>}
                error={errors.gender?.message}
                {...register('gender')}
              />

              <Select
                label="الدولة / الجنسية"
                options={countryOptions}
                icon={<span className="text-xs">🇸🇦</span>}
                error={errors.country?.message}
                {...register('country')}
              />

              <Input
                label="العمر"
                type="number"
                placeholder="26"
                error={errors.age?.message}
                {...register('age', { valueAsNumber: true })}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full mt-2 shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 pulse-glow"
              >
                انضم
              </Button>
            </form>
          </Card>
        </div>

        <div className="flex-[5]">
          <GuideCard />
        </div>
      </div>
    </section>
  );
}