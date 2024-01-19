import React, { createContext, useContext, useState, ReactNode } from "react";
import {  createTheme, Theme } from '@mui/material/styles';


interface ThemeContextProps {
    darkTheme: Theme;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>> ;
    darkMode: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
 
       // -------------------------------------------


interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);
  
    const darkTheme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });
  
    return (
      <ThemeContext.Provider value={{ darkTheme, setDarkMode, darkMode }}>
        {children}
      </ThemeContext.Provider>
    );
  };