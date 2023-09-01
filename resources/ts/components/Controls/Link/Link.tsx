import * as React from 'react';
import styles from './Link.module.scss';
import {
    ILinkProps
} from './ILink';
export default function Link(props:ILinkProps) {
    const {
        children, onClick, disabled, style, classNames
    } = props;
    return (
        <a aria-disabled={disabled ?? false} className={[styles.link, classNames?.root ?? ''].join(' ')} style={style?.root ?? undefined}
           onClick={disabled ?? false ? () => undefined : onClick}>
            {children}
        </a>
    );
}
