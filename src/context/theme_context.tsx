import { createContext } from "react";
import { ThemeState } from "../types/context.type";

const initialThemeState: ThemeState = {
    themeData: {
        darkMode: false,
        direction: 'ltr',
    },
    onChangeThemeData: (_key, _value) => {},
}

export const ThemeContext = createContext(initialThemeState);

