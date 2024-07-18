import { Route } from "../../types/types";

export const ROUTES: Route[] = [
  {
    id: 1,
    routeName: "Dashboard",
    path: "/dashboard",
    userType: "COMMON",
  },
  {
    id: 2,
    routeName: "Manage Users",
    path: "/manage-users",
    userType: "ADMIN",
  },
  {
    id: 3,
    routeName: "System Monitoring",
    path: "/system-monitoring",
    userType: "ADMIN",
  },
  {
    id: 5,
    routeName: "Manage Transactions",
    path: "/manage-transactions",
    userType: "AGENT",
  },
  {
    id: 5,
    routeName: "Transaction History",
    path: "/transaction-history",
    userType: "USER_AND_AGENT",
  },
];
