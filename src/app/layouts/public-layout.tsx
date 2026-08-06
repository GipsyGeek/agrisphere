import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-green-700"
          >
            AgriSphere
          </Link>

          <nav className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link to="/auth/login">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}