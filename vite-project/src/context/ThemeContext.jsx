import { createContext, useContext, useState, useEffect } from 'react';

// Context oluştur
const ThemeContext = createContext();

// Provider bileşeni
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = (mode) => {
    if (mode === 'light') {
      setDarkMode(false);
    } else if (mode === 'dark') {
      setDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
