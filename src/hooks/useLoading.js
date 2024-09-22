import { useCallback, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const showLoader = useCallback(() => setLoading(true), []);
  const hideLoader = useCallback(() => setLoading(false), []);

  return { loading, showLoader, hideLoader };
};