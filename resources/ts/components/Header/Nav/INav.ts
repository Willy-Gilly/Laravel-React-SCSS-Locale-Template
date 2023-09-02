
import React from "react";
import {IThemeContext} from "../../../context/ThemeContext";

export interface INavProps{
    children?: React.ReactNode | React.ReactNode[];
    theme?: IThemeContext;
}
export interface INavStates{
    showingLoginModal:boolean;
    showingRegisterModal:boolean;
    showingConfirmationLogoutModal:boolean;

    loginInput:string;
    passwordInput:string;
    canRegister:boolean;

    firstNameInput:string;
    lastNameInput:string;
    loginRInput:string;
    pseudoInput:string;
    emailRInput:string;
    passwordRInput:string;
}
