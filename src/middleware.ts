import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ROUTES } from "./data/routes";
import { withAuth } from "next-auth/middleware";
const publicRoutes = ["/auth"];
const commonPrivateRoutes = ["/dashboard"];
const userRoutes = ["/dashboard", "/transaction-history"];
const agentRoutes = ["/manage-transactions", "/transaction-history"];
const adminRoutes = ["/manage-users", "/system-monitoring"];
export default async function middleware(req: NextRequest) {
  const routeList = ROUTES.map((r) => r.path);
  const token = await getToken({ req });
  if (
    token === null &&
    routeList.some((r) => req.nextUrl.pathname.startsWith(r))
  ) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  if (token && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return NextResponse.next();
}
