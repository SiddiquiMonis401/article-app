import { ReactNode, useState } from "react";
import { ChangeThemeData, ThemeData } from "../types/context.type";
import { ThemeContext } from "../context";

type ThemeProviderProps = {
  children: ReactNode;
}

export default function AppThemeProvider({ children }: ThemeProviderProps) {
  const [themeData, setThemeData] = useState<ThemeData>({
    darkMode: false,
    direction: "ltr",
  });
  const changeThemeData: ChangeThemeData = (key, value) => {
    setThemeData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ThemeContext.Provider
      value={{ themeData, onChangeThemeData: changeThemeData }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
