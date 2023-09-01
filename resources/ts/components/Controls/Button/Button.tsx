import * as React from 'react';
import styles from './Button.module.scss';
import {IButtonDisplay, IButtonProps} from './IButton';
import {IThemeContext, ThemeContext} from "../../../Context/ThemeContext";
import { useContext } from 'react';

export default function Button(props: IButtonProps): React.ReactElement {
    const context = useContext(ThemeContext);
    const {
        children, onClick, disableAnimation, disabled, style, classNames, theme, display
    } = props;
    let displayStyle: string;
    switch (display) {
        default:
        case IButtonDisplay.Default:
            displayStyle = '';
            break;
        case IButtonDisplay.Confirm:
            displayStyle = styles.confirmation;
            break;
        case IButtonDisplay.Warning:
            displayStyle = styles.information;
            break;
        case IButtonDisplay.Error:
            displayStyle = styles.error;
            break;
        case IButtonDisplay.Primary:
            displayStyle = styles.primary;
            break;
        case IButtonDisplay.PrimaryConfirm:
            displayStyle = [styles.primary, styles.confirmation].join(' ');
            break;
        case IButtonDisplay.PrimaryWarning:
            displayStyle = [styles.primary, styles.information].join(' ');
            break;
        case IButtonDisplay.PrimaryError:
            displayStyle = [styles.primary, styles.error].join(' ');
            break;
    }
    let anim: boolean = !(disableAnimation ?? false);
    let isLight: boolean = (theme ?? context) == IThemeContext.Light;
    return (
        <button
            className={[styles.button, displayStyle, anim ? styles.animButton : '', isLight ? styles.lightButton : '', classNames?.button].join(' ')}
            onClick={!(disabled ?? false) ? onClick : () => ''} style={style?.button} disabled={disabled ?? false}>
            {children ?? ''}
        </button>
    );
}
