import React from "react";
export enum IThemeContext{
    Dark,Light
}
export const ThemeContextDefaultValue = IThemeContext.Light;
export const ThemeContext = React.createContext(ThemeContextDefaultValue);
