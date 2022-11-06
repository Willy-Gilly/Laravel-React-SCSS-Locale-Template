import {NavLang} from "../IHeader";
import {GlobalProps} from "../../IMainComponent";
import {ILangOptionsProps} from "../../LangOptions/ILangOptions";

export interface INavProps extends GlobalProps{
    strings:NavLang;
    langProps: ILangOptionsProps;
}
export interface INavStates{
    showingLoginModal:boolean;
    showingRegisterModal:boolean;
    showingConfirmationLogoutModal:boolean;
}
