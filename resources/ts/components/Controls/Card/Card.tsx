import * as React from 'react';
import styles from './Card.module.scss';

import {
    ICardPosition,
    ICardProps,
} from './ICard';
import {IThemeContext, ThemeContext} from "../../../Context/ThemeContext";
import { useContext, useState } from 'react';

export default function Card(props:ICardProps) {
    const [collapsed, setCollapsed] = useState(props.collapsed ?? false);
    const {
        theme, style, classNames, disableAnimation, collapsable, children, headerContent, position
    } = props;
    const context = useContext(ThemeContext);
    let styleString:string = styles.card + " ";
    if((position ?? ICardPosition.left) == ICardPosition.center) styleString += styles.centered + " ";
    if((position ?? ICardPosition.left) == ICardPosition.right) styleString += styles.right + " ";
    if(theme ?? context == IThemeContext.Light) styleString += styles.cardLight + " ";
    return (
        <ThemeContext.Provider value={theme ?? (context as IThemeContext)}>
            <div className={styleString}>
                <div className={styles.cardHeader}>
                    {headerContent && <h3 className={[styles.cardTitle, classNames?.title].join(' ')} style={style?.title}>{headerContent}</h3>}
                    {(collapsable ?? false) ?
                        <button className={[styles.cardCloseButton, (theme ?? context) == IThemeContext.Light ? styles.cardButtonLight : '', classNames?.closingButton].join(' ')}
                                type="button" onClick={() => setCollapsed(!collapsed)} style={style?.closingButton}>
                            {collapsed ? "+" : "-"}
                        </button>
                        : ''
                    }
                </div>
                {!collapsed && (headerContent != "" || (collapsable ?? false)) ?
                    <hr className={[styles.headerSeparator, (theme ?? context) == IThemeContext.Light ? styles.separatorLight : '', classNames?.separator].join(' ')} style={style?.separator}/>
                    : ''
                }
                {!collapsed && <div className={styles.cardBody}>{children}</div>}
            </div>
        </ThemeContext.Provider>
    );
}
