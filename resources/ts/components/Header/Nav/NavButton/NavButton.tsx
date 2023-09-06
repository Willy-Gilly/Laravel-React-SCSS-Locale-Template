import * as React from 'react';
import styles from './NavButton.module.scss';
import {
    INavButtonProps
} from './INavButton';
import {IThemeContext, ThemeContext} from "../../../../context/ThemeContext";
import Icon from "../../../Controls/Icon";
export default class NavButton extends React.Component<INavButtonProps> {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;
    public render() : React.ReactElement {
        const {
            children, classNames, style, onClick, disableAnimation, disabled, theme, icon
        } = this.props;
        let anim:boolean = !(disableAnimation ?? false);
        let isLight:boolean = (theme ?? this.context) == IThemeContext.Light;
        return (
            <button onClick={!(disabled ?? false) ? onClick : () => ''} disabled={disabled ?? false}
                    className={[styles.navButton,anim ? styles.navButtonAnim : '',isLight ? styles.navButtonLight : '' , classNames?.button].join(' ')} style={style?.button}>
                {!!icon && <><Icon icon={icon}/>  &nbsp; </>}
                {children}
            </button>
        );
    }
}
