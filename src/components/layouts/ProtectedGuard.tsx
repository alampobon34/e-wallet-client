"use client";
import useAuth from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
type userType = "USER" | "AGENT" | "ADMIN";
interface Props {
  children: React.ReactNode;
  guardName: userType[];
}
const ProtectedGuard = ({ children, guardName }: Props) => {
  const { data: session } = useSession();
  const userType = session?.user.type;
  if (!userType)
    return (
      <Loader className="fixed inset-0 flex justify-center items-center" />
    );

  const authorized = guardName.some((g) => g.includes(userType));
  if (authorized) {
    return <>{children}</>;
  }
  return redirect("/dashboard");
};

export default ProtectedGuard;
