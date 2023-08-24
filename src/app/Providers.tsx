"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
function Providers({ children }: any) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
