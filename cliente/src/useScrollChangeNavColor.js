import { useState, useEffect } from 'react';

const navTop = {
    backgroundColor: "rgba(0, 42, 55, 0)",
    transition: "all 0.3s"
  };
  const navScroll = {
    backgroundColor: "rgba(0, 42, 55, 0.95)",
    transition: "all 0.3s"
  };

const useScrollChangeNavColor = () => {
    const [navState, setNavState] = useState(navTop);

    useEffect(() => {
        window.onscroll = () => {
            window.scrollY >= 50 ? setNavState(navScroll) : setNavState(navTop);
        };
      }, []);

      return { navState }
}

export default useScrollChangeNavColor;