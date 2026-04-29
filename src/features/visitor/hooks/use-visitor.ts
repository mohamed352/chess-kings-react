'use client';

import { useEffect, useRef } from 'react';
import { isFirebaseConfigured } from '@/lib/firebase';

export function useVisitor() {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!isFirebaseConfigured || hasLogged.current) return;
    hasLogged.current = true;

    const logVisit = async () => {
      try {
        const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
        const { getDb } = await import('@/lib/firebase');
        const db = await getDb();
        await addDoc(collection(db, 'visitors'), {
          at: serverTimestamp(),
          platform: 'web',
          source: 'home',
        });
      } catch {
        // Visitor logging is non-critical
      }
    };

    logVisit();
  }, []);
}