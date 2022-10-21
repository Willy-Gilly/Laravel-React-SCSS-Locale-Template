export interface Lang {
    fr: IMainLangFile;
    en: IMainLangFile;
}
export interface IMainLangFile {
    MainComponent: MainComponentLang;
    Test: TestLang;
}
export interface MainComponentLang {
    Hello: string;
}
export interface TestLang {
    Hello: string;
}
