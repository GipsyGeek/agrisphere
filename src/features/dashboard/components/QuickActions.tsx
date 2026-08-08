import { Link } from "react-router-dom";
import {
  Plus,
  ShoppingBag,
  Truck,
  Bot,
  Warehouse,
  Wallet,
} from "lucide-react";

const actions = [
  {
    title: "Sell Produce",
    icon: ShoppingBag,
    path: "/dashboard/marketplace/create",
  },
  {
    title: "Add Farm",
    icon: Plus,
    path: "/dashboard/farms/new",
  },
  {
    title: "Find Transport",
    icon: Truck,
    path: "/dashboard/logistics",
  },
  {
    title: "Warehouse",
    icon: Warehouse,
    path: "/dashboard/warehouse",
  },
  {
    title: "Finance",
    icon: Wallet,
    path: "/dashboard/finance",
  },
  {
    title: "AI Assistant",
    icon: Bot,
    path: "/dashboard/ai",
  },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className="group rounded-xl border p-5 transition hover:border-green-500 hover:bg-green-50"
            >
              <Icon className="mb-3 h-8 w-8 text-green-600 transition group-hover:scale-110" />

              <p className="font-medium">
                {action.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}