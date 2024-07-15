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
        console.log(credentials);
        // const url = "http://localhost:8000/api/auth/login/";
        // const response = await fetch(url, {
        //   method: "POST",
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   }),
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        // });
        // const data = await response.json();
        // console.log("data", data);
        // if (data?.status === 200 && data?.user) {
        //   return data.user;
        // }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken as string,
          refreshToken: token.refreshToken as string,
          id: token.id,
        },
        error: token.error,
      };
    },
  },
};
