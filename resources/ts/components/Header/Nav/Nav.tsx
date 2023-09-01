import * as React from 'react';
import styles from './Nav.module.scss'
import {INavProps, INavStates} from './INav';
import LangOptions from "../../Controls/LangOptions/LangOptions";
import Modal from "../../Controls/Modal/Modal";
import Button from "../../Controls/Button/Button";
import {IButtonDisplay, IButtonStyle} from "../../Controls/Button/IButton";
import NavButton from "./NavButton/NavButton";
import TextBox from "../../Controls/TextBox/TextBox";
import {IThemeContext} from "../../../Context/ThemeContext";
import {AppContext} from "../../../Context/AppContext";
import {NavLang} from "../IHeader";

export default class Nav extends React.Component<INavProps,INavStates> {
    public static contextType = AppContext;
    public context!: React.ContextType<typeof AppContext>;
    constructor(props, context) {
        super(props, context);
        this.stateInitializer();
        this.loginViewState = this.loginViewState.bind(this);
        this.logoutViewState = this.logoutViewState.bind(this);
        this.registerViewState = this.registerViewState.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleKeyPressLogin = this.handleKeyPressLogin.bind(this);

        this.handleEmailRChange = this.handleEmailRChange.bind(this);
        this.handlePasswordRChange = this.handlePasswordRChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleLoginRChange = this.handleLoginRChange.bind(this);
        this.handlePseudoChange = this.handlePseudoChange.bind(this);
    }
    private regexStringEmail:string = "^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$";
    private regexStringLogin:string = "^([a-zA-Z0-9-_]){3,20}$";//use the same for pseudo
    private regexStringPassword:string = "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$";
    private regexStringNames:string = "^[a-zA-Zçéèêëàîïûü.\\- ]{2,}$"

