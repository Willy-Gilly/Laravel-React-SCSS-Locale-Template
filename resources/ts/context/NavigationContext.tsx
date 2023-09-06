import React, { ReactElement } from "react";
import {Page} from "../components/IMainComponent";
import NavButton from "../components/Header/Nav/NavButton/NavButton";

export interface NavigationContextT {
    page:Page;
    navigateTo:(page:Page) => void;
    setNavElements:(elements: NavButton[]) => void;
    switchTheme:()=>void;
}
export const NavigationContextDefaultValue:NavigationContextT = {
    page: Page.Main, navigateTo: undefined, setNavElements: undefined, switchTheme:undefined,
}

export const NavigationContext = React.createContext<NavigationContextT>(NavigationContextDefaultValue);
