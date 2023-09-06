import React from "react";

export interface Api {
    get<T>(uri:string):Promise<T>;
    post<T>(uri:string,body:any):Promise<T>;
    upload<T>(uri:string,body:any):Promise<T>;
}
export const APIContextDefaultValue:Api = {
    get: undefined, post: undefined, upload:undefined
};
export const APIContext = React.createContext<Api>(APIContextDefaultValue);
