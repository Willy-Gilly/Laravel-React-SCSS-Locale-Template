import React from "react";
import {Page} from "../components/IMainComponent";

export interface NavigationContextT {
    page:Page;
    navigateTo:(page:Page) => void;
}
export const NavigationContextDefaultValue:NavigationContextT = {
    page: Page.Main, navigateTo: undefined,
}

export const NavigationContext = React.createContext<NavigationContextT>(NavigationContextDefaultValue);
