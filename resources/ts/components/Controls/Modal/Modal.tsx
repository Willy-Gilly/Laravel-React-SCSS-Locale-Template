import * as React from 'react';
import styles from './Modal.module.scss';
import {IModalProps, IModalStates, ModalTheme} from './IModal';
export default class Modal extends React.Component<IModalProps,IModalStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.canCloseOnEmptyClick = this.canCloseOnEmptyClick.bind(this);
        this.emptyClick = this.emptyClick.bind(this);
    }
    private stateInitializer() {
        this.state = {
            canLeave: this.props.hideOnEmptyClick ?? true,
        };
    }
    public render() : React.ReactElement|string {
        if(this.props.showing)
        {
            const {
                children, close, headerTitle, hasClosingButton, hasHeader, modalTheme, style, classNames, disableAnimation
            } = this.props;
            let isLight: boolean = false;
            if((modalTheme ?? ModalTheme.Dark) == ModalTheme.Light){
                isLight = true;
            }
            let anim:boolean = !(disableAnimation ?? false);
            return (
                <div className={[styles.modalGlobal,anim ? styles.animGlobal : '', isLight ? styles.globalLightBackground : '', classNames?.calloutStyle].join(' ')}
                     onClick={this.emptyClick} style={style?.calloutStyle}>
                    <section className={[styles.modal,anim ? styles.animModal : '', isLight ? styles.modalLight : '', classNames?.modalStyle].join(' ')}
                             onMouseEnter={(e) => this.canCloseOnEmptyClick(e, false)}
                             onMouseLeave={(e) => this.canCloseOnEmptyClick(e, true)} style={style?.modalStyle}>
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
            return '';
        }
    }
    public emptyClick(){
        if(this.state.canLeave){
            this.props.close();
        }
    }
    public canCloseOnEmptyClick(e: React.MouseEvent<HTMLElement>, can: boolean){
        let a = this.props.hideOnEmptyClick ?? true;
        if(a) this.setState({canLeave: can});
    }
}
