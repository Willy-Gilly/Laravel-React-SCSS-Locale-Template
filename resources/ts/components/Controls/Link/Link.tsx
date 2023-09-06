import * as React from 'react';
import styles from './Link.module.scss';
import {
    ILinkProps
} from './ILink';
import Icon from "../Icon";
export default function Link(props:ILinkProps) {
    const {
        children, onClick, disabled, style, classNames,icon
    } = props;
    return (
        <a aria-disabled={disabled ?? false} className={[styles.link, classNames?.root ?? ''].join(' ')} style={style?.root ?? undefined}
           onClick={disabled ?? false ? () => undefined : onClick}>
            {!!icon && <><Icon icon={icon}/>  &nbsp; </>}
            {children}
        </a>
    );
}
