import { isDev } from '@/config/apiConfig';
import { useRouter } from 'next/navigation';

export const useSafeNavigation = () => {
  const router = useRouter();

  const navigateToRoleBasedRoute = (role: string, slugKey: string, isDesktop: boolean = false) => {
    // replace instead of push to avoid adding to history stack
    // a small delay to avoid race conditions with middleware
    setTimeout(() => {
      let targetRoute = '';
      
      if (role === "User") {
        targetRoute = isDesktop 
          ? `/u/${slugKey}/moj-racun`
          : `/u/${slugKey}/menu`;
      } else if (role === "Florist") {
        targetRoute = `/c/${slugKey}/menu`;
      } else if (role === "Funeral") {
        targetRoute = `/p/${slugKey}/menu`;
      }

      if (targetRoute) {
        router.replace(targetRoute);
      }
    }, 100);
  };

  return { navigateToRoleBasedRoute };
};

// Alternative approach: Use window.location for immediate redirect
export const redirectToRoleBasedRoute = (role: string, slugKey: string, isDesktop: boolean = false) => {
  let targetRoute = '';
  console.log(role, slugKey)
  if (role === "SUPERADMIN") {
    targetRoute = "/admin/Obituaries"
  } else if (role === "User") {
    targetRoute = isDesktop 
      ? `/u/${slugKey}/moj-racun`
      : `/u/${slugKey}/menu`;
  } else if (role === "Florist") {
    targetRoute = `/c/${slugKey}/menu`;
  } else if (role === "Funeral") {
    targetRoute = `/p/${slugKey}/menu`;
  } else {
    targetRoute = "/"
  }

  console.log(targetRoute)
  if (targetRoute && typeof window !== 'undefined') {
    // In development, use a small delay to avoid race conditions
    const isDevelopment = isDev;
    if (isDevelopment) {
      setTimeout(() => {
        window.location.href = targetRoute;
      }, 50);
    } else {
      window.location.href = targetRoute;
    }
  }
}; 