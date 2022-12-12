import * as React from 'react';
import styles from "./MainComponent.module.scss";
import {APIReturn, Auth, GlobalProps, IMainComponentProps, IMainComponentStates, Profile} from "./IMainComponent";
import Test from './Test/Test';
import {IMainLangFile} from "./Lang";
import axios from "axios";
import {ILangOptionsProps} from "./Controls/LangOptions/ILangOptions";
import Header from "./Header/Header";

export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.setLanguage = this.setLanguage.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.register = this.register.bind(this);
    }
    public getAPIHeader() {
        return {headers: {Authorization: `Bearer ` + this.state.bearerToken}};
    }
    public componentDidMount() {
        this.rememberLogin();
    }
    private stateInitializer() {
        this.state = {
            user: undefined,
            bearerToken: "",
            auth: false,
            locale: this.initLanguage(),
        };
    }
    public render(): React.ReactElement {
        const {
            locale, auth, user
        } = this.state;
        const selectedLanguageFile: IMainLangFile = this.getLanguage();
        const strings = selectedLanguageFile.MainComponent; //He is the only one to not have props strings since he is the one who handle it

        const global:GlobalProps = {lang: selectedLanguageFile, user: user, auth: auth, loginF: this.login, logoutF: this.logout, registerF: this.register};
        const langProps:ILangOptionsProps = {
            availableLanguages: ['fr', 'en'],
            selectedLocale: locale,
            changeSelectedLocale: this.setLanguage,
        }
        return (
            <div className={styles.main}>
                <Header strings={selectedLanguageFile.Header} langProps={langProps} {...global}/>
                {strings.Hello}
                <Test strings={selectedLanguageFile.Test}/>
            </div>
        );
    }
    private getLanguage(): IMainLangFile {
        switch (this.state.locale) {
            case 'en':
                return this.props.lang.en as IMainLangFile
            default:
                return this.props.lang.fr as IMainLangFile
        }
    }
    public getCookie(cookieName): any {
        if (document.cookie.indexOf(cookieName + '=') != -1) {
            return (document.cookie.split('; ').find((row) => row.startsWith(cookieName + '='))?.split('=')[1] ?? undefined);
        } else {
            return undefined;
        }
    }
    public setCookie(cookieName: string, cookieValue: any, expirationDay: number = 10): void {
        const d = new Date();
        d.setTime(d.getTime() + (expirationDay * 24 * 60 * 60 * 1000));
        let expires = ";expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";SameSite=Lax" + expires + ";path=/";
    }
    public deleteCookie(cookieName: string): void {
        document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;SameSite=Lax; path=/";
    }
    private initLanguage(): string {
        if (this.getCookie("currentLocale") != undefined) {
            return this.getCookie("currentLocale");
        } else {
            this.setCookie("currentLocale", "fr", 30);
            return "fr";
        }
    }
    public setLanguage(locale: string): void {
        this.setState({locale: locale}, () => this.setCookie("currentLocale", this.state.locale, 30));
    }
    public rememberLogin():void {
        let token = this.getCookie("bearerToken");
        if (!(token == "undefined" || token == undefined)) {
            console.log("Authentification Token Found, logging in...");
            this.setState({bearerToken: this.getCookie("bearerToken"), auth: true}, () => this.getUser());
        }
    }
    public login(emailOrLogin:string, password:string): void {
        let obj: APIReturn = undefined;
        axios.post('api/login', {
                emailOrLogin: emailOrLogin,
                password: password
            }
        )
            .then((response) => {
                obj = response.data;
                if (obj.success) {
                    let auth: Auth = obj.data;
                    this.setCookie("bearerToken", auth.token, 30);
                    console.log("Logging in...");
                    this.setState({bearerToken: auth.token, auth: auth.token != ""}, () => {
                        this.getUser();
                    });
                } else {
                    console.log("Login Failed.");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    public logout():void {
        this.deleteCookie("bearerToken");
        this.setState({bearerToken: "", auth: false, user: undefined})
        axios.get('api/logout', this.getAPIHeader()).then((response) => {
            console.log(response.data.data.message)
        });
    }

    private getUser():void {
        axios.get('api/user',
            this.getAPIHeader()).then((response)=> {
            let res:APIReturn = response.data;
            let user:Profile = res.data;
            user.token = this.state.bearerToken;
            this.setState({user:user});
        }).catch((error)=> {
            console.log("Failed to retrieve user from your token.");
            this.logout();
        })
    }
    public register(firstname:string,lastname:string,login:string,pseudo:string,email:string,password:string):void{
        let obj: APIReturn = undefined;
        axios.post('api/register',{
            firstname:firstname,
            lastname:lastname,
            login:login,
            pseudo:pseudo,
            email:email,
            password:password
        }).then((response) => {
            obj = response.data;
            if (obj.success) {
                let auth: Auth = obj.data;
                this.setCookie("bearerToken", auth.token, 30);
                console.log("Registering...");
                this.setState({bearerToken: auth.token, auth: auth.token != ""}, () => {
                    this.getUser();
                });
            } else {
                console.log("Registering Failed.");
            }
        }).catch((error) => {
            console.log("Failed to register");
        })
    }
}



