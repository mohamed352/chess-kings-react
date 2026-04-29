import { isFirebaseConfigured, getAuth } from '@/lib/firebase';

export { useAuthState } from './use-auth-state';

export async function signUp(email: string, password: string, displayName: string) {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured');
  }
  const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
  const auth = await getAuth();
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName });
  return credential.user;
}

export async function logout() {
  if (!isFirebaseConfigured) return;
  const { signOut } = await import('firebase/auth');
  const auth = await getAuth();
  await signOut(auth);
}