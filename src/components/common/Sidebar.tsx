"use client";

import { useSession } from "next-auth/react";

interface Route {
  id: number;
  routeName: string;
  path: string;
  userType: "COMMON" | "AGENT" | "USER" | "ADMIN";
}

const ROUTES: Route[] = [
  {
    id: 1,
    routeName: "Dashboard",
    path: "/dashboard",
    userType: "COMMON",
  },
  {
    id: 1,
    routeName: "Dashboard 2",
    path: "/dashboard",
    userType: "ADMIN",
  },
  {
    id: 1,
    routeName: "Dashboard 3",
    path: "/dashboard",
    userType: "AGENT",
  },
  {
    id: 1,
    routeName: "Dashboard 4",
    path: "/dashboard",
    userType: "USER",
  },
];
const Sidebar = () => {
  const { data: session } = useSession();
  const userType = session?.user.type;
  const routeList = [
    ...ROUTES.filter((r) => r.userType === "COMMON" || r.userType === userType),
  ];
  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {routeList?.map((item) => (
            <li key={item.id}>{item.routeName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
