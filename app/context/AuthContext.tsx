"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  userType: "student" | "teacher" | null;
  login: (userType: "student" | "teacher") => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<"student" | "teacher" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType") as "student" | "teacher" | null;
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const login = (type: "student" | "teacher") => {
    setUserType(type);
    localStorage.setItem("userType", type);
    router.push("/"); // Redirect to main Eduvite screen
  };

  const logout = () => {
    setUserType(null);
    localStorage.removeItem("userType");
    router.push("/login");
  };

  const isLoggedIn = userType !== null;

  return (
    <AuthContext.Provider value={{ userType, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
