import {
  Package,
  ShoppingCart,
  Wallet,
  Sprout,
} from "lucide-react";

const stats = [
  {
    title: "Products",
    value: "12",
    icon: Package,
  },
  {
    title: "Orders",
    value: "5",
    icon: ShoppingCart,
  },
  {
    title: "Revenue",
    value: "KES 42,500",
    icon: Wallet,
  },
  {
    title: "Farms",
    value: "3",
    icon: Sprout,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                {stat.title}
              </span>

              <Icon className="h-5 w-5 text-green-600" />
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              {stat.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}