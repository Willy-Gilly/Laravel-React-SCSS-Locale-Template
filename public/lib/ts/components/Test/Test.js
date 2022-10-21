import * as React from 'react';
import styles from './Test.module.scss';
export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    componentDidMount() {
    }
    stateInitializer() {
        this.state = {};
    }
    render() {
        const {} = this.state;
        const { strings } = this.props;
        return (React.createElement("div", { className: styles.myTestComponent }, strings.Hello));
    }
}
//# sourceMappingURL=Test.js.map