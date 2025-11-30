'use client';

import { useUserStore } from '@/stores/userStore';
import LoginScreen from '@/components/LoginScreen';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return <Dashboard />;
}
