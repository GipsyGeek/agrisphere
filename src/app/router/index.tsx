import { createBrowserRouter, Navigate } from "react-router-dom";

import { PublicLayout } from "@/app/layouts/public-layout";
import { DashboardLayout } from "@/app/layouts/dashboard-layout";
import { AuthLayout } from "@/app/layouts/auth-layout";
import { RequireAuth } from "@/app/routes/require-auth";

import { LandingPage } from "@/features/landing/pages/landing-page";

import { LoginPage } from "@/features/auth/pages/login-page";
import { RegisterPage } from "@/features/auth/pages/register-page";
import { ForgotPasswordPage } from "@/features/auth/pages/forgot-password-page";

import { MarketplacePage } from "@/features/marketplace/pages/marketplace-page";

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
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
    ],
  },

  {
    element: <RequireAuth />,
    children: [
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
                  This is the dashboard shell. We'll build the real modules here
                  next.
                </p>
              </div>
            ),
          },

          {
            path: "marketplace",
            element: <MarketplacePage />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);