import React from "react";
import {IProfile} from "../components/IMainComponent";

export interface UserContextT {
    isAuth:boolean;
    bearerToken:string;
    user:IProfile;
    login(emailOrLogin: string, password: string): void;
    logout():void;
    register(firstname:string,lastname:string,login:string,pseudo:string,email:string,password:string):void;
    updateUser(user:IProfile):void;
}
export const UserContextDefaultValue:UserContextT = {
    isAuth: false, user: undefined, bearerToken: undefined, login: undefined, register: undefined, logout: undefined,updateUser:undefined,
};
export const UserContext = React.createContext<UserContextT>(UserContextDefaultValue);
