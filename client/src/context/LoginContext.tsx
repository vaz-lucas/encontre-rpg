import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { supabase } from "../lib/supabase";
import type {
  AuthError,
  AuthResponse,
  AuthTokenResponsePassword,
  OAuthResponse,
  User,
} from "@supabase/supabase-js";

type Props = {
  children: ReactNode;
};

type LoginObject = {
  user: User | null;
  loading: boolean;
  loginWithGitHub: () => Promise<OAuthResponse>;
  login: (
    email: string,
    password: string,
  ) => Promise<AuthTokenResponsePassword>;
  register: (email: string, password: string) => Promise<AuthResponse>;
  logout: () => Promise<{
    error: AuthError | null;
  }>;
};

export const LoginContext = createContext<LoginObject | undefined>(undefined);

export function LoginProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const loginWithGitHub = () =>
    supabase.auth.signInWithOAuth({ provider: "github" });

  const login = (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password });

  const register = (email: string, password: string) =>
    supabase.auth.signUp({ email, password });

  const logout = () => supabase.auth.signOut();

  return (
    <LoginContext.Provider
      value={{ user, loading, loginWithGitHub, login, register, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
