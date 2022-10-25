import { useState, useEffect } from 'react';

const useStickyAppBar = () => {

  const [showStickyAppBar, setShowStickyAppBar] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset > 150) {
        setShowStickyAppBar(true);
      } else {
        setShowStickyAppBar(false);
      }     
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return showStickyAppBar
}

export default useStickyAppBar;
