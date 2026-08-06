import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ForgotPasswordPage() {
  return (
    <div className="mx-auto grid w-full max-w-md gap-6 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Reset password</h1>
        <p className="text-sm text-slate-600">
          Enter your email and we’ll send you a reset link.
        </p>
      </div>

      <form className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
          />
        </label>

        <Button type="submit" className="h-11 rounded-xl">
          Send reset link
        </Button>
      </form>

      <p className="text-sm text-slate-600">
        <Link to="/login" className="text-green-700 hover:underline">
          Back to login
        </Link>
      </p>
    </div>
  );
}