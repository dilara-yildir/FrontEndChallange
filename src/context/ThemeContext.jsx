import { createContext, useContext, useState, useEffect } from "react";
import data from "../data.json";

// Context oluştur
const ThemeContext = createContext();

// Provider bileşeni
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [languageData, setLanguageData] = useState(data[0]["en"]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = (mode) => {
    if (mode === "light") {
      setDarkMode(false);
    } else if (mode === "dark") {
      setDarkMode(true);
    }
  };

  const toggleData = (language) => {
    setSelectedLanguage(language);
    const selectedData = data[0][language] || data[1][language];
    setLanguageData(selectedData);
  };
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        languageData,
        toggleData,
        selectedLanguage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
