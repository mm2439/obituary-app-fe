import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(null);

  const calculateBreakpoint = () => {
    const width = document.documentElement.clientWidth;
    console.log("Window width:", width);

    if (width >= 1280) return "desktop";
    if (width >= 1024) return "tablet";
    if (width >= 740) return "tablet";
    return "mobile";
  };

  useEffect(() => {
    const update = () => {
      const bp = calculateBreakpoint();
      setBreakpoint((prev) => {
        if (prev !== bp) {
          console.log("Breakpoint changed:", bp);
          return bp;
        }
        return prev; // avoid unnecessary re-renders
      });
    };

    update(); // run on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
};
