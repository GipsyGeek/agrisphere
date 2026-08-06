import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/services/auth/auth-service";
import { toast } from "sonner";

export function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUpWithEmail(email, password, fullName);

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created. Check your email if confirmation is enabled.");
    navigate("/auth/login");
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-6 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
        <p className="text-sm text-slate-600">
          Join AgriSphere as a farmer, buyer, supplier, transporter, or business.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Full name</span>
          <input
            type="text"
            placeholder="Jane Doe"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            placeholder="Create a strong password"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button type="submit" className="h-11 rounded-xl" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="text-sm text-slate-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-700 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}