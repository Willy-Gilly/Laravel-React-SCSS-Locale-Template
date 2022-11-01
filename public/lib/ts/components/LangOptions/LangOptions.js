import * as React from 'react';
export default class LangOptions extends React.Component {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.changeSelectedLocale = this.changeSelectedLocale.bind(this);
    }
    componentDidMount() {
    }
    stateInitializer() {
        this.state = {
            selectedLocale: this.props.selectedLocale,
        };
    }
    render() {
        const { selectedLocale } = this.state;
        const { availableLanguages } = this.props;
        const localeToString = (locale) => {
            switch (locale) {
                case 'en': return "English";
                case 'fr': return "Français";
                default: return undefined;
            }
        };
        return (React.createElement("div", null,
            React.createElement("select", { name: "language-picker-select", id: "language-picker-select", onChange: this.changeSelectedLocale, multiple: false, defaultValue: selectedLocale }, availableLanguages.map(locale => (React.createElement("option", { key: "selector_" + locale, value: locale }, localeToString(locale)))))));
    }
    changeSelectedLocale(event) {
        this.setState({ selectedLocale: event.target.value }, () => { this.props.changeSelectedLocale(this.state.selectedLocale); console.log("Changing language to " + this.state.selectedLocale); });
    }
}
//# sourceMappingURL=LangOptions.js.map