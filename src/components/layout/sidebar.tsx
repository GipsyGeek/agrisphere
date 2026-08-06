import { Link } from "react-router-dom";
import { navigation } from "@/config/navigation";
import { NavItem } from "@/components/navigation/nav-item";

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 border-r bg-white lg:flex lg:flex-col">
      <div className="border-b px-6 py-5">
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-green-700"
        >
          AgriSphere
        </Link>

        <p className="mt-1 text-sm text-slate-500">
          Agricultural Ecosystem
        </p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navigation.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>

      <div className="border-t p-4">
        <p className="text-xs text-slate-500">
          AgriSphere v0.1.0
        </p>
      </div>
    </aside>
  );
}