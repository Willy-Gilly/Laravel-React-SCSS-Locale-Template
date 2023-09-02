import * as React from 'react';
import styles from './Test.module.scss';

import {
    ITestProps,
    ITestStates
} from './ITest';
import {AppContext} from "../../context/AppContext";
import { useContext, useState } from 'react';

export default class TestClassComponent extends React.Component<ITestProps,ITestStates> {
    //add context exemple:
    /*
    public static contextType = AppContext;
    public context!: React.ContextType<typeof AppContext>;
    */
    constructor(props,context) {
        super(props,context);
        this.stateInitializer();
    }
    public componentDidMount():void {

    }

    private stateInitializer():void {
        this.state = {

        };
    }

    public render() : React.ReactElement {
        const {

        } = this.state;
        const {

        } = this.props;
        const {

        } = this.context;
        return (
            <>

            </>
        );
    }
}

export function TestFunctionalComponent(props:ITestProps): React.ReactElement{
    const context = useContext(AppContext);
    const [state, setState] = useState('default value');
    const {} = props;
    return (<>
    </>);
}
