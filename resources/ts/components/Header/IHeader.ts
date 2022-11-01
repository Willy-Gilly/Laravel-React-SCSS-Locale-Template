import {GlobalProps} from "../IMainComponent";
import {ILangOptionsProps} from "../LangOptions/ILangOptions";

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
}
