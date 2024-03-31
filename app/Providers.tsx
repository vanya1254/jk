"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

type ProviderPropsT = {
  children: React.ReactNode;
};

const Providers: React.FC<ProviderPropsT> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
