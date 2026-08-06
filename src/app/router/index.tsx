import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "@/app/layouts/public-layout";
import { DashboardLayout } from "@/app/layouts/dashboard-layout";
import { LandingPage } from "@/features/landing/pages/landing-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="mt-2 text-slate-600">
              This is the dashboard shell. We’ll build the real modules here next.
            </p>
          </div>
        ),
      },
    ],
  },
]);