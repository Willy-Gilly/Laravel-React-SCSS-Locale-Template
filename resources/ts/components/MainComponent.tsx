import * as React from 'react';
import styles from "./MainComponent.module.scss";
import {APIReturn, IAuth, IMainComponentProps, IMainComponentStates, Page, IProfile} from "./IMainComponent";
import {IMainLangFile} from "./Lang";
import axios from "axios";
import Header from "./Header/Header";
import ControlExample from "./ControlExample/ControlExample";
import Button from "./Controls/Button/Button";
import NavButton from "./Header/Nav/NavButton/NavButton";
import {IThemeContext, ThemeContext} from "../context/ThemeContext";
import {APIContext, Api} from "../context/APIContext";
import {UserContext, UserContextT} from "../context/UserContext";
import {AppContext, AppContextT} from "../context/AppContext";
import {NavigationContext, NavigationContextT} from "../context/NavigationContext";
import {LangContext, LangContextT} from "../context/LangContext";
import {Profile} from "../Profile";

export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentStates> {
    public static contextType = ThemeContext;
    public context!: React.ContextType<typeof ThemeContext>;
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.setLanguage = this.setLanguage.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.register = this.register.bind(this);
        this.changePage = this.changePage.bind(this);
        this.APIGet = this.APIGet.bind(this);
        this.APIPost = this.APIPost.bind(this);
    }

    public componentDidMount() {
        this.rememberLogin();
        this.rememberTheme(true)
    }
    private stateInitializer() {
        let themeC = this.getCookie<string>('theme');

        this.state = {
            user: undefined,
            bearerToken: "",
            auth: false,
            locale: this.initLanguage(),
            page: Page.ControlExample,
            theme: themeC != undefined || themeC != "undefined" ? themeC == "0" ? IThemeContext.Dark : IThemeContext.Light : IThemeContext.Dark
        };
    }

    private availableLanguages:string[] = ['fr','en'];

    public render(): React.ReactElement {
        const {
            locale, auth, user, page, theme, bearerToken
        } = this.state;
        const selectedLanguageFile: IMainLangFile = this.getLanguage();
        const strings = selectedLanguageFile.MainComponent; //He is the only one to not have props strings since he is the one who handle it

        let navButtons:React.ReactElement = undefined;
        let htmlRendered:React.ReactElement = undefined;
        switch (page){
            default: htmlRendered = (
                <>
                    <p>{strings.Hello}</p>
                    <Button onClick={() => this.changePage(Page.ControlExample)}>Control Example</Button>
                </>
            );
            break;
            case Page.ControlExample: htmlRendered = (
                <>
                    <ControlExample/>
                </>
            );
            navButtons = (<>
                <NavButton onClick={() => this.changePage(Page.Main)}> Return to main page </NavButton>
                <NavButton onClick={() => this.switchTheme()}> Switch to {theme == IThemeContext.Dark ? "Light" : "Dark"} theme </NavButton>
            </>);
            break;
        }

        const ApiContextValue:Api = {
           get: this.APIGet, post: this.APIPost
        };
        const UserContextValue:UserContextT = {
            bearerToken: bearerToken, user: user, isAuth: auth, login: this.login, logout: this.logout, register: this.register
        }
        const NavigationContextValue:NavigationContextT = {
            page:page, navigateTo: this.changePage
        };
        const LangContextValue:LangContextT = {
          strings: selectedLanguageFile, setLocale: this.setLanguage, availableLanguages: this.availableLanguages, locale: locale
        };
        const AppContextValue:AppContextT = {
            api:ApiContextValue, user:UserContextValue, theme:theme, nav:NavigationContextValue, lang: LangContextValue
        };
        return (//Mettre tous les contextes ici
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={UserContextValue}>
                    <APIContext.Provider value={ApiContextValue}>
                        <NavigationContext.Provider value={NavigationContextValue}>
                            <LangContext.Provider value={LangContextValue}>
                                <AppContext.Provider value={AppContextValue}>
                                    <div className={styles.main}>
                                        <Header fixed={true} children={navButtons}/>
                                        {htmlRendered}
                                    </div>
                                </AppContext.Provider>
                            </LangContext.Provider>
                        </NavigationContext.Provider>
                    </APIContext.Provider>
                </UserContext.Provider>
            </ThemeContext.Provider>
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
    public getCookie<T>(cookieName): T|string|undefined {
        if (document.cookie.indexOf(cookieName + '=') != -1) {
            try{
                return (document.cookie.split('; ').find((row) => row.startsWith(cookieName + '='))?.split('=')[1] ?? undefined) as T;
            }catch (e) {
                console.error(`Error while trying to get data from cookie '${cookieName}', error message: ${e.message}`);
                return undefined;
            }
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
        if (this.getCookie<string>("currentLocale") != undefined) {
            return this.getCookie<string>("currentLocale");
        } else {
            this.setCookie("currentLocale", "fr", 360);
            return "fr";
        }
    }
    public setLanguage(locale: string): void {
        this.setState({locale: locale}, () => this.setCookie("currentLocale", this.state.locale, 360));
    }
    public rememberLogin():void {
        let token = this.getCookie<string>("bearerToken");
        if (!(token == "undefined" || token == undefined)) {
            console.info("Authentication Token Found, logging in...");
            this.setState({bearerToken: this.getCookie<string>("bearerToken"), auth: true}, () => this.getUser());
        }
    }
    public rememberTheme(setState:boolean = false):void{
        let token = this.getCookie<string>("theme");
        if (!(token == "undefined" || token == undefined)) {
            if(setState)this.setState({theme: this.getCookie<string>("theme") == "1" ? IThemeContext.Light : IThemeContext.Dark}, () => this.setCookie('theme', this.getCookie<string>("theme"), 360));
            if(this.getCookie<string>('theme') != '0'){
                document.body.style.setProperty("--background-color", this.context == IThemeContext.Light ? 'white' : 'rgb(30, 30, 30)');
                document.body.style.setProperty("--color", this.context == IThemeContext.Light ? 'rgb(30, 30, 30)' : 'antiquewhite');
                console.info('Setting to Light Theme');
            }else{
                console.info('Setting to Dark Theme');
            }
        }else{
            this.setCookie('theme', IThemeContext.Dark, 360);
        }
    }
    public switchTheme():void{
        this.setCookie("theme", this.state.theme == IThemeContext.Dark ? IThemeContext.Light : IThemeContext.Dark, 360);
        location.reload();
    }

    public login(emailOrLogin: string, password: string): void {
        const api:Api = {
            get: this.APIGet, post: this.APIPost
        };
        Profile.login(api,emailOrLogin, password).then(res => {
            this.setCookie("bearerToken", res.token, 30);
            console.info("Logging in...");
            this.setState({bearerToken: res.token, auth: res.token != ""}, () => {
                this.getUser();
            });
        }).catch(function (error) {
            console.error(error);}
        );
    }

    public APIGet<T>(uri:string):Promise<T>{
        return axios.get(uri, this.getAPIHeader()).then((response) => {
            const res:APIReturn = response.data;
            if(!res || !res.success || !res.data){
                throw new Error("Data returned seems invalid. Check Network response.");
            }
            console.info(res.message);
            return res.data as T;
        }).catch(e => {
            console.error(`Couldn't catch a value for uri '${uri}'. Error Message : ${e.message}`);
            return undefined;
        });
    }
    public APIPost<T>(uri:string, body:any):Promise<T>{
        return axios.post(uri, body, this.getAPIHeader()).then((response) => {
            const res:APIReturn = response.data;
            if(!res || !res.success || !res.data){
                throw new Error("Data returned seems invalid. Check Network response.");
            }
            console.info(res.message);
            return res.data as T;
        }).catch(e => {
            console.error(`Couldn't catch a value for uri '${uri}'. Error Message : ${e.message}`);
            return undefined;
        });
    }

    public getAPIHeader() {
        return {headers: {Authorization: `Bearer ` + this.state.bearerToken}};
    }

    public logout():void {
        const api:Api = {
            get: this.APIGet, post: this.APIPost
        };
        Profile.logout(api).then(res => {
            if(res){
                this.deleteCookie("bearerToken");
                this.setState({bearerToken: "", auth: false, user: undefined});
            }
        });
    }

    private getUser():void {
        const api:Api = {
            get: this.APIGet, post: this.APIPost
        };
        Profile.getUser(api).then(res => {
            if(!!res){
                let user:IProfile = res;
                user.token = this.state.bearerToken;
                this.setState({user:user});
            }else{
                console.log("Failed to retrieve user from your token.");
                this.logout();
            }
        });
    }

    public register(firstname:string,lastname:string,login:string,pseudo:string,email:string,password:string):void{
        const api:Api = {
            get: this.APIGet, post: this.APIPost
        };
        Profile.register(api,firstname, lastname, login, pseudo, email, password).then(auth => {
            this.setCookie("bearerToken", auth.token, 30);
            console.info("Registering...");
            this.setState({bearerToken: auth.token, auth: auth.token != ""}, () => {
                this.getUser();
            });
        });
    }
    public changePage(page:Page){
        this.setState({page:page});
    }
}



