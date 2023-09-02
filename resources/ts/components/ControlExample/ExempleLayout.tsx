import {ReactElement, useContext } from "react";
import {IThemeContext, ThemeContext} from "../../context/ThemeContext";
import Card from "../Controls/Card/Card";
import TextBox from "../Controls/TextBox/TextBox";
import styles from "./ControlExemple.module.scss";
import Code from "../Controls/Code/Code";
import {Language} from "../Controls/Code/ICode";
import React from "react";

export interface ExempleLayoutProps {
    children:ReactElement|ReactElement[];
    usageExemple:ReactElement|ReactElement[];
    typeScriptExemple?:ReactElement|ReactElement[];
}

export default function ExempleLayout(props:ExempleLayoutProps):ReactElement{
    const context = useContext(ThemeContext);
    const {children, usageExemple, typeScriptExemple} = props;
    return (
        <>
            <Card headerContent={"Theme Dark"} collapsable={true} theme={IThemeContext.Dark} collapsed={context != 0}>
                {children}
            </Card>
            <Card headerContent={"Light Theme"} theme={IThemeContext.Light} collapsable={true} collapsed={context == 0}>
                {children}
            </Card>
            <Card headerContent={"How to use ?"} collapsable={true}>
                <div className={styles.cardSeparator}>
                    {usageExemple}
                    {!!typeScriptExemple && <Card headerContent={"TypeScript Code Exemple"}>
                        {typeScriptExemple}
                    </Card>}
                </div>
            </Card>
        </>
    );
}

export function SpanTypeProperty(props):ReactElement{
    return (<span className={"hljs-built_in"}>{props.children}</span>)
}
export function SpanProperty(props):ReactElement{
    return (<span className={"hljs-attr"}>{props.children}</span>);
}
export function SpanObjectProperty(props):ReactElement{
    return (<span className={"hljs-string"}>{props.children}</span>);
}
