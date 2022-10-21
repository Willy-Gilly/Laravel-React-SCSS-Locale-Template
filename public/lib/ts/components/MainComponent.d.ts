import * as React from 'react';
import { IMainComponentProps, IMainComponentStates } from "./IMainComponent";
export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentStates> {
    constructor(props: any);
    componentDidMount(): void;
    private stateInitializer;
    render(): React.ReactElement;
    private getLanguage;
    getCookie(cookieName: any): any;
    setCookie(cookieName: string, cookieValue: any, expirationDay?: number): void;
    deleteCookie(cookieName: string): void;
    private initLanguage;
    setLanguage(locale: string): void;
}
