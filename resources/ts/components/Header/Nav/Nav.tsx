import * as React from 'react';
import styles from './Nav.module.scss';

import {
    INavProps,
    INavStates
} from './INav';
import LangOptions from "../../LangOptions/LangOptions";


export default class Nav extends React.Component<INavProps,INavStates> {
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
            strings, auth, langProps
        } = this.props;
        if(auth){
            return (<nav>
                <LangOptions {...langProps}/>
                <button>{strings.Logout}</button>
            </nav>);
        }
        return (
            <nav>
                <button>{strings.Login}</button>
                <button>{strings.Register}</button>
            </nav>
        );
    }
}
