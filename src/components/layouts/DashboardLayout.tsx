import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

interface Props {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="mx-auto max-w-7xl px-4 md:px-0">{children}</div>
    </div>
  );
};

export default DashboardLayout;
