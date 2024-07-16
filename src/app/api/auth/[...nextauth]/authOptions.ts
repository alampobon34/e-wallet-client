import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        phone: {},
        password: {},
      },
      async authorize(credentials, req) {
        const url = process.env.BASE_URL + "/login";
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            phone: credentials?.phone,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        if (data?.status === 200 && data?.user) {
          return data.user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.phone = user.phone;
        token.balance = user.balance;
        token.type = user.type;
        token.active = user.active;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user._id = token.id;
      session.user.name = token.name as string;
      session.user.email = token.email as string;
      session.user.phone = token.phone as number;
      session.user.balance = token.balance as number;
      session.user.type = token.type as "USER" | "AGENT" | "ADMIN";
      session.user.active = token.active as "YES" | "NO";
      session.user.accessToken = token.accessToken as string;
      return session;
    },
  },
};
