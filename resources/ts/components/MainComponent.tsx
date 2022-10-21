import * as React from 'react';
import styles from "./MainComponent.module.scss";
import {IMainComponentProps, IMainComponentStates} from "./IMainComponent";
import Test from './Test/Test';
import {IMainLangFile} from "./Lang";
import LangOptions from "./LangOptions/LangOptions";
import {Fragment} from "react";

export default class MainComponent extends React.Component<IMainComponentProps,IMainComponentStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.setLanguage = this.setLanguage.bind(this);
    }
    public componentDidMount() {

    }

    private stateInitializer() {
        this.state = {
            locale: this.initLanguage(),
        };
    }

    public render() : React.ReactElement {
        const {
            locale
        } = this.state;
        const {

        } = this.props;
        const selectedLanguageFile: IMainLangFile = this.getLanguage();
        const strings = selectedLanguageFile.MainComponent;
        return (
            <div className={styles.main}>
                <LangOptions changeSelectedLocale={this.setLanguage} selectedLocale={locale} availableLanguages={['fr', 'en']}/>
                {strings.Hello}
                <Test strings={selectedLanguageFile.Test}/>
            </div>
        );
    }

    private getLanguage():IMainLangFile {
        switch (this.state.locale) {
            case 'en':
                return this.props.lang.en as IMainLangFile
            default:
                return this.props.lang.fr as IMainLangFile
        }
    }

    public getCookie(cookieName):any{
        if(document.cookie.indexOf(cookieName+'=') != -1){
            return document.cookie.split('; ').find((row) => row.startsWith(cookieName+'='))?.split('=')[1];
        }
        else{
            return undefined;
        }
    }
    public setCookie(cookieName:string, cookieValue:any, expirationDay:number = 10):void{
        const d = new Date();
        d.setTime(d.getTime() + (expirationDay*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + "; SameSite=Lax;" + expires + ";path=/";
    }
    public deleteCookie(cookieName:string):void{
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }

    private initLanguage():string{
        if(this.getCookie("currentLocale") != undefined){
            return this.getCookie("currentLocale");
        } else{
            this.setCookie("currentLocale", "fr", 30);
            return "fr";
        }
    }
    public setLanguage(locale:string):void{
        this.setState({locale: locale}, () => this.setCookie("currentLocale",this.state.locale,30));
    }
}



