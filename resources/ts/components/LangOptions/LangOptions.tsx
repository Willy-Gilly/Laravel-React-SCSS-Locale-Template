import * as React from 'react';
import styles from "./LangOptions.module.scss";
import {ILangOptionsProps, ILangOptionsStates} from "./ILangOptions";

export default class LangOptions extends React.Component<ILangOptionsProps,ILangOptionsStates> {

    constructor(props) {
        super(props);
        this.stateInitializer();
        this.changeSelectedLocale = this.changeSelectedLocale.bind(this);
    }
    public componentDidMount() {

    }

    private stateInitializer() {
        this.state = {
            selectedLocale: this.props.selectedLocale,
        };
    }

    public render() : React.ReactElement {
        const {
            selectedLocale
        } = this.state;
        const {
            availableLanguages
        } = this.props;
        const localeToString = (locale:string) => {
            switch (locale){
                case 'en': return "English";
                case 'fr': return "Français";
                default: return undefined;
            }
        }

        return (
            <div>
                <select name="language-picker-select" id="language-picker-select" onChange={this.changeSelectedLocale} multiple={false} defaultValue={selectedLocale}>
                    {
                        availableLanguages.map(locale => (
                            <option key={"selector_"+locale} value={locale}>
                                {localeToString(locale)}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }

    public changeSelectedLocale(event){
        this.setState({selectedLocale: event.target.value}, () => this.props.changeSelectedLocale(this.state.selectedLocale))
    }
}
