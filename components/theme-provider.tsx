"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { createContext, useContext, useState, useEffect } from "react";

type ColorTheme = "default" | "blue" | "green" | "purple" | "orange";

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("default");
  const [mounted, setMounted] = useState(false);

  // Apply the color theme to the document
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme | null;
    if (savedTheme) {
      setColorTheme(savedTheme);
      document.documentElement.setAttribute("data-color-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-color-theme", colorTheme);
      localStorage.setItem("color-theme", colorTheme);
    }
  }, [colorTheme, mounted]);

  const value = {
    colorTheme,
    setColorTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeContext.Provider>
  );
}

export const useColorTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ThemeProvider");
  }
  return context;
};