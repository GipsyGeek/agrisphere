import { Link, Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link to="/" className="text-lg font-semibold tracking-tight text-green-700">
            AgriSphere
          </Link>

          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}