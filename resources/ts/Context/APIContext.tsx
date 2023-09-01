import React from "react";

export interface APIContextT {
    get<T>(uri:string):Promise<T>;
    post<T>(uri:string,body:any):Promise<T>;
}
export const APIContextDefaultValue:APIContextT = {
    get: undefined, post: undefined,
};
export const APIContext = React.createContext<APIContextT>(APIContextDefaultValue);
