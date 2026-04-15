"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (data.session) {
      router.push("/admin");
    } else {
      setError(authError?.message || "Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-xl font-display font-semibold tracking-wide text-foreground">
            ELITE <span className="text-primary">EDGE</span>
          </Link>
        </div>

        <div className="bg-surface rounded-2xl border border-border p-8">
          <h1 className="text-2xl font-display font-medium text-foreground mb-1">Admin Login</h1>
          <p className="text-muted-foreground text-sm mb-6">Sign in to manage your salon dashboard.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@eliteedge.com" required className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" />
            </div>
            {error && <div className="bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-xl">{error}</div>}
            <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-background py-3 font-semibold text-[12px] tracking-[0.1em] uppercase transition-all flex items-center justify-center">
              {loading ? <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" /> : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
