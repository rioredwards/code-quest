import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const [height, seHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    seHeight(getHeight());
    setWidth(getWidth());

    function handleResize() {
      seHeight(getHeight());
      setWidth(getWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("online", handleResize);
    };
  }, []);

  return { height, width };
}

function getHeight() {
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
}

function getWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
