import * as React from 'react';
import styles from './Link.module.scss';
import {
    ILinkProps,
    ILinkStates
} from './ILink';
export default class Link extends React.Component<ILinkProps,ILinkStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer():void {
        this.state = {};
    }
    public render() : React.ReactElement {
        const {
            children, onClick, disabled, style, classNames
        } = this.props;
        return (
            <a aria-disabled={disabled ?? false} className={[styles.link, classNames?.root ?? ''].join(' ')} style={style?.root ?? undefined}
            onClick={disabled ?? false ? () => undefined : onClick}>
                {children}
            </a>
        );
    }
}
