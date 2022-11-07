import * as React from 'react';
import styles from './NavButton.module.scss';
import {
    INavButtonProps,
    INavButtonStates, INavButtonTheme
} from './INavButton';
export default class NavButton extends React.Component<INavButtonProps,INavButtonStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer() {
        this.state = {};
    }
    public render() : React.ReactElement {
        const {
            children, classNames, style, onClick, disableAnimation, disabled, theme
        } = this.props;
        let anim:boolean = !(disableAnimation ?? false);
        let isLight:boolean = (theme ?? INavButtonTheme.Dark) == INavButtonTheme.Light;
        return (
            <button onClick={!(disabled ?? false) ? onClick : () => ''} disabled={disabled ?? false}
                    className={[styles.navButton,anim ? styles.navButtonAnim : '',isLight ? styles.navButtonLight : '' , classNames?.button].join(' ')} style={style?.button}>
                {children}
            </button>
        );
    }
}
