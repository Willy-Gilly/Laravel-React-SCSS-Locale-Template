import * as React from 'react';
import styles from "./LangOptions.module.scss";
export default class LangOptions extends React.Component {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.changeSelectedLocale = this.changeSelectedLocale.bind(this);
        this.makeActive = this.makeActive.bind(this);
    }
    stateInitializer() {
        this.state = {
            selectedLocale: this.props.selectedLocale,
            active: false,
        };
    }
    render() {
        const { selectedLocale, active } = this.state;
        const { availableLanguages } = this.props;
        return (React.createElement("div", { className: styles.languagePicker, onClick: this.makeActive },
            active || (selectedLocale == "fr" && !active) ? React.createElement("div", { onClick: active ? () => this.changeSelectedLocale('fr') : () => '', className: [styles.language, styles.france].join(' ') }, " ") : '',
            active || (selectedLocale == "en" && !active) ? React.createElement("div", { onClick: active ? () => this.changeSelectedLocale('en') : () => '', className: [styles.language, styles.english].join(' ') }, " ") : ''));
    }
    makeActive() {
        if (!this.state.active)
            this.setState({ active: true });
    }
    changeSelectedLocale(value) {
        this.setState({ selectedLocale: value, active: false }, () => { this.props.changeSelectedLocale(this.state.selectedLocale); console.log("Changing language to " + this.state.selectedLocale); });
    }
}
//# sourceMappingURL=LangOptions.js.map