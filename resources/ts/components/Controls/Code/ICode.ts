import React from "react";
import {IThemeContext} from "../../../Context/ThemeContext";

export interface ICodeProps{
    style?: ICodeStyle;//Custom styles
    classNames?: ICodeClassNames;//Custom classNames
    theme?: IThemeContext;//Define light or dark
    code:string;
    language:Language;
}
export enum Language{
    TS = "ts",
    HTML = "html"
}
export interface ICodeStyle{
    root: React.CSSProperties;
}
export interface ICodeClassNames{
    root: string;
}
export interface ICodeThemedProps{
    children: React.ReactElement|React.ReactElement[];
}
