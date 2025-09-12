"use client";

import { AuthProvider, useAuth } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AuthGuardInner({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for auth state to initialize
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn && pathname !== "/login") {
        router.push("/login");
      }
      if (isLoggedIn && pathname === "/login") {
        router.push("/");
      }
    }
  }, [isLoggedIn, pathname, router, isLoading]);

  if (isLoading) {
    return null; // or loading spinner
  }

  if (!isLoggedIn && pathname !== "/login") {
    return null; // or loading spinner
  }

  return <>{children}</>;
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthGuardInner>{children}</AuthGuardInner>
    </AuthProvider>
  );
}
