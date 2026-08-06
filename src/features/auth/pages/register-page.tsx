import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function RegisterPage() {
  return (
    <div className="mx-auto grid w-full max-w-md gap-6 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
        <p className="text-sm text-slate-600">
          Join AgriSphere as a farmer, buyer, supplier, transporter, or business.
        </p>
      </div>

      <form className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Full name</span>
          <input
            type="text"
            placeholder="Jane Doe"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            placeholder="Create a strong password"
            className="h-11 rounded-xl border px-4 outline-none focus:border-green-500"
          />
        </label>

        <Button type="submit" className="h-11 rounded-xl">
          Create account
        </Button>
      </form>

      <p className="text-sm text-slate-600">
        Already have an account?{" "}
        <Link to="/login" className="text-green-700 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}