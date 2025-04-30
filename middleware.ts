import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = ["/", "/registrationpage"];
const PROTECTED_ROUTES = [
  // "/moj-racun",
  // "/moji-prispevki",
  // "/obletnice",
  // "/pregled",
  // "/pregled2",
  // "/user-accounts-dashboard",
  // "/potrditev-objave",
  "/asdfasdfasdfasdf"
];

export function middleware(request: NextRequest) {
  console.log("this function is running");
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/registrationpage", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Apply middleware to specific protected routes
export const config = {
  matcher: [
    "/moj-racun",
    "/moji-prispevki",
    "/obletnice",
    "/pregled",
    "/pregled2",
    "/user-accounts-dashboard",
    "/potrditev-objave",
  ],
};
