import {IMainLangFile, Lang} from "./Lang";

export interface IMainComponentProps{
    lang:Lang;
}
export interface IMainComponentStates{
    locale:string;
    auth:boolean;
    bearerToken:string;
    user:Profile;
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
export interface GlobalProps{
    lang:IMainLangFile;
    user:Profile;
    auth:boolean;
    loginF: (credential:string, password:string) => void;
    logoutF: () => void;
    registerF: (firstname:string,lastname:string,login:string,pseudo:string,email:string,password:string) => void;
}
