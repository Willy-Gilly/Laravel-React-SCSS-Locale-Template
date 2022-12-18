import * as React from 'react';

import {ITextBoxExempleProps, ITextBoxExempleStates} from './ITextBoxExemple';
import TextBox from "../../Controls/TextBox/TextBox";
import {ITextBoxTheme} from "../../Controls/TextBox/ITextBox";
import Card from "../../Controls/Card/Card";
import {ICardPosition} from "../../Controls/Card/ICard";


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

    public render() : React.ReactElement {
        const {
            baseTextBoxValue
        } = this.state;
        return (
            <>
                <Card headerContent={"Default Appearance"} position={ICardPosition.center}>
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
                <div>
                    <h2>Light Theme</h2>
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
                </div>
            </>
        );
    }

    public onChangeBaseTextBox(event:React.FormEvent<HTMLInputElement>){
        this.setState({baseTextBoxValue:event.currentTarget.value});
    }
}