    private stateInitializer() {
        this.state = {
            showingLoginModal: false,
            showingRegisterModal: false,
            showingConfirmationLogoutModal: false,
            passwordInput: '',
            loginInput: '',
            canRegister: false,
            firstNameInput: "", lastNameInput:"", loginRInput:"", pseudoInput:"", emailRInput:"", passwordRInput:""
        };
    }
    public render() : React.ReactElement {
        const {
            showingLoginModal, showingRegisterModal, showingConfirmationLogoutModal, loginInput, passwordInput, canRegister,
            firstNameInput, lastNameInput, loginRInput, pseudoInput, emailRInput, passwordRInput
        } = this.state;
        const {
            children, theme
        } = this.props;
        const strings:NavLang = this.context.lang.strings.Header.Nav;
        const userC = this.context.user;
        const {login, logout, register, user, isAuth} = userC;

        const buttonStyle:IButtonStyle = {button: {width: "70%", alignSelf:"center"}};
        const navLight = (theme ?? this.context.theme) == IThemeContext.Light ? styles.navLight : '';
        return (<>
            <nav className={navLight}>
                <div className={styles.left}>
                    <LangOptions/>
                    {user ? <p>{user.pseudo}</p> : ''}
                </div>
                <div className={styles.middle}>
                    {children}
                </div>
                <div className={styles.right}>
                    {
                        isAuth ? <NavButton onClick={this.logoutViewState}>{strings.Logout}</NavButton>
                            : <>
                                <NavButton onClick={this.loginViewState}>{strings.Login}</NavButton>
                                <NavButton onClick={this.registerViewState}>{strings.Register}</NavButton>
                            </>
                    }
                </div>
            </nav>
            <Modal close={this.logoutViewState} showing={showingConfirmationLogoutModal} headerTitle={strings.LogoutHeader} hasClosingButton={false}>
                <div className={styles.modalConfirmContainer}>
                    <Button onClick={this.logoutViewState} display={IButtonDisplay.Error}> {strings.Cancel} </Button>
                    <Button onClick={logout} display={IButtonDisplay.Confirm}> {strings.Confirm} </Button>
                </div>
            </Modal>
            <Modal close={this.loginViewState} showing={showingLoginModal} headerTitle={strings.Login} hasClosingButton={false}>
                <div className={styles.modalLoginContainer}>
                    <TextBox onChange={this.handleLoginChange} value={loginInput} name={"login"} placeholder={strings.LoginInput} onKeyPress={this.handleKeyPressLogin}/>
                    <TextBox onChange={this.handlePasswordChange} value={passwordInput} isPasswordInput={true} name={"password"} placeholder={strings.PasswordInput}/>
                    <Button disabled={loginInput == "" || passwordInput == ""} onClick={loginInput != "" && passwordInput != "" ? () => {
                        login(loginInput, passwordInput);
                    } : () => this.loginViewState()} style={buttonStyle}> {strings.Confirm} </Button>
                </div>
            </Modal>
            <Modal close={this.registerViewState} showing={showingRegisterModal} headerTitle={strings.Register} hasClosingButton={false}>
                <div className={styles.modalLoginContainer}>
                    <div>
                        <label>{strings.FirstName}</label>
                        <TextBox onChange={this.handleFirstNameChange} value={firstNameInput} name={"firstname"} required={true} regex={this.regexStringNames} placeholder={strings.FirstName}/>
                    </div>
                    <div>
                        <label>{strings.LastName}</label>
                        <TextBox onChange={this.handleLastNameChange} value={lastNameInput} name={"lastname"} required={true} regex={this.regexStringNames} placeholder={strings.LastName}/>
                    </div>
                    <div>
                        <label>{strings.LoginF}</label>
                        <TextBox onChange={this.handleLoginRChange} value={loginRInput} name={"login"} required={true} regex={this.regexStringLogin} placeholder={strings.LoginF}/>
                    </div>
                    <div>
                        <label>{strings.Pseudo}</label>
                        <TextBox onChange={this.handlePseudoChange} value={pseudoInput} name={"pseudo"} required={true} regex={this.regexStringLogin} placeholder={strings.Pseudo}/>
                    </div>
                    <div>
                        <label>{strings.Email}</label>
                        <TextBox onChange={this.handleEmailRChange} value={emailRInput} name={"email"} required={true} regex={this.regexStringEmail} placeholder={strings.Email}/>
                    </div>
                    <div>
                        <label>{strings.PasswordInput}</label>
                        <TextBox onChange={this.handlePasswordRChange} value={passwordRInput} name={"password"} isPasswordInput={true} required={true} regex={this.regexStringPassword} placeholder={strings.PasswordInput}/>
                    </div>
                    <Button onClick={() => {
                        register(firstNameInput, lastNameInput, loginRInput, pseudoInput, emailRInput, passwordRInput);
                    }} style={buttonStyle} disabled={!canRegister}> {strings.Confirm} </Button>
                </div>
            </Modal>
        </>);
    }
    //region Login
    public handleKeyPressLogin(event:React.KeyboardEvent){
        if(event.key == "Enter" && (this.state.loginInput != "" && this.state.passwordInput != "")){
            this.context.user.login(this.state.loginInput, this.state.passwordInput);
        }
    }
    public handleLoginChange(value:string){
        this.setState({loginInput: value});
    }
    public handlePasswordChange(value:string){
        this.setState({passwordInput: value});
    }
    //endregion login
    //region register
    public handleFirstNameChange(value:string){
        this.setState({firstNameInput:value}, () => this.validateRegister());
    }
    public handleLastNameChange(value:string){
        this.setState({lastNameInput:value}, () => this.validateRegister());
    }
    public handleLoginRChange(value:string){
        this.setState({loginRInput:value}, () => this.validateRegister());
    }
    public handlePseudoChange(value:string){
        this.setState({pseudoInput:value}, () => this.validateRegister());
    }
    public handleEmailRChange(value:string){
        this.setState({emailRInput:value}, () => this.validateRegister());
    }
    public handlePasswordRChange(value:string){
        this.setState({passwordRInput:value}, () => this.validateRegister());
    }
    public validateRegister(){
        const regexLogin = new RegExp(this.regexStringLogin);//and pseudo
        const regexEmail = new RegExp(this.regexStringEmail);
        const regexPassword = new RegExp(this.regexStringPassword);
        const regexName = new RegExp(this.regexStringNames);
        this.setState({canRegister:
                regexLogin.test(this.state.loginRInput)
                && regexEmail.test(this.state.emailRInput)
                && regexPassword.test(this.state.passwordRInput)
                && regexLogin.test(this.state.pseudoInput)
                && regexName.test(this.state.lastNameInput)
                && regexName.test(this.state.firstNameInput)
        });
    }
    //endregion register
    //region modalOpen
    public logoutViewState():void{
        this.setState({showingConfirmationLogoutModal: !this.state.showingConfirmationLogoutModal});
    }
    public loginViewState():void{
        this.setState({showingLoginModal: !this.state.showingLoginModal});
    }
    public registerViewState():void{
        this.setState({showingRegisterModal: !this.state.showingRegisterModal});
    }
    //endregion modalOpen
}
