import * as React from 'react';
import styles from './Header.module.scss';

import {
    IHeaderProps,
    IHeaderStates
} from './IHeader';
import Nav from "./Nav/Nav";

export default class Header extends React.Component<IHeaderProps,IHeaderStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer() {this.state = {};}
    public render() : React.ReactElement {
        const {
            strings, langProps, children, fixed
        } = this.props;
        return (
            <header className={[styles.header, fixed ?? false ? styles.fixed : styles.headerRelative].join(' ')}>
                <Nav {...this.props} {...langProps} strings={strings.Nav}> {children} </Nav>
            </header>
        );
    }
}
