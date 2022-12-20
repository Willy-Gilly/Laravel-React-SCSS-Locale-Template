import * as React from 'react';
import styles from './Code.module.scss';
import {/*HTMLElement, HTMLTypes, ICodeLanguage, */ICodeProps, ICodeStates} from './ICode';
import Highlight from 'react-highlight';

export default class Code extends React.Component<ICodeProps,ICodeStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer():void {
        this.state = {
            renderedCode: '',
        };
    }
    public componentDidMount(){
    }

    public render() : React.ReactElement {
        const {
            code
        } = this.props;
        const renderedCode = this.state.renderedCode;
        return (
            <Highlight>
                {code}
            </Highlight>
        );
    }
}
