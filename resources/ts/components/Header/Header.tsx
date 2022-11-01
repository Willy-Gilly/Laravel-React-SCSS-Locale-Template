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
    public componentDidMount() {

    }

    private stateInitializer() {
        this.state = {

        };
    }

    public render() : React.ReactElement {
        const {

        } = this.state;
        const {
            strings, langProps
        } = this.props;
        return (
            <header>
                <Nav {...this.props} {...langProps} strings={strings.Nav}/>
            </header>
        );
    }
}
