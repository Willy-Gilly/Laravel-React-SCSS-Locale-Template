import {HeaderLang} from "./components/Header/IHeader";

declare module '[a-z][a-z].json' {
    const content: IMainLangFile;
    export = content;
}


export interface IMainLangFile{
    MainComponent:MainComponentLang;
    Test:TestLang;
    Header:HeaderLang;
}
export interface MainComponentLang{
    Hello:string;
    BackToMain:string;
}
export interface TestLang{
    Hello:string;
}

