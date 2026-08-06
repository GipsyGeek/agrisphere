import {
  LayoutDashboard,
  Store,
  Sprout,
  ShoppingCart,
  Truck,
  Warehouse,
  Bot,
  Wallet,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Marketplace",
    href: "/marketplace",
    icon: Store,
  },
  {
    title: "Farm Manager",
    href: "/farms",
    icon: Sprout,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Logistics",
    href: "/logistics",
    icon: Truck,
  },
  {
    title: "Warehouse",
    href: "/warehouse",
    icon: Warehouse,
  },
  {
    title: "AI Assistant",
    href: "/assistant",
    icon: Bot,
  },
  {
    title: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    title: "Community",
    href: "/community",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];