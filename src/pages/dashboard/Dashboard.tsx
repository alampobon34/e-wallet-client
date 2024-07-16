"use client";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session?.user?._id);
  return (
    <div>
      <h1 className="font-serif">from proteted {JSON.stringify(session)}</h1>
    </div>
  );
};

export default Dashboard;
