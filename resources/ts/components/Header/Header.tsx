import * as React from 'react';
import styles from './Header.module.scss';

import {
    IHeaderProps
} from './IHeader';
import Nav from "./Nav/Nav";
import {ThemeContext} from "../../Context/ThemeContext";

export default class Header extends React.Component<IHeaderProps> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer() {this.state = {};}
    static contextType = ThemeContext;
    public render() : React.ReactElement {
        const {
            children, fixed
        } = this.props;
        return (
            <header className={[styles.header, fixed ?? false ? styles.fixed : styles.headerRelative].join(' ')}>
                <Nav> {children} </Nav>
            </header>
        );
    }
}
