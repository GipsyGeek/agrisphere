import { Outlet, Link } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link to="/" className="text-lg font-semibold text-green-700">
            AgriSphere Admin
          </Link>

          <div className="text-sm text-slate-500">Dashboard Shell</div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
}