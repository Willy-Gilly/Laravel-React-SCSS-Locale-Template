import {IButtonClassNames, IButtonStyle, IButtonTheme} from "../Button/IButton";
import React from "react";

export interface INavButtonProps{
    onClick: () => void;//Function called on click
    disableAnimation?:boolean;//Define if animations should be enabled
    disabled?: boolean;//Define if the button should be disabled
    children?: React.ReactChild | React.ReactChild[];//Nothing will be displayed in the body otherwise
    style?: IButtonStyle;//Custom styles
    classNames?: IButtonClassNames;//Custom classNames
    theme?: INavButtonTheme;//Define light or dark
}
export interface INavButtonStates{

}
export enum INavButtonTheme{
    Dark,
    Light
}
export interface INavButtonStyle{
    button: React.CSSProperties;
}
export interface INavButtonClassNames{
    button: string;
}
