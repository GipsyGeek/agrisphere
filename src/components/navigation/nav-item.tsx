import { NavLink } from "react-router-dom";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

type NavItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export function NavItem({
  title,
  href,
  icon: Icon,
}: NavItemProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-green-600 text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        )
      }
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </NavLink>
  );
}