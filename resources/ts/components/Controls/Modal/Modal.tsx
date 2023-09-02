import * as React from 'react';
import styles from './Modal.module.scss';
import {IModalProps} from './IModal';
import {IThemeContext, ThemeContext} from "../../../context/ThemeContext";
import { useContext, useState } from 'react';
export default function Modal(props:IModalProps): React.ReactElement {
    const context = useContext(ThemeContext);
    const {
        children, close, headerTitle, hasClosingButton, hasHeader, modalTheme, style, classNames, disableAnimation,hideOnEmptyClick
    } = props;
    const [canLeave, setCanLeave] = useState(hideOnEmptyClick ?? true);
    if(props.showing)
    {
        let isLight: boolean = false;
        if((modalTheme ?? context) == IThemeContext.Light){
            isLight = true;
        }
        let anim:boolean = !(disableAnimation ?? false);
        const emptyClick = () => {
          if(canLeave) close();
        };
        const canCloseOnEmptyClick = (e: React.MouseEvent<HTMLElement>, can: boolean) => {
            if(hideOnEmptyClick ?? true) {
                setCanLeave(can);
            }
        };
        return (
            <div className={[styles.modalGlobal,anim ? styles.animGlobal : '', isLight ? styles.globalLightBackground : '', classNames?.calloutStyle].join(' ')}
                 onClick={emptyClick} style={style?.calloutStyle}>
                <section className={[styles.modal,anim ? styles.animModal : '', isLight ? styles.modalLight : '', classNames?.modalStyle].join(' ')}
                         onMouseEnter={(e) => canCloseOnEmptyClick(e, false)}
                         onMouseLeave={(e) => canCloseOnEmptyClick(e, true)} style={style?.modalStyle}>
                    {
                        (hasHeader ?? true) ? <section className={styles.modalHeader} style={style?.modalHeaderStyle}>
                                {headerTitle != "" ? <h1 className={[styles.modalTitle, classNames?.modalTitleStyle].join(' ')} style={style?.modalTitleStyle}>{headerTitle}</h1> : ''}
                                {(hasClosingButton ?? true) ?
                                    <button className={[styles.modalCloseButton, isLight ? styles.modalButtonLight : '', classNames?.modalCloseButtonStyle].join(' ')}
                                            type="button" onClick={close} style={style?.modalCloseButtonStyle}>
                                        ✕
                                    </button>
                                    : ''
                                }
                            </section>
                            : ''
                    }
                    { (headerTitle != "" || (hasClosingButton ?? true)) ?
                        <hr className={[styles.headerSeparator, isLight ? styles.separatorLight : '', classNames?.modalSeparatorStyle].join(' ')} style={style?.modalSeparatorStyle}/>
                        : ''
                    }
                    <section className={[styles.modalBody, classNames?.modalBodyStyle].join(' ')} style={style?.modalBodyStyle}>
                        {children ?? ''}
                    </section>
                </section>
            </div>
        );
    }
    else{
        return <></>;
    }
}
