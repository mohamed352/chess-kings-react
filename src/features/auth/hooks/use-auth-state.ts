'use client';

import { useEffect, useState } from 'react';
import { isFirebaseConfigured } from '@/lib/firebase';

export function useAuthState() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setIsLoading(false);
      return;
    }

    let unsubscribe: (() => void) | undefined;

    const setup = async () => {
      try {
        const { onAuthStateChanged } = await import('firebase/auth');
        const { getAuth } = await import('@/lib/firebase');
        const auth = await getAuth();
        unsubscribe = onAuthStateChanged(auth, (user) => {
          setIsLoggedIn(user !== null);
          setIsLoading(false);
        });
      } catch {
        setIsLoading(false);
      }
    };

    setup();

    return () => {
      unsubscribe?.();
    };
  }, []);

  const logout = async () => {
    if (!isFirebaseConfigured) return;
    try {
      const { signOut } = await import('firebase/auth');
      const { getAuth } = await import('@/lib/firebase');
      const auth = await getAuth();
      await signOut(auth);
    } catch {
      // handled by auth state listener
    }
  };

  return { isLoggedIn, isLoading, logout };
}