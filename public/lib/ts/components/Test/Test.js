import * as React from 'react';
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
        const {} = this.props;
        return (React.createElement("div", null, "Le HTML du composant test"));
    }
}
//# sourceMappingURL=Test.js.map