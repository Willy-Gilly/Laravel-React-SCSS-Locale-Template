import * as React from 'react';
import styles from './COMPONENT.module.scss';

import {
    ITestProps,
    ITestStates
} from './ITest';


export default class Component extends React.Component<ITestProps,ITestStates> {
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

        } = this.props;
        return (
            <div>
                Le HTML du composant test
            </div>
        );
    }
}
