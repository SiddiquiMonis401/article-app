import { Direction } from "@mui/system";

export type ThemeData ={ 
    darkMode: boolean;
    direction?: Direction; 
}

export type ChangeThemeData = (key: keyof ThemeData, value: boolean | Direction) => void;

export type ThemeState = {
    themeData: ThemeData;
    onChangeThemeData: ChangeThemeData; 
}
