import React, { createContext, useContext, useState, ReactNode } from "react";
import {  createTheme, Theme } from '@mui/material/styles';


interface ContextProps {
    darkTheme: Theme;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>> ;
    darkMode: boolean;
}

export const Context = createContext<ContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(Context);
  if (!context) { 
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
 
       // -------------------------------------------


interface ThemeProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
  
    const darkTheme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });
  
    return (
      <Context.Provider value={{ darkTheme, setDarkMode, darkMode }}>
        {children}
      </Context.Provider>
    );
  };
