import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: <T extends ThemeType>(theme: T) => void;
};

const THEME_PREF_KEY = "theme-pref";
const DEFAULT_THEME = "light";

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const themePrefer = localStorage.getItem(THEME_PREF_KEY);
  const initialTheme = themePrefer ? JSON.parse(themePrefer) : DEFAULT_THEME;

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = (theme: ThemeType) => setTheme(theme);

  useEffect(
    () => localStorage.setItem(THEME_PREF_KEY, JSON.stringify(theme)),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
