import * as React from 'react';
import styles from './ControlExemple.module.scss';

import {IControlExempleProps, IControlExempleStates, SubPage} from './IControlExemple';
import Link from "../Controls/Link/Link";
import TextBoxExemple from "./TextBoxExemple/TextBoxExemple";
import {ThemeContext} from "../../context/ThemeContext";
import ButtonExemple from "./ButtonExemple/ButtonExemple";


export default class ControlExample extends React.Component<IControlExempleProps,IControlExempleStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.changePage = this.changePage.bind(this);
    }
    static contextType = ThemeContext;

    private stateInitializer() {
        this.state = {
            page: SubPage.Base
        };
    }

    public render() : React.ReactElement {
        const {
            page
        } = this.state;
        const {

        } = this.props;
        const subpage:() => React.ReactElement = () => {
            switch (page){
                case SubPage.Base: return (
                    <>
                        <div className={styles.main}>
                            <h2>Basic Inputs</h2>
                            <div>
                                <Link onClick={undefined} disabled={true}>CheckBox</Link>
                                <Link onClick={undefined} disabled={true}>Toggle</Link>
                                <Link onClick={() => this.changePage(SubPage.TextBox)}>TextBox</Link>
                                <Link onClick={undefined} disabled={true}>DropDown</Link>
                                <Link onClick={undefined} disabled={true}>SearchBox</Link>
                                <Link onClick={undefined} disabled={true}>SpinButton</Link>
                                <Link onClick={undefined} disabled={true}>ChoiceGroup</Link>
                                <Link onClick={undefined} disabled={true}>Slider</Link>
                                <Link onClick={undefined} disabled={true}>ColorPicker</Link>
                                <Link onClick={undefined} disabled={true}>DatePicker</Link>
                                <Link onClick={undefined} disabled={true}>TimePicker</Link>
                            </div>
                        </div>
                        <div className={styles.main}>
                            <h2>User Interactions</h2>
                            <div>
                                <Link onClick={() => this.changePage(SubPage.Button)}>Button</Link>
                                <Link onClick={() => this.changePage(SubPage.NavButton)}>NavButton</Link>
                                <Link onClick={() => this.changePage(SubPage.Link)}>Link</Link>
                                <Link onClick={undefined} disabled={true}>ToolTip</Link>
                            </div>
                        </div>
                        <div className={styles.main}>
                            <h2>Display</h2>
                            <div>
                                <Link onClick={undefined} disabled={true}>Label</Link>
                                <Link onClick={undefined} disabled={true}>Calendar</Link>
                                <Link onClick={() => this.changePage(SubPage.NavBar)}>NavBar</Link>
                                <Link onClick={() => this.changePage(SubPage.Modal)}>Modal</Link>
                                <Link onClick={undefined} disabled={true}>Panel</Link>
                                <Link onClick={undefined} disabled={true}>Card</Link>
                                <Link onClick={undefined} disabled={true}>Notification</Link>
                                <Link onClick={undefined} disabled={true}>MessageBar</Link>
                                <Link onClick={undefined} disabled={true}>Spinner</Link>
                            </div>
                        </div>
                        <div className={styles.main}>
                            <h2>List</h2>
                            <div>
                                <Link onClick={undefined} disabled={true}>Table</Link>
                                <Link onClick={undefined} disabled={true}>List</Link>
                            </div>
                        </div>
                        <div className={styles.main}>
                            <h2>Pickers</h2>
                            <div>
                                <Link onClick={undefined} disabled={true}>ItemPicker</Link>
                                <Link onClick={undefined} disabled={true}>PeoplePicker</Link>
                            </div>
                        </div>
                    </>
                );
                case SubPage.TextBox : return (
                  <>
                    <div>
                        <h2>TextBox</h2>
                        <div className={styles.subCategory}>
                            <TextBoxExemple/>
                        </div>
                    </div>
                  </>
                );
                case SubPage.Button : return (
                    <>
                        <div>
                            <h2>TextBox</h2>
                            <div className={styles.subCategory}>
                                <ButtonExemple/>
                            </div>
                        </div>
                    </>
                );
            }
        };

        return (
            <div className={styles.myControlExempleComponent}>
                <aside className={styles.leftPanel}>
                    left panel
                </aside>
                <main className={styles.controlDisplayList}>
                    {subpage()}
                </main>
            </div>
        );
    }
    public changePage(page:SubPage):void{
        this.setState({page:page});
    }
}
