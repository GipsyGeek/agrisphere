import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/services/auth/auth-service";
import { toast } from "sonner";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const { error } = await signInWithEmail(email, password);

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Logged in successfully");
    navigate("/dashboard");
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-6 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-slate-600">
          Sign in to manage your marketplace, orders, and dashboard.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border px-4 outline-none ring-0 focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            className="h-11 rounded-xl border px-4 outline-none ring-0 focus:border-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button type="submit" className="h-11 rounded-xl" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="flex items-center justify-between text-sm">
        <Link to="/auth/forgot-password" className="text-green-700 hover:underline">
          Forgot password?
        </Link>
        <Link to="/auth/register" className="text-slate-600 hover:text-slate-900">
          Create account
        </Link>
      </div>
    </div>
  );
}