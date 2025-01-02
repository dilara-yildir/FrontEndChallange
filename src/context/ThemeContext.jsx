import { createContext, useContext, useState, useEffect } from "react";
import data from "../data.json";

// Context oluştur
const ThemeContext = createContext();
/* const fetchData = async () => {
  const response = await axios.get("http://localhost:3000/languages");
  console.log(response.data[0].data);
  return response.data[0].data;
};
const mainData = fetchData(); */

// Provider bileşeni
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") !== "" &&
      localStorage.getItem("darkMode") === "false"
      ? false
      : true
  );
  const [languageData, setLanguageData] = useState(
    localStorage.getItem("selectedLanguage") === "en" ? data[0].en : data[1].tr
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") !== "" &&
      localStorage.getItem("selectedLanguage") === "tr"
      ? "tr"
      : "en"
  );

  useEffect(() => {
    if (localStorage.getItem("selectedLanguage") !== "") {
      const value = localStorage.getItem("selectedLanguage");
      setSelectedLanguage(value);
      if (value === "en") {
        setLanguageData(data[0].en);
      }
      if (value === "tr") {
        setLanguageData(data[1].tr);
      }
    }
    if (localStorage.getItem("darkMode")) {
      const value = localStorage.getItem("darkMode") === "true";
      setDarkMode(value);
    }
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = (mode) => {
    if (mode === "light") {
      setDarkMode(false);
      localStorage.setItem("darkMode", false);
    } else if (mode === "dark") {
      setDarkMode(true);
      localStorage.setItem("darkMode", true);
    }
  };

  const toggleData = (language) => {
    const selectedData = data[0][language] || data[1][language];
    setLanguageData(selectedData);
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
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
