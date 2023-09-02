import React from "react";
import {IThemeContext} from "../../../context/ThemeContext";

export interface ICardProps{
    children?: React.ReactNode | React.ReactNode[];//Nothing will be displayed in the body otherwise
    disableAnimation?:boolean;//Define if animations should be enabled
    style?: ICardStyle;//Custom styles
    classNames?: ICardClassNames;//Custom classNames
    theme?: IThemeContext;//Define light or dark
    collapsable?:boolean;//Define if the card can be collapsed
    collapsed?:boolean;//Define if the component should be collapsed;
    headerContent?:string;//String Content of the header
    position?:ICardPosition;//Define the position
}
export enum ICardPosition{
    left,//default
    center,
    right,
}
export interface ICardStyle{
    root?:React.CSSProperties;
    closingButton?:React.CSSProperties;
    title?:React.CSSProperties;
    separator?:React.CSSProperties;
}
export interface ICardClassNames{
    root?: string;
    closingButton?:string;
    title?:string;
    separator?:string;
}
