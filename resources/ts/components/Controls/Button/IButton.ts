import React from "react";
import {IThemeContext} from "../../../Context/ThemeContext";

export interface IButtonProps{
    children?: React.ReactNode | React.ReactNode[];//Nothing will be displayed in the body otherwise
    onClick: () => any;//Function called on click
    disabled?: boolean;//Define if the button should be disabled
    disableAnimation?:boolean;//Define if animations should be enabled
    style?: IButtonStyle;//Custom styles
    classNames?: IButtonClassNames;//Custom classNames
    theme?: IThemeContext;//Define light or dark
    display?: IButtonDisplay;//Define how it will look as default
}
export enum IButtonDisplay{
    Default,
    Warning,
    Error,
    Confirm,
    Primary,
    PrimaryWarning,
    PrimaryError,
    PrimaryConfirm
}
export interface IButtonStyle{
    button: React.CSSProperties;
}
export interface IButtonClassNames{
    button: string;
}
