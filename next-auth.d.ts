import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    accessToken: string;
  }

  interface Session extends DefaultSession {
    user: User;
    expires: string;
    error: string;
  }
}
