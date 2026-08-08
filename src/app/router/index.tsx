import { createBrowserRouter, Navigate } from "react-router-dom";

import { PublicLayout } from "@/app/layouts/public-layout";
import { DashboardLayout } from "@/app/layouts/dashboard-layout";
import { AuthLayout } from "@/app/layouts/auth-layout";
import { RequireAuth } from "@/app/routes/require-auth";

import { LandingPage } from "@/features/landing/pages/landing-page";

import { LoginPage } from "@/features/auth/pages/login-page";
import { RegisterPage } from "@/features/auth/pages/register-page";
import { ForgotPasswordPage } from "@/features/auth/pages/forgot-password-page";

import { DashboardHome } from "@/features/dashboard";

import {
  MarketplacePage,
  SellProducePage,
  ProductDetailsPage,
} from "@/features/marketplace";

import { OrdersPage } from "@/features/orders";



// Future imports
// import { OrdersPage } from "@/features/orders";
// import { FarmsPage } from "@/features/farms";
// import { LogisticsPage } from "@/features/logistics";
// import { WarehousePage } from "@/features/warehouse";
// import { FinancePage } from "@/features/finance";
// import { AssistantPage } from "@/features/assistant";
// import { CommunityPage } from "@/features/community";
// import { AnalyticsPage } from "@/features/analytics";
// import { NotificationsPage } from "@/features/notifications";
// import { ProfilePage } from "@/features/profile";
// import { SettingsPage } from "@/features/settings";
// import { AdminPage } from "@/features/admin";

export const router = createBrowserRouter([
  // =========================
  // Public
  // =========================
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      // Future public pages
      // { path: "about", element: <AboutPage /> },
      // { path: "pricing", element: <PricingPage /> },
      // { path: "contact", element: <ContactPage /> },
      // { path: "faq", element: <FaqPage /> },
      // { path: "privacy", element: <PrivacyPage /> },
      // { path: "terms", element: <TermsPage /> },
    ],
  },

  // =========================
  // Authentication
  // =========================
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },

      // Future auth routes
      // { path: "verify-email", element: <VerifyEmailPage /> },
      // { path: "reset-password", element: <ResetPasswordPage /> },
      // { path: "onboarding", element: <OnboardingPage /> },
    ],
  },

  // =========================
  // Protected
  // =========================
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          // Dashboard Home
          {
            index: true,
            element: <DashboardHome />,
          },

          // Marketplace
          {
            path: "marketplace",
            element: <MarketplacePage />,
          },
          {
            path: "marketplace/new",
            element: <SellProducePage />,
          },
          {
            path: "marketplace/:id",
            element: <ProductDetailsPage />,
          },
          {
            path: "orders",
            element: <OrdersPage />,
          },

          // Orders
          // {
          //   path: "orders",
          //   element: <OrdersPage />,
          // },

          // Farm Management
          // {
          //   path: "farms",
          //   element: <FarmsPage />,
          // },

          // Logistics
          // {
          //   path: "logistics",
          //   element: <LogisticsPage />,
          // },

          // Warehouse
          // {
          //   path: "warehouse",
          //   element: <WarehousePage />,
          // },

          // Finance
          // {
          //   path: "finance",
          //   element: <FinancePage />,
          // },

          // AI Assistant
          // {
          //   path: "assistant",
          //   element: <AssistantPage />,
          // },

          // Community
          // {
          //   path: "community",
          //   element: <CommunityPage />,
          // },

          // Analytics
          // {
          //   path: "analytics",
          //   element: <AnalyticsPage />,
          // },

          // Notifications
          // {
          //   path: "notifications",
          //   element: <NotificationsPage />,
          // },

          // Profile
          // {
          //   path: "profile",
          //   element: <ProfilePage />,
          // },

          // Settings
          // {
          //   path: "settings",
          //   element: <SettingsPage />,
          // },

          // Admin
          // {
          //   path: "admin",
          //   element: <AdminPage />,
          // },
        ],
      },
    ],
  },

  // =========================
  // 404
  // =========================
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);