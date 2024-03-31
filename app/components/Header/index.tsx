"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={styles.root}>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>theme light</button>
      ) : (
        <button onClick={() => setTheme("dark")}>theme dark</button>
      )}
    </header>
  );
};
