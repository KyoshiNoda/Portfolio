"use client";
import { ThemeProvider } from "next-themes";
function Providers({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
