import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
            Agricultural Marketplace + Ecosystem
          </span>

          <h1 className="max-w-xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Build, trade, and grow agriculture in one place.
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            AgriSphere connects farmers, buyers, suppliers, transporters, warehouses, and experts through one modern platform.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/dashboard">
              <Button size="lg">Go to Dashboard</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-4">
              <p className="text-sm text-green-700">Marketplace</p>
              <p className="mt-2 text-2xl font-semibold">Sell produce</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-sm text-amber-700">Logistics</p>
              <p className="mt-2 text-2xl font-semibold">Book transport</p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="text-sm text-sky-700">Finance</p>
              <p className="mt-2 text-2xl font-semibold">Access credit</p>
            </div>
            <div className="rounded-2xl bg-violet-50 p-4">
              <p className="text-sm text-violet-700">AI Support</p>
              <p className="mt-2 text-2xl font-semibold">Get guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}