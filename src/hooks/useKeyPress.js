import { useEffect } from "react";

export const useKeyPress = (callback, deps = []) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      callback(event);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback, ...deps]);
};
