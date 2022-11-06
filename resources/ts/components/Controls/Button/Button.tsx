import * as React from 'react';
import styles from './Button.module.scss';
import {IButtonDisplay, IButtonProps, IButtonStates, IButtonTheme} from './IButton';

export default class Button extends React.Component<IButtonProps,IButtonStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer() {
        this.state = {};
    }
    public render() : React.ReactElement {
        const {
            children, onClick, disableAnimation, disabled, style, classNames, theme, display
        } = this.props;
        let displayStyle: string;
        switch (display){
            default:
            case IButtonDisplay.Default:
                displayStyle = styles.default;
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
        let anim:boolean = !(disableAnimation ?? false);
        let isLight:boolean = (theme ?? IButtonTheme.Dark) == IButtonTheme.Light;
        return (
            <button className={[styles.button, displayStyle,anim ? styles.animButton : '', isLight ? styles.lightButton : '', classNames?.button].join(' ')}
                    onClick={onClick} style={style?.button} disabled={disabled ?? false}>
                {children ?? ''}
            </button>
        );
    }
}
