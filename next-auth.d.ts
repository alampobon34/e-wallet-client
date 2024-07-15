import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    phone: number;
    type: "USER" | "AGENT" | "ADMIN";
    active: "YES" | "NO";
    balance: number;
    accessToken: string;
  }

  interface Session extends DefaultSession {
    user: User;
    expires: string;
    error: string;
  }
}
