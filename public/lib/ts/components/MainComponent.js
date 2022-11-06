import * as React from 'react';
import styles from "./MainComponent.module.scss";
import Test from './Test/Test';
import axios from "axios";
import Header from "./Header/Header";
export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.setLanguage = this.setLanguage.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.register = this.register.bind(this);
    }
    getAPIHeader() {
        return { headers: { Authorization: `Bearer ` + this.state.bearerToken } };
    }
    componentDidMount() {
        this.rememberLogin();
    }
    stateInitializer() {
        this.state = {
            user: undefined,
            bearerToken: "",
            auth: false,
            locale: this.initLanguage(),
        };
    }
    render() {
        const { locale, auth, user } = this.state;
        const selectedLanguageFile = this.getLanguage();
        const strings = selectedLanguageFile.MainComponent; //He is the only one to not have props strings since he is the one who handle it
        const global = { lang: selectedLanguageFile, user: user, auth: auth, loginF: this.login, logoutF: this.logout, registerF: this.register };
        const langProps = {
            availableLanguages: ['fr', 'en'],
            selectedLocale: locale,
            changeSelectedLocale: this.setLanguage,
        };
        return (React.createElement("div", { className: styles.main },
            React.createElement(Header, Object.assign({ strings: selectedLanguageFile.Header, langProps: langProps }, global)),
            strings.Hello,
            React.createElement(Test, { strings: selectedLanguageFile.Test })));
    }
    getLanguage() {
        switch (this.state.locale) {
            case 'en':
                return this.props.lang.en;
            default:
                return this.props.lang.fr;
        }
    }
    getCookie(cookieName) {
        var _a, _b;
        if (document.cookie.indexOf(cookieName + '=') != -1) {
            return ((_b = (_a = document.cookie.split('; ').find((row) => row.startsWith(cookieName + '='))) === null || _a === void 0 ? void 0 : _a.split('=')[1]) !== null && _b !== void 0 ? _b : undefined);
        }
        else {
            return undefined;
        }
    }
    setCookie(cookieName, cookieValue, expirationDay = 10) {
        const d = new Date();
        d.setTime(d.getTime() + (expirationDay * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + "; SameSite=Lax;" + expires + ";path=/";
    }
    deleteCookie(cookieName) {
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    initLanguage() {
        if (this.getCookie("currentLocale") != undefined) {
            return this.getCookie("currentLocale");
        }
        else {
            this.setCookie("currentLocale", "fr", 30);
            return "fr";
        }
    }
    setLanguage(locale) {
        this.setState({ locale: locale }, () => this.setCookie("currentLocale", this.state.locale, 30));
    }
    rememberLogin() {
        let token = this.getCookie("bearerToken");
        if (!(token == "undefined" || token == undefined)) {
            console.log("Authentification Token Found, logging in...");
            this.setState({ bearerToken: this.getCookie("bearerToken"), auth: true }, () => this.getUser());
        }
    }
    login(email, password) {
        let obj = undefined;
        axios.post('api/login', {
            email: email,
            password: password
        })
            .then((response) => {
            obj = response.data;
            if (obj.success) {
                let auth = obj.data;
                this.setCookie("bearerToken", auth.token, 30);
                console.log("Logging in...");
                this.setState({ bearerToken: auth.token, auth: auth.token != "" }, () => {
                    this.getUser();
                });
            }
            else {
                console.log("Login Failed.");
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    logout() {
        this.deleteCookie("bearerToken");
        this.setState({ bearerToken: "", auth: false, user: undefined });
        axios.get('api/logout', this.getAPIHeader()).then((response) => {
            console.log(response.data.data.message);
        });
    }
    getUser() {
        axios.get('api/user', this.getAPIHeader()).then((response) => {
            let res = response.data;
            let user = res.data;
            user.token = this.state.bearerToken;
            this.setState({ user: user });
        }).catch((error) => {
            console.log("Failed to retrieve user from your token.");
            this.logout();
        });
    }
    register(firstname, lastname, login, pseudo, email, password) {
        axios.post('api/register', {
            firstname: firstname,
            lastname: lastname,
            login: login,
            pseudo: pseudo,
            email: email,
            password: password
        }).then((response) => {
            let res = response.data.data;
            this.setState({ bearerToken: res.token }, () => this.rememberLogin());
        }).catch((error) => {
            console.log("Failed to register");
        });
    }
}
//# sourceMappingURL=MainComponent.js.map