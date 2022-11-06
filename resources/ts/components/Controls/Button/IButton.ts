import React, {CSSProperties} from "react";

export interface IButtonProps{
    children?: React.ReactChild | React.ReactChild[];//Nothing will be displayed in the body otherwise
    onClick: () => void;//Function called on click
    disabled?: boolean;//Define if the button should be disabled
    disableAnimation?:boolean;//Define if animations should be enabled
    style?: IButtonStyle;//Custom styles
    classNames?: IButtonClassNames;//Custom classNames
    theme?: IButtonTheme;//Define light or dark
    display?: IButtonDisplay;//Define how it will look as default
}
export interface IButtonStates{

}
export enum IButtonTheme{
    Dark,
    Light
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
