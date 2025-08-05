import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { isDev } from "./config/apiConfig";

const PUBLIC_ROUTES = ["/", "/registracija"];

const USER_ROUTES = [
  "/moj-racun",
  "/moji-prispevki",
  "/obletnice",
  "/pregled",
  "/pregled2",
  "/user-accounts-dashboard",
  "/potrditev-objave",
];

const ADMIN_ROUTES = ["/admin"];

const FLORIST_ROUTES = ["spletna-stran", "nasi_podatki"];
const FUNERAL_ROUTES = ["spletna-stran", "nasi_podatki"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;
  const slugKey = request.cookies.get("slugKey")?.value;

  const pathParts = pathname.split("/").filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];

  const isRoleBasedRoute = pathname.startsWith('/c/') || pathname.startsWith('/p/') || pathname.startsWith('/u/');
  
  if (isRoleBasedRoute && token && role && slugKey) {
    return NextResponse.next();
  }

  if (pathname === "/registracija" && token && role && slugKey) {
    if (role === "Florist") {
      return NextResponse.redirect(new URL(`/c/${slugKey}/menu`, request.url));
    }
    if (role === "Funeral") {
      return NextResponse.redirect(new URL(`/p/${slugKey}/menu`, request.url));
    }
    if (role === "User") {
      return NextResponse.redirect(
        new URL(`/u/${slugKey}/moj-racun`, request.url)
      );
    }
    if (role === "SUPERADMIN") {
      return NextResponse.redirect( new URL('/admin/obituaries', request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isUserRoute = USER_ROUTES.includes(pathname);
  const isAdminRoute = pathname.startsWith("/admin");

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/registracija", request.url));
  }

  // Admin route protection - only SUPERADMIN can access
  if (isAdminRoute && role !== "SUPERADMIN") {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  if (isUserRoute && role !== "User") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  if (role === "Florist" && FLORIST_ROUTES.includes(lastSegment) && slugKey && !isRoleBasedRoute) {
    const targetUrl = `/c/${slugKey}/${lastSegment}`;
    if (pathname !== targetUrl) {
      return NextResponse.redirect(new URL(targetUrl, request.url));
    }
  }

  if (role === "Funeral" && FUNERAL_ROUTES.includes(lastSegment) && slugKey && !isRoleBasedRoute) {
    const targetUrl = `/p/${slugKey}/${lastSegment}`;
    if (pathname !== targetUrl) {
      return NextResponse.redirect(new URL(targetUrl, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/registracija",
    "/moj-racun",
    "/moji-prispevki",
    "/obletnice",
    "/pregled",
    "/pregled2",
    "/user-accounts-dashboard",
    "/potrditev-objave",
    "/admin/:path*",
    "/c/:slug/:page*",
    "/p/:slug/:page*",
    "/u/:slug/:page*",
  ],
};
