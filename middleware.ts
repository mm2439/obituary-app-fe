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

const FLORIST_ROUTES = ["spletna-stran", "nasi_podatki"];
const FUNERAL_ROUTES = ["spletna-stran", "nasi_podatki"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;
  const slugKey = request.cookies.get("slugKey")?.value;

  const pathParts = pathname.split("/").filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];

  // ✅ If user is logged in and tries to visit /registrationpage, redirect them accordingly
  if (pathname === "/registrationpage" && token) {
    if (role === "Florist" && slugKey) {
      return NextResponse.redirect(new URL(`/c/${slugKey}/menu`, request.url));
    }
    if (role === "Funeral" && slugKey) {
      return NextResponse.redirect(new URL(`/p/${slugKey}/menu`, request.url));
    }
    if (role === "User" && slugKey) {
      return NextResponse.redirect(
        new URL(`/u/${slugKey}/moj-racun`, request.url)
      );
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isUserRoute = USER_ROUTES.includes(pathname);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/registrationpage", request.url));
  }

  if (isUserRoute && role !== "User") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  if (role === "Florist" && FLORIST_ROUTES.includes(lastSegment) && slugKey) {
    const targetUrl = `/c/${slugKey}/${lastSegment}`;
    if (pathname !== targetUrl) {
      return NextResponse.redirect(new URL(targetUrl, request.url));
    }
  }

  if (role === "Funeral" && FUNERAL_ROUTES.includes(lastSegment) && slugKey) {
    const targetUrl = `/p/${slugKey}/${lastSegment}`;
    if (pathname !== targetUrl) {
      return NextResponse.redirect(new URL(targetUrl, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/registrationpage",
    "/moj-racun",
    "/moji-prispevki",
    "/obletnice",
    "/pregled",
    "/pregled2",
    "/user-accounts-dashboard",
    "/potrditev-objave",
    "/c/:slug/:page*",
    "/p/:slug/:page*",
  ],
};
