import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {  
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 980) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }     
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { isMobile };
};

export default useWindowSize;
