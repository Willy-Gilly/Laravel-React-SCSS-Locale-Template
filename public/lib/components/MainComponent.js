import * as React from 'react';
import styles from "./MainComponent.module.scss";
import Test from './Test/Test';
export default class MainComponent extends React.Component {
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
        const {} = import('../../lang/fr.json');
        const {} = this.state;
        const {} = this.props;
        return (React.createElement("div", { className: styles.main },
            "Le HTML du composant",
            React.createElement(Test, null)));
    }
}
//# sourceMappingURL=MainComponent.js.map