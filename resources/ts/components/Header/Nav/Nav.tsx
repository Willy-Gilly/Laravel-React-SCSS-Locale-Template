import * as React from 'react';
import styles from './Nav.module.scss'
import {INavProps, INavStates} from './INav';
import LangOptions from "../../LangOptions/LangOptions";
import Modal from "../../Controls/Modal/Modal";
import Button from "../../Controls/Button/Button";
import {IButtonDisplay, IButtonTheme} from "../../Controls/Button/IButton";
import NavButton from "../../Controls/NavButton/NavButton";

export default class Nav extends React.Component<INavProps,INavStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.loginViewState = this.loginViewState.bind(this);
        this.logoutViewState = this.logoutViewState.bind(this);
        this.registerViewState = this.registerViewState.bind(this);
    }
    public componentDidMount() {

    }

    private stateInitializer() {
        this.state = {
            showingLoginModal: false,
            showingRegisterModal: false,
            showingConfirmationLogoutModal: false,
        };
    }

    public render() : React.ReactElement {
        const {
            showingLoginModal, showingRegisterModal, showingConfirmationLogoutModal
        } = this.state;
        const {
            strings, auth, langProps, user
        } = this.props;
        if(auth){
            return (<section>
                <nav>
                    <div className={styles.left}>
                        <LangOptions {...langProps}/>
                        <p> {user.pseudo} </p>
                    </div>
                    <div className={styles.middle}>

                    </div>
                    <div className={styles.right}>
                        <NavButton onClick={this.logoutViewState}>{strings.Logout}</NavButton>
                    </div>
                </nav>
                <Modal close={this.logoutViewState} showing={showingConfirmationLogoutModal} headerTitle={"Souhaitez-vous vous déconnecter ?"} hasClosingButton={false}>
                    <div className={styles.modalConfirmContainer}>
                        <Button onClick={this.logoutViewState} display={IButtonDisplay.Error}> Annuler </Button>
                        <Button onClick={() => this.props.logoutF()} display={IButtonDisplay.Confirm}> Confirmer </Button>
                    </div>
                </Modal>
            </section>);
        }
        return (<section>
            <nav>
                <div className={styles.left}>
                    <LangOptions {...langProps}/>
                </div>
                <div className={styles.middle}>

                </div>
                <div className={styles.right}>
                    <NavButton onClick={this.loginViewState}>{strings.Login}</NavButton>
                    <NavButton onClick={this.registerViewState}>{strings.Register}</NavButton>
                </div>
            </nav>
            <Modal close={this.loginViewState} showing={showingLoginModal} headerTitle={"Se connecter"} hasClosingButton={false}>
                <div className={styles.modalConfirmContainer}>
                    <Button onClick={() => ''}> Confirmer </Button>
                </div>
            </Modal>
            <Modal close={this.registerViewState} showing={showingRegisterModal} headerTitle={"S'enregistrer"} hasClosingButton={false}>
                <div className={styles.modalConfirmContainer}>
                    <Button onClick={() => ''}> Confirmer </Button>
                </div>
            </Modal>
        </section>);
    }

    public logoutViewState():void{
        this.setState({showingConfirmationLogoutModal: !this.state.showingConfirmationLogoutModal});
    }
    public loginViewState():void{
        this.setState({showingLoginModal: !this.state.showingLoginModal});
    }
    public registerViewState():void{
        this.setState({showingRegisterModal: !this.state.showingRegisterModal});
    }
}
