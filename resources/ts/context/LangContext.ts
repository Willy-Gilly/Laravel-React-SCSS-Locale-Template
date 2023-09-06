import React from "react";
import {IMainLangFile} from "../translation";

export interface LangContextT {
    locale:string;
    availableLanguages: string[];
    setLocale(locale: string): void;
    strings:IMainLangFile;
}
export const LangContextDefaultValue:LangContextT = {
  locale:'fr', strings: undefined, setLocale:undefined, availableLanguages: ['fr','en'],
};
export const LangContext = React.createContext<LangContextT>(LangContextDefaultValue);
