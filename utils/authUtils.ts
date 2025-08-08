import { useRouter } from 'next/navigation';
import authService from '@/services/auth-service';
import toast from 'react-hot-toast';

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
      // Call server logout
      await authService.logout();
      
      // Clear client-side data
      clearClientSideAuth();
      
      // Redirect to home
      router.push("/");
      toast.success("Logout Successful!");
      
    } catch (err) {
      console.error("Error during logout:", err);
      // Even if server logout fails, clear client-side data
      clearClientSideAuth();
      router.push("/");
    }
  };

  return { logout };
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const user = localStorage.getItem("user");
  return !!user;
};

// Get user data
export const getUser = () => {
  if (typeof window === 'undefined') return null;
  
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}; 