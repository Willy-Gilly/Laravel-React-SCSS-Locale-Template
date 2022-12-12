import * as React from 'react';
import { IMainComponentProps, IMainComponentStates } from "./IMainComponent";
export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentStates> {
    constructor(props: any);
    getAPIHeader(): {
        headers: {
            Authorization: string;
        };
    };
    componentDidMount(): void;
    private stateInitializer;
    render(): React.ReactElement;
    private getLanguage;
    getCookie(cookieName: any): any;
    setCookie(cookieName: string, cookieValue: any, expirationDay?: number): void;
    deleteCookie(cookieName: string): void;
    private initLanguage;
    setLanguage(locale: string): void;
    rememberLogin(): void;
    login(emailOrLogin: string, password: string): void;
    logout(): void;
    private getUser;
    register(firstname: string, lastname: string, login: string, pseudo: string, email: string, password: string): void;
}
