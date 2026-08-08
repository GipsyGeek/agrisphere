import { DashboardStats } from "../components/DashboardStats";
import { QuickActions } from "../components/QuickActions";
import { MarketPrices } from "../components/MarketPrices";

export function DashboardHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Good Morning 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back to AgriSphere.
        </p>
      </div>

      <DashboardStats />

      <div className="grid gap-8 lg:grid-cols-2">
        <QuickActions />
        <MarketPrices />
      </div>
    </div>
  );
}