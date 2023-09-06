import React, { CSSProperties, ReactElement } from "react";
import {IThemeContext} from "../../../context/ThemeContext";

export interface ITextBoxProps{
    onChange: (value:string) => void;//Function called on change, must also change the value
    disabled?: boolean;//Default is false | Define if the TextBox should be disabled
    disableAnimation?:boolean;//Default is false | Define if animations should be enabled
    disableValidationStyle?:boolean;//Default is false |
    style?: ITextBoxStyle;//Custom styles
    classNames?: ITextBoxClassNames;//Custom classNames
    theme?: IThemeContext;//Define light or dark
    value:string;//Place where you store the value
    regex?:RegExp|string//regex if needed
    isPasswordInput?:boolean//False if default, hides text
    name?:string;//Helps the navigator to autocomplete
    placeholder?:string;//Display a placeholder
    onKeyPress?: (event:React.KeyboardEvent) => void;
    required?: boolean;//Define if Required
    disabledContent?:ReactElement|ReactElement[];
}
export interface ITextBoxStyle{
    textBox: CSSProperties;
}
export interface ITextBoxClassNames{
    textBox: string;
}
