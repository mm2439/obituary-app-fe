import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = ["/", "/registrationpage"];
const USER_ROUTES = [
  "/moj-racun",
  "/moji-prispevki",
  "/obletnice",
  "/pregled",
  "/pregled2",
  "/user-accounts-dashboard",
  "/potrditev-objave",
];
const FLORIST_ROUTES = ["/c/spletna-stran", "/obituaryform"];
const FUNERAL_ROUTES = ["/p/spletna-stran", "/obituaryform"];

export function middleware(request: NextRequest) {
  const pathname = request.url;
  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isUserRoute = USER_ROUTES.includes(pathname);
  const isFloristRoute = FLORIST_ROUTES.includes(pathname);
  const isFuneralRoute = FUNERAL_ROUTES.includes(pathname);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/registrationpage", request.url));
  }

  if (isUserRoute && role !== "User") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  if (isFloristRoute && role !== "Florist") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }
  if (isFuneralRoute && role !== "Funeral") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/moj-racun",
    "/moji-prispevki",
    "/obletnice",
    "/pregled",
    "/pregled2",
    "/user-accounts-dashboard",
    "/potrditev-objave",
    "/c/nase_osmrtnice",
    "/obituaryform",
    "/c/spletna-stran",
    "/p/spletna-stran",
  ],
};
