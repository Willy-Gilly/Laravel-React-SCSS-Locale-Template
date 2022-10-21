import * as React from 'react';
import styles from "./MainComponent.module.scss";
import Test from './Test/Test';
import LangOptions from "./LangOptions/LangOptions";
export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.setLanguage = this.setLanguage.bind(this);
    }
    componentDidMount() {
    }
    stateInitializer() {
        this.state = {
            locale: this.initLanguage(),
        };
    }
    render() {
        const { locale } = this.state;
        const {} = this.props;
        const selectedLanguageFile = this.getLanguage();
        const strings = selectedLanguageFile.MainComponent;
        return (React.createElement("div", { className: styles.main },
            React.createElement(LangOptions, { changeSelectedLocale: this.setLanguage, selectedLocale: locale, availableLanguages: ['fr', 'en'] }),
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
        var _a;
        if (document.cookie.indexOf(cookieName + '=') != -1) {
            return (_a = document.cookie.split('; ').find((row) => row.startsWith(cookieName + '='))) === null || _a === void 0 ? void 0 : _a.split('=')[1];
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
}
//# sourceMappingURL=MainComponent.js.map