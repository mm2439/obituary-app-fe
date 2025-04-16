// hooks/useScrollbarWidth.js
import { useState, useEffect } from 'react';

const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      // Create a temporary div
      const div = document.createElement('div');
      div.style.visibility = 'hidden';
      div.style.overflow = 'scroll';
      div.style.msOverflowStyle = 'scrollbar';
      document.body.appendChild(div);

      // Create a temporary inner div
      const innerDiv = document.createElement('div');
      div.appendChild(innerDiv);

      // Calculate the scrollbar width
      const scrollbarWidth = div.offsetWidth - innerDiv.offsetWidth;

      // Remove the temporary divs
      document.body.removeChild(div);

      setScrollbarWidth(scrollbarWidth);
    };

    calculateScrollbarWidth();
    window.addEventListener('resize', calculateScrollbarWidth);

    return () => {
      window.removeEventListener('resize', calculateScrollbarWidth);
    };
  }, []);

  return scrollbarWidth;
};

export default useScrollbarWidth;
