"use client";

import { decodeToken } from "@/utils/token";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const user = decodeToken();
  const router = useRouter();

  useEffect(() => {
    if (!user && pathname !== '/auth' || !user.id && pathname !== '/auth') {
      router.replace('/auth');
    }
  }, [user]);
  
  if (!user && pathname !== '/auth' || !user.id && pathname !== '/auth') {
    return null;
  }
  return <>{children}</>;
}
