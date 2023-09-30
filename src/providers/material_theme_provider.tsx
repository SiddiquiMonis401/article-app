import { ReactNode, useContext } from "react";
import { ThemeContext } from "../context";
import { ThemeProvider, createTheme } from "@mui/material";

type ThemeProviderProps = {
  children: ReactNode;
}

export default function MaterialThemeProvider({ children }: ThemeProviderProps) {
    const { themeData: { darkMode, direction } } = useContext(ThemeContext);
    const theme = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
      direction,
    });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
