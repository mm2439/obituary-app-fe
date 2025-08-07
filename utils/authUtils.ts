import { useRouter } from 'next/navigation';
import authService from '@/services/auth-service';
import toast from 'react-hot-toast';
import { createBrowserClient } from '@supabase/ssr';

export const clearClientSideAuth = () => {
  // Clear localStorage
  localStorage.removeItem("user");
  localStorage.removeItem("access-token");
  localStorage.removeItem("refresh-token");
  
  // Clear cookies on client side
  const isProd = typeof window !== 'undefined' && window.location.hostname.includes("osmrtnica.com");
  
  // Clear all auth cookies
  document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "slugKey=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  
  if (isProd) {
    document.cookie = "accessToken=; path=/; domain=.osmrtnica.com; secure; sameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "role=; path=/; domain=.osmrtnica.com; secure; sameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "slugKey=; path=/; domain=.osmrtnica.com; secure; sameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      // Create Supabase client
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // Sign out from Supabase
      await supabase.auth.signOut();

      // Call legacy server logout for backward compatibility
      try {
        await authService.logout();
      } catch (legacyError) {
        console.warn("Legacy logout failed:", legacyError);
      }

      // Clear client-side data
      clearClientSideAuth();

      // Redirect to home
      router.push("/");
      toast.success("Logout Successful!");

    } catch (err) {
      console.error("Error during logout:", err);
      // Even if logout fails, clear client-side data
      clearClientSideAuth();
      router.push("/");
    }
  };

  return { logout };
};

// Check if user is authenticated (checks both Supabase and localStorage)
export const isAuthenticated = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;

  try {
    // Check Supabase auth first
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      return true;
    }
  } catch (error) {
    console.warn("Supabase auth check failed:", error);
  }

  // Fallback to localStorage check for backward compatibility
  const user = localStorage.getItem("user");
  return !!user;
};

// Synchronous version for backward compatibility
export const isAuthenticatedSync = (): boolean => {
  if (typeof window === 'undefined') return false;

  const user = localStorage.getItem("user");
  return !!user;
};

// Get user data (tries Supabase first, then localStorage)
export const getUser = async () => {
  if (typeof window === 'undefined') return null;

  try {
    // Try to get user from Supabase first
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      // Get profile data
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profile) {
        return {
          id: user.id,
          email: user.email,
          role: profile.role,
          slugKey: profile.slug_key,
          name: profile.name,
          company: profile.company,
          region: profile.region,
          city: profile.city
        };
      }
    }
  } catch (error) {
    console.warn("Supabase user fetch failed:", error);
  }

  // Fallback to localStorage
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Synchronous version for backward compatibility
export const getUserSync = () => {
  if (typeof window === 'undefined') return null;

  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};