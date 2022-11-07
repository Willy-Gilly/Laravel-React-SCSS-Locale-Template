import * as React from 'react';
import { ILangOptionsProps, ILangOptionsStates } from "./ILangOptions";
export default class LangOptions extends React.Component<ILangOptionsProps, ILangOptionsStates> {
    constructor(props: any);
    private stateInitializer;
    render(): React.ReactElement;
    makeActive(): void;
    changeSelectedLocale(value: string): void;
}
