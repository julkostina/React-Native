import { createContext, useContext, useState } from "react";
import { Colors } from "../constants/Colors";
import { Appearance } from 'react-native'
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
