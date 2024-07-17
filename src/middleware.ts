import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/auth"];
const protectedRoutes = ["/dashboard"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathName = request.nextUrl.pathname;
  if (token && publicRoutes.includes(pathName)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!token && protectedRoutes.includes(pathName)) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  return NextResponse.next();
}
