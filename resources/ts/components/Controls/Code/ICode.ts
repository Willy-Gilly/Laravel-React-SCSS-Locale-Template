import React from "react";

export interface ICodeProps{
    disabled?: boolean;//Define if the Code should be disabled
    disableAnimation?:boolean;//Define if animations should be enabled
    style?: ICodeStyle;//Custom styles
    classNames?: ICodeClassNames;//Custom classNames
    theme?: ICodeTheme;//Define light or dark
    display?: ICodeDisplay;//Define how it will look as default
    code:string;
    //language:ICodeLanguage;
}
export interface ICodeStates{
    renderedCode:React.ReactNode | React.ReactNode[];
}
export enum ICodeLanguage{
    HTML,
    TS
}
export enum ICodeTheme{
    Dark,
    Light
}
export enum ICodeDisplay{
    HTML,
    TS
}
export interface ICodeStyle{
    root: React.CSSProperties;
}
export interface ICodeClassNames{
    root: string;
}

// export interface HTMLElement{
//     position:number;
//     value:string;
//     type: HTMLTypes;
// }
// export enum HTMLTypes{
//     OpeningElement,
//     ClosingNoPropsElement,
//     ClosingElement,
//     Attribute,
//     EqualSign,
//     OpeningCurlyBracket,
//     ClosingCurlyBracket,
//     AttributeValue,
//     StringValue,
//     Break
// }
