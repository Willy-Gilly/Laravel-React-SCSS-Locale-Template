
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
    isUpdatingProfile:boolean;

    loginInput:string;
    passwordInput:string;
    canRegister:boolean;

    firstNameInput:string;
    lastNameInput:string;
    loginRInput:string;
    pseudoInput:string;
    emailRInput:string;
    passwordRInput:string;
    picture:File;
}

export interface NavLang{
    Login:string;
    Register:string;
    Logout:string;
    UpdateProfile:string;
    LogoutHeader:string;
    LoginInput:string;
    PasswordInput:string;
    Confirm:string;
    Cancel:string;
    FirstName:string;
    LastName:string;
    LoginF:string;
    Pseudo:string;
    Email:string;
    RegexPassword:string;
    Upload:string;
}
