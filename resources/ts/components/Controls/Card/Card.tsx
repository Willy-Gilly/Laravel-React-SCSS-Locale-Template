import * as React from 'react';
import styles from './Card.module.scss';

import {
    ICardPosition,
    ICardProps,
    ICardStates, ICardTheme
} from './ICard';


export default class Card extends React.Component<ICardProps,ICardStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.collapse = this.collapse.bind(this);
    }

    private stateInitializer():void {
        this.state = {
            collapsed: this.props.collapsed ?? false,//used Once
        };
    }

    public render() : React.ReactElement {
        const {
            collapsed
        } = this.state;
        const {
            theme, style, classNames, disableAnimation, collapsable, children, headerContent, position
        } = this.props;
        let styleString:string = styles.card + " ";
        if((position ?? ICardPosition.left) == ICardPosition.center) styleString += styles.centered + " ";
        if((position ?? ICardPosition.left) == ICardPosition.right) styleString += styles.right + " ";
        if(theme == ICardTheme.Light) styleString += styles.cardLight + " ";
        return (
            <div className={styleString}>
                <div className={styles.cardHeader}>
                    {headerContent && <h3 className={[styles.cardTitle, classNames?.title].join(' ')} style={style?.title}>{headerContent}</h3>}
                    {(collapsable ?? false) ?
                        <button className={[styles.cardCloseButton, (theme ?? ICardTheme.Dark) == ICardTheme.Light ? styles.cardButtonLight : '', classNames?.closingButton].join(' ')}
                                type="button" onClick={this.collapse} style={style?.closingButton}>
                            {collapsed ? "+" : "-"}
                        </button>
                        : ''
                    }
                </div>
                {!collapsed && (headerContent != "" || (collapsable ?? false)) ?
                    <hr className={[styles.headerSeparator, (theme ?? ICardTheme.Dark) == ICardTheme.Light ? styles.separatorLight : '', classNames?.separator].join(' ')} style={style?.separator}/>
                    : ''
                }
                {!collapsed && <div className={styles.cardBody}>{children}</div>}
            </div>
        );
    }
    public collapse(){
        this.setState({collapsed: !this.state.collapsed});
    }
}
