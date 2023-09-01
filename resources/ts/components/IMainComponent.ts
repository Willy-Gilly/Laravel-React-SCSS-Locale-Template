import {Lang} from "./Lang";
import {IThemeContext} from "../Context/ThemeContext";

export interface IMainComponentProps{
    lang:Lang;
}
export interface IMainComponentStates{
    locale:string;
    auth:boolean;
    bearerToken:string;
    user:Profile;
    page:Page;
    theme:IThemeContext|any;
}
export interface Auth{
    token:string;
    name:string;
}
export interface APIReturn{
    success:boolean;
    data:any;
    message:string;
}
export interface Profile{
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
