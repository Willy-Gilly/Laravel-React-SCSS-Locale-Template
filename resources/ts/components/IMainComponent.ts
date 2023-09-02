import {Lang} from "./Lang";
import {IThemeContext} from "../context/ThemeContext";

export interface IMainComponentProps{
    lang:Lang;
}
export interface IMainComponentStates{
    locale:string;
    auth:boolean;
    bearerToken:string;
    user:IProfile;
    page:Page;
    theme:IThemeContext|any;
}
export interface IAuth {
    token:string;
    name:string;
}
export interface APIReturn{
    success:boolean;
    data:any;
    message:string;
}
export interface IProfile {
    firstname:string;
    lastname:string;
    login:string;
    pseudo:string;
    email:string;
    profilePicture:string;
    description:string;
    token:string;
}
export enum Page{
    Main,
    ControlExample,
}
