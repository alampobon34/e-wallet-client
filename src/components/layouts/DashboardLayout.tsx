import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

interface Props {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
