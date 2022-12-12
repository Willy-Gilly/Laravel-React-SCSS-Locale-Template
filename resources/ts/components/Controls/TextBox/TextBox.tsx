import * as React from 'react';
import styles from './TextBox.module.scss';

import {ITextBoxProps, ITextBoxStates, ITextBoxTheme} from './ITextBox';

export default class TextBox extends React.Component<ITextBoxProps,ITextBoxStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer() {
        this.state = {};
    }

    public render() : React.ReactElement {
        const {onChange, disabled, disableAnimation, disableValidationStyle, style, classNames, theme, value, regex, isPasswordInput, name, placeholder, onKeyPress, required
        } = this.props;
        let anim:boolean = !(disableAnimation ?? false);
        let validationStyle:boolean = !(disableValidationStyle ?? false);
        let isLight:boolean = (theme ?? ITextBoxTheme.Dark) == ITextBoxTheme.Light;
        return (
            <input className={[styles.textBox, anim ? styles.animTextBox : '', isLight ? styles.lightTextBox : '', classNames?.textBox, validationStyle && regex != undefined ? styles.validationStyle : ''].join(' ')}
                   onChange={!(disabled ?? false) ? onChange : () => ''} style={style?.textBox} type={(isPasswordInput ?? false) ? "password" : "text"} name={name ?? undefined}
                   placeholder={placeholder ?? ''} onKeyPress={onKeyPress} required={required ?? false}
                   disabled={disabled ?? false} value={value} pattern={regex ? regex instanceof RegExp ? regex.source : regex : undefined}/>
        );
    }
}
