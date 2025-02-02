"use client";
import { ROUTES } from "@/data/routes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Sidebar = () => {
  const { data: session } = useSession();
  const userType = session?.user.type;
  const routeList = [
    ...ROUTES.filter(
      (r) =>
        r.userType === "COMMON" ||
        r.userType === "USER_AND_AGENT" ||
        r.userType === userType
    ),
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
            <li key={item.id}>
              <Link href={item.path}>{item.routeName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
