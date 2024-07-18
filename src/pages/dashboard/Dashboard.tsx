"use client";
import AccountInformationCard from "@/components/cards/AccountInformationCard";
import ServiceCard from "@/components/cards/ServiceCard";
import { SERVICES } from "@/data/services";
import { useSession } from "next-auth/react";
import Image from "next/image";
const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-2">
      <AccountInformationCard />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
