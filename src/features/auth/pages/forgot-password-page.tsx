import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { sendPasswordReset } from "@/services/auth/auth-service";
import { toast } from "sonner";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const { error } = await sendPasswordReset(email);

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Reset link sent. Check your email.");
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-6 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Reset password</h1>
        <p className="text-sm text-slate-600">
          Enter your email and we’ll send you a reset link.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
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

        <Button type="submit" className="h-11 rounded-xl" disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </Button>
      </form>

      <p className="text-sm text-slate-600">
        <Link to="/auth/login" className="text-green-700 hover:underline">
          Back to login
        </Link>
      </p>
    </div>
  );
}