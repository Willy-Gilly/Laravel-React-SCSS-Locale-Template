export interface ILangOptionsProps{
    changeSelectedLocale: (locale:string) => void;
    selectedLocale:string;
    availableLanguages:string[];
}
export interface ILangOptionsStates{
    selectedLocale: string;
    active:boolean;
}
