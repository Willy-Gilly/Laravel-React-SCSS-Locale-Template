import React from "react";

export interface IModalProps{
    showing:boolean;//Must be true to show
    close:() => void;//The method called to hide the component
    children?: React.ReactChild | React.ReactChild[];//Nothing will be displayed in the body otherwise
    hasHeader?: boolean;//Default is true - Displays header
    headerTitle?:string;//Displayed only if header
    hideOnEmptyClick?:boolean;//Default is true
    hasClosingButton?:boolean;//Default is true
    modalTheme?:ModalTheme;//Define if the modal must be light or dark
    disableAnimation?:boolean;//Define if animations should be enabled
    style?: IModalStyle;//Custom styles
    classNames?: IModalClassNames//Custom classNames
}
export interface IModalStates{
    canLeave:boolean;
}
export enum ModalTheme{
    Dark,
    Light
}
export interface IModalStyle{
    calloutStyle?: React.CSSProperties;
    modalStyle?: React.CSSProperties;
    modalHeaderStyle?: React.CSSProperties;
    modalTitleStyle?: React.CSSProperties;
    modalCloseButtonStyle?: React.CSSProperties;
    modalSeparatorStyle?: React.CSSProperties;
    modalBodyStyle?: React.CSSProperties;
}
export interface IModalClassNames{
    calloutStyle?: string;
    modalStyle?: string;
    modalHeaderStyle?: string;
    modalTitleStyle?: string;
    modalCloseButtonStyle?: string;
    modalSeparatorStyle?: string;
    modalBodyStyle?: string;
}
