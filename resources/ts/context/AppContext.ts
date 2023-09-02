import React from "react";
import {APIContextDefaultValue, Api} from "./APIContext";
import {IThemeContext, ThemeContextDefaultValue} from "./ThemeContext";
import {UserContextDefaultValue, UserContextT} from "./UserContext";
import {NavigationContextDefaultValue, NavigationContextT} from "./NavigationContext";
import {LangContextDefaultValue, LangContextT} from "./LangContext";

//Group all contexts together
export interface AppContextT{
    api:Api;
    theme:IThemeContext;
    user:UserContextT;
    nav:NavigationContextT;
    lang:LangContextT;
}
export const AppContext = React.createContext<AppContextT>({
    api:APIContextDefaultValue, theme:ThemeContextDefaultValue, user:UserContextDefaultValue,
    nav:NavigationContextDefaultValue, lang: LangContextDefaultValue,
});
