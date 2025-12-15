import React, { createContext, useContext, useState, useEffect } from "react";

type ColorPalette = "modern" | "classic";

interface ThemeContextType {
  colorPalette: ColorPalette;
  setColorPalette: (palette: ColorPalette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorPalette, setColorPaletteState] = useState<ColorPalette>(() => {
    const saved = localStorage.getItem("color-palette");
    return (saved as ColorPalette) || "classic";
  });

  const setColorPalette = (palette: ColorPalette) => {
    setColorPaletteState(palette);
    localStorage.setItem("color-palette", palette);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", colorPalette);
  }, [colorPalette]);

  return (
    <ThemeContext.Provider value={{ colorPalette, setColorPalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
