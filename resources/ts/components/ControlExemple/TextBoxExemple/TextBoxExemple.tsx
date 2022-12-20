import * as React from 'react';
import styles from './TextBoxExemple.module.scss';
import {ITextBoxExempleProps, ITextBoxExempleStates} from './ITextBoxExemple';
import TextBox from "../../Controls/TextBox/TextBox";
import {ITextBoxTheme} from "../../Controls/TextBox/ITextBox";
import Card from "../../Controls/Card/Card";
import {ICardTheme} from "../../Controls/Card/ICard";
import Code from "../../Controls/Code/Code";
import {ICodeLanguage} from "../../Controls/Code/ICode";

export default class TextBoxExemple extends React.Component<ITextBoxExempleProps,ITextBoxExempleStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
        this.onChangeBaseTextBox = this.onChangeBaseTextBox.bind(this);
    }
    private stateInitializer():void {
        this.state = {
            baseTextBoxValue:'',
        };
    }
    public componentDidMount(){
    }

    public render() : React.ReactElement {
        const {
            baseTextBoxValue
        } = this.state;
        return (
            <>
                <Card headerContent={"Default Appearance"} collapsable={true}>
                    <div>
                        <label>Base</label>
                        <TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>
                    </div>
                    <div>
                        <label>Disabled</label>
                        <TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} disabled={true}/>
                    </div>
                    <div>
                        <label>Named field</label>
                        <TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} name={"nameExemple"}/>
                    </div>
                    <div>
                        <label>With a Regex (here, 1 uppercase, 1 lowercase, 1 number, 1 special character and at least 8 length)</label>
                        <TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} regex={"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"}/>
                    </div>
                    <div>
                        <label>Required</label>
                        <TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} required={true}/>
                    </div>
                    <div>
                        <label>Required + Regex (here a valid email)</label>
                        <TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} regex={"^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"} required={true}/>
                    </div>
                </Card>
                <Card headerContent={"Light Theme"} theme={ICardTheme.Light} collapsable={true} collapsed={true}>
                    <div>
                        <label>Base</label>
                        <TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>
                    </div>
                    <div>
                        <label>Disabled</label>
                        <TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} disabled={true}/>
                    </div>
                    <div>
                        <label>Named field</label>
                        <TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} name={"nameExemple"}/>
                    </div>
                    <div>
                        <label>With a Regex (here, 1 uppercase, 1 lowercase, 1 number, 1 special character and at least 8 length)</label>
                        <TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} regex={"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"}/>
                    </div>
                    <div>
                        <label>Required</label>
                        <TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} required={true}/>
                    </div>
                    <div>
                        <label>Required + Regex (here a valid email)</label>
                        <TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue} regex={"^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"} required={true}/>
                    </div>
                </Card>
                <Card headerContent={"How to use ?"} collapsable={true}>
                    <div className={styles.cardSeparator}>
                        <Card headerContent={"Base usage"}>
                            <Code code={`<TextBox onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
                            <p>You must have a function to update your state value in <span className={"hljs-attr"}>onChange</span>, and a value, both are the required props</p>
                        </Card>
                        <Card headerContent={"Light Theme"}>
                            <Code code={`<TextBox theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
                            <p>You just need to add the property called <span className={"hljs-attr"}>theme</span> then set the theme to light with the Enum value <span className={"hljs-string"}>ITextBoxTheme.Light</span></p>
                            <p>Note : <span className={"hljs-string"}>ITextBoxTheme.Dark</span> value also exist, but it is its default value.</p>
                        </Card>
                        <Card headerContent={"Disabled"}>
                            <Code code={`<TextBox disabled={true} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
                            <p>Just add the propertie <span className={"hljs-attr"}>disabled</span>, it only accept boolean value</p>
                        </Card>
                        <Card headerContent={"Named Field"}>
                            <Code code={`<TextBox name={"nameExemple"} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`}/>
                            <p>
                                By adding a name to your field (like "password") it can make the navigator recognize the type of the value,<br/>
                                To do so, add a <span className={"hljs-attr"}>name</span> attribute, containing a string value.
                            </p>
                        </Card>
                        <Card headerContent={"With a Regex"}>
                            <Code code={`<TextBox regex={"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"} theme={ITextBoxTheme.Light} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`}/>
                            <p>
                                By adding a <span className={"hljs-attr"}>regex</span> value, you trigger the styles <span className={"hljs-attr"}>valid</span> and <span className={"hljs-attr"}>invalid</span>.
                                Note : It WILL accept empty value.
                            </p>
                        </Card>
                        <Card headerContent={"Required"}>
                            <Code code={`<TextBox required={true} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`}/>
                            By adding a <span className={"hljs-attr"}>required</span> value, you trigger the styles <span className={"hljs-string"}>valid</span> and <span className={"hljs-string"}>invalid</span> depending of the field is empty or not.
                        </Card>
                        <Card headerContent={"Required + Regex"}>
                            <Code code={`<TextBox regex={"^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"} required={true} onChange={this.onChangeBaseTextBox} value={baseTextBoxValue}/>`}/>
                            <p>
                                In the case of where you need to validate the value AND is not an empty string, you can add both
                                <span className={"hljs-attr"}> regex</span> and <span className={"hljs-attr"}>required</span>.
                                This will display <span className={"hljs-string"}>valid</span> / <span className={"hljs-string"}>invalid</span> styles properly.
                            </p>
                        </Card>
                    </div>
                </Card>
            </>
        );
    }

    public onChangeBaseTextBox(event:React.FormEvent<HTMLInputElement>){
        this.setState({baseTextBoxValue:event.currentTarget.value});
    }

}
