import { useEffect, useRef } from "react";

export const useClickOutside = (handler, disabled, listenCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!disabled && ref.current && !ref.current.contains(e.target))
        handler();
    };

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, disabled, listenCapturing]);

  return ref;
};
