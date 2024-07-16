"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import NextAuthProvider from "@/providers/NextAuthProvider";
interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();
const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider>{children}</NextAuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
