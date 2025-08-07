import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Keep existing route definitions for compatibility
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

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: any) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico' ||
    pathname === '/reset-password'
  ) {
    return response
  }

  // Get user session from Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get user profile if authenticated
  let userProfile = null
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    userProfile = profile
  }

  // Legacy token-based authentication fallback
  const legacyToken = request.cookies.get("accessToken")?.value;
  const legacyRole = request.cookies.get("role")?.value;
  const slugKey = request.cookies.get("slugKey")?.value;

  const pathParts = pathname.split("/").filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];

  const isRoleBasedRoute = pathname.startsWith('/c/') || pathname.startsWith('/p/') || pathname.startsWith('/u/');

  // Handle legacy role-based routes
  if (isRoleBasedRoute && (user || legacyToken) && (userProfile?.role || legacyRole) && slugKey) {
    return response;
  }

  // Handle registration redirects for authenticated users
  if (pathname === "/registracija" && (user || legacyToken)) {
    const role = userProfile?.role || legacyRole;
    const userSlugKey = userProfile?.slug_key || slugKey;

    if (role === "Florist" && userSlugKey) {
      return NextResponse.redirect(new URL(`/c/${userSlugKey}/menu`, request.url));
    }
    if (role === "Funeral" && userSlugKey) {
      return NextResponse.redirect(new URL(`/p/${userSlugKey}/menu`, request.url));
    }
    if (role === "User" && userSlugKey) {
      return NextResponse.redirect(
        new URL(`/u/${userSlugKey}/moj-racun`, request.url)
      );
    }
    if (role === "SUPERADMIN" || role === "Admin") {
      return NextResponse.redirect(new URL('/admin/obituaries', request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isUserRoute = USER_ROUTES.includes(pathname);
  const isAdminRoute = pathname.startsWith("/admin");

  // Allow public routes
  if (isPublicRoute) {
    return response;
  }

  // Require authentication for protected routes
  if (!user && !legacyToken) {
    return NextResponse.redirect(new URL("/registracija", request.url));
  }

  // Admin route protection
  const role = userProfile?.role || legacyRole;
  if (isAdminRoute && role !== "SUPERADMIN" && role !== "Admin") {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  // User route protection
  if (isUserRoute && role !== "User") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  // Handle legacy florist routes
  if (role === "Florist" && FLORIST_ROUTES.includes(lastSegment) && slugKey && !isRoleBasedRoute) {
    const targetUrl = `/c/${slugKey}/${lastSegment}`;
    if (pathname !== targetUrl) {
      return NextResponse.redirect(new URL(targetUrl, request.url));
    }
  }

  // Handle legacy funeral routes
  if (role === "Funeral" && FUNERAL_ROUTES.includes(lastSegment) && slugKey && !isRoleBasedRoute) {
    const targetUrl = `/p/${slugKey}/${lastSegment}`;
    if (pathname !== targetUrl) {
      return NextResponse.redirect(new URL(targetUrl, request.url));
    }
  }

  // Add user info to headers for use in pages
  if (user) {
    response.headers.set('x-user-id', user.id)
    response.headers.set('x-user-email', user.email || '')
    if (userProfile) {
      response.headers.set('x-user-role', userProfile.role || '')
      response.headers.set('x-user-slug-key', userProfile.slug_key || '')
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
