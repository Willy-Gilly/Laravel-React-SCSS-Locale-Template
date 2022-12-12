import {GlobalProps} from "../IMainComponent";
import {ILangOptionsProps} from "../Controls/LangOptions/ILangOptions";

export interface IHeaderProps extends GlobalProps{
    strings:HeaderLang;
    langProps:ILangOptionsProps;
}
export interface IHeaderStates{

}

export interface HeaderLang{
    Nav:NavLang;
}
export interface NavLang{
    Login:string;
    Register:string;
    Logout:string;
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
}
