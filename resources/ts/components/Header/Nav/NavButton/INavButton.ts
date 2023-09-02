import React from "react";
import {IThemeContext} from "../../../../context/ThemeContext";

export interface INavButtonProps{
    onClick: () => void;//Function called on click
    disableAnimation?:boolean;//Define if animations should be enabled
    disabled?: boolean;//Define if the button should be disabled
    children?: React.ReactNode | React.ReactNode[];//Nothing will be displayed in the body otherwise
    style?: INavButtonStyle;//Custom styles
    classNames?: INavButtonClassNames;//Custom classNames
    theme?: IThemeContext;//Define light or dark
}
export interface INavButtonStyle{
    button: React.CSSProperties;
}
export interface INavButtonClassNames{
    button: string;
}
