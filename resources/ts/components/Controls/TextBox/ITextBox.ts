import React from "react";

export interface ITextBoxProps{
    onChange: (event:React.FormEvent<HTMLInputElement>) => void;//Function called on change, must also change the value
    disabled?: boolean;//Default is false | Define if the TextBox should be disabled
    disableAnimation?:boolean;//Default is false | Define if animations should be enabled
    disableValidationStyle?:boolean;//Default is false |
    style?: ITextBoxStyle;//Custom styles
    classNames?: ITextBoxClassNames;//Custom classNames
    theme?: ITextBoxTheme;//Define light or dark
    value:string;//Place where you store the value
    regex?:RegExp|string//regex if needed
    isPasswordInput?:boolean//False if default, hides text
    name?:string;//Helps the navigator to autocomplete
    placeholder?:string;//Display a placeholder
    onKeyPress?: (event:React.KeyboardEvent) => void;
    required?: boolean;//Define if Required
}
export interface ITextBoxStates{

}
export enum ITextBoxTheme{
    Dark,
    Light
}
export interface ITextBoxStyle{
    textBox: React.CSSProperties;
}
export interface ITextBoxClassNames{
    textBox: string;
}
