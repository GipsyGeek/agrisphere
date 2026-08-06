import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function AppShell() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}