import React from "react";
import {NavLang} from "./Nav/INav";

export interface IHeaderProps{
    fixed?:boolean;
    children?: React.ReactNode | React.ReactNode[];
}
export interface HeaderLang{
    Nav:NavLang;
}
