import * as React from 'react';
import styles from './TextBox.module.scss';

import {ITextBoxProps} from './ITextBox';
import {IThemeContext, ThemeContext} from "../../../context/ThemeContext";
import {createRef, ReactElement, useRef} from 'react';
import ToolTip from "../ToolTip/ToolTip";

import txt from "../../../../lang/fr.json";

export default function TextBox(props:ITextBoxProps): ReactElement {
    const {onChange, disabled, disableAnimation, disableValidationStyle, style, classNames, theme, value, regex, isPasswordInput, name, placeholder, onKeyPress, required,disabledContent
        } = props;
    const context = React.useContext(ThemeContext);
    let anim:boolean = !(disableAnimation ?? false);
    let validationStyle:boolean = !(disableValidationStyle ?? false);
    let isLight:boolean = (theme ?? context) == IThemeContext.Light;
    return (<ToolTip content={disabled ? disabledContent : null}>
                <input className={[styles.textBox, anim ? styles.animTextBox : '', isLight ? styles.lightTextBox : '', classNames?.textBox, (validationStyle && regex != undefined) || (validationStyle && required) ? styles.validationStyle : ''].join(' ')}
                       onChange={!(disabled ?? false) ? (event) => onChange(event.currentTarget.value) : () => ''} style={style?.textBox ?? {width:"100%"}} type={(isPasswordInput ?? false) ? "password" : "text"} name={name}
                       placeholder={placeholder} onKeyPress={onKeyPress} required={required}
                       disabled={disabled} value={value ?? ''} pattern={regex ? regex instanceof RegExp ? regex.source : regex : undefined}
                />
            </ToolTip>
    );
}
