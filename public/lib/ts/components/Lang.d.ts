export interface Lang {
    fr: IMainLangFile;
    en: IMainLangFile;
}
export interface IMainLangFile {
    MainComponent: MainComponentLang;
}
export interface MainComponentLang {
    Hello: string;
}
