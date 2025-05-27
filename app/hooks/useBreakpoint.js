// hooks/useBreakpoint.js
import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    const calculateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) return setBreakpoint("mobile");
      if (width < 1024) return setBreakpoint("tablet");
      if (width < 1280) return setBreakpoint("laptop");
      setBreakpoint("desktop");
    };

    calculateBreakpoint();
    window.addEventListener("resize", calculateBreakpoint);
    return () => window.removeEventListener("resize", calculateBreakpoint);
  }, []);

  return breakpoint;
};
