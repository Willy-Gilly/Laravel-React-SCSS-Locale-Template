import * as React from 'react';
import styles from './Card.module.scss';

import {
    ICardPosition,
    ICardProps,
    ICardStates
} from './ICard';


export default class Card extends React.Component<ICardProps,ICardStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    public componentDidMount():void {

    }

    private stateInitializer():void {
        this.state = {
            collapsed: this.props.collapsed ?? false,
        };
    }

    public render() : React.ReactElement {
        const {
            collapsed
        } = this.state;
        const {
            theme, style, classNames, display, disableAnimation, collapsable, children, headerContent, position
        } = this.props;
        let styleString:string = styles.card + " ";
        if((position ?? ICardPosition.left) == ICardPosition.center) styleString += styles.centered + " ";
        if((position ?? ICardPosition.left) == ICardPosition.right) styleString += styles.right + " ";
        return (
            <div className={styleString}>
                <div>
                    {headerContent && <h3>{headerContent}</h3>}
                </div>
                {!collapsed && <div>{children}</div>}
            </div>
        );
    }
}
