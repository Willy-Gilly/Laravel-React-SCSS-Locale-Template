import * as React from 'react';
import styles from './Nav.module.scss'
import {INavProps, INavStates} from './INav';
import LangOptions from "../../LangOptions/LangOptions";
import Modal from "../../Controls/Modal/Modal";
import Button from "../../Controls/Button/Button";

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
            strings, auth, langProps
        } = this.props;
        if(auth){
            return (<section>
                <nav>
                    <LangOptions {...langProps}/>
                    <button onClick={this.logoutViewState}>{strings.Logout}</button>
                </nav>
                <Modal close={this.logoutViewState} showing={showingConfirmationLogoutModal} headerTitle={"Souhaitez-vous vous déconnecter ?"} hasClosingButton={false}>
                    <div className={styles.modalConfirmContainer}>
                        <Button onClick={() => console.log("clicked")}> Confirmer </Button>
                    </div>
                </Modal>
            </section>);
        }
        return (<section>
            <nav>
                <LangOptions {...langProps}/>
                <button onClick={this.loginViewState}>{strings.Login}</button>
                <button onClick={this.registerViewState}>{strings.Register}</button>
            </nav>
            <Modal close={this.loginViewState} showing={showingLoginModal} headerTitle={"Se connecter"} hasClosingButton={false}>
                <div className={styles.modalConfirmContainer}>
                    <button> Confirmer </button>
                </div>
            </Modal>
            <Modal close={this.registerViewState} showing={showingRegisterModal} headerTitle={"S'enregistrer"} hasClosingButton={false}>
                <div className={styles.modalConfirmContainer}>
                    <button> Confirmer </button>
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
