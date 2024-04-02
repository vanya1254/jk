"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";

type ThemeProviderT = {
  className: string | undefined;
};

export const ThemeSwitcher: React.FC<ThemeProviderT> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FiSun /> : <BsMoon />}
    </button>
  );
};
