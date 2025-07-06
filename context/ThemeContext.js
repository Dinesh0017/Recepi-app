// context/ThemeContext.js
import React, { createContext, useContext, useState } from "react";
import { THEMES } from "../constants/colors";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState("ocean");
  const [theme, setTheme] = useState(THEMES[currentThemeName]);

  const changeTheme = (themeName) => {
    setCurrentThemeName(themeName);
    setTheme(THEMES[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, currentThemeName, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
