import * as React from 'react';
import styles from './TextBoxExemple.module.scss';
import TextBox from "../../Controls/TextBox/TextBox";
import Card from "../../Controls/Card/Card";
import Code from "../../Controls/Code/Code";
import {IThemeContext, ThemeContext} from "../../../context/ThemeContext";
import {Language} from "../../Controls/Code/ICode";
import {useContext, useState } from 'react';
import ExempleLayout, {SpanProperty, SpanTypeProperty, SpanObjectProperty} from "../ExempleLayout";

export default function TextBoxExemple():React.ReactElement {
    const [baseTextBoxValue, setBaseTextBoxValue] = useState('');
    const context = useContext(ThemeContext);
    const validEmail = /^([a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9]+)$/;
    const validPassword = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    const children = (<>
        <div>
            <label>Base</label>
            <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>
        </div>
        <div>
            <label>Disabled</label>
            <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} disabled={true}/>
        </div>
        <div>
            <label>Named field</label>
            <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} name={"nameExemple"}/>
        </div>
        <div>
            <label>With a Regex (here, 1 uppercase, 1 lowercase, 1 number, 1 special character and at least 8 length)</label>
            <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} regex={validPassword}/>
        </div>
        <div>
            <label>Required</label>
            <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} required={true}/>
        </div>
        <div>
            <label>Required + Regex (here a valid email)</label>
            <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} regex={validEmail} required={true}/>
        </div>
    </>);

    const usageExemple = (<>
        <Card headerContent={"Base usage"}>
            <Code language={Language.HTML} code={`<TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
            <p>You must have a function to update your state value in <SpanProperty>onChange</SpanProperty>, and a value, both are the required props</p>
        </Card>
        <Card headerContent={"Light Theme"}>
            <Code language={Language.HTML} code={`<TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
            <p>You just need to add the property called <SpanProperty>theme</SpanProperty> then set the theme to light with the Enum value <SpanObjectProperty>IThemeContext.Light</SpanObjectProperty></p>
            <p>Note : <SpanObjectProperty>IThemeContext.Dark</SpanObjectProperty> value also exist, but it is its default value if no theme is selected with <SpanTypeProperty>ContextTheme</SpanTypeProperty>.</p>
        </Card>
        <Card headerContent={"Disabled"}>
            <Code language={Language.HTML} code={`<TextBox disabled={true} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
            <p>Just add the property <SpanProperty>disabled</SpanProperty>, it only accept <SpanTypeProperty>string</SpanTypeProperty> value</p>
        </Card>
        <Card headerContent={"Named Field"}>
            <Code language={Language.HTML} code={`<TextBox name={"nameExemple"} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
            <p>
                By adding a name to your field (like "password") it can make the navigator recognize the type of the value,<br/>
                To do so, add a <SpanProperty>name</SpanProperty> attribute, containing a <SpanTypeProperty>string</SpanTypeProperty> value.
            </p>
        </Card>
        <Card headerContent={"With a Regex"}>
            <Code language={Language.HTML} code={`<TextBox regex={/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/} theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
            <p>
                By adding a <SpanProperty>regex</SpanProperty> value, you trigger the styles <SpanProperty>valid</SpanProperty> and <SpanProperty>invalid</SpanProperty>.
                Note : It WILL accept empty value.
            </p>
        </Card>
        <Card headerContent={"Required"}>
            <Code language={Language.HTML} code={`<TextBox required={true} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
            <p>By adding a <SpanProperty>required</SpanProperty> value, you trigger the styles <SpanObjectProperty>valid</SpanObjectProperty> and <SpanObjectProperty>invalid</SpanObjectProperty> depending of the field is empty or not.</p>
        </Card>
        <Card headerContent={"Required + Regex"}>
            <Code language={Language.HTML} code={`<TextBox regex={/^([a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z0-9]+)$/} required={true} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
            <p>
                In the case of where you need to validate the value AND is not an empty <SpanTypeProperty>string</SpanTypeProperty>, you can add both
                <SpanProperty> regex</SpanProperty> and <SpanProperty>required</SpanProperty>.
                This will display <SpanObjectProperty>valid</SpanObjectProperty> / <SpanObjectProperty>invalid</SpanObjectProperty> styles properly.
            </p>
        </Card>
    </>);
    const typeScriptExemple = (<>
        <p>
            You must have two required props, <SpanProperty>onChange</SpanProperty> and <SpanProperty>value</SpanProperty>
            , <SpanProperty> value</SpanProperty> is type of <SpanTypeProperty>string</SpanTypeProperty> and must be a state that you update in <SpanProperty>onChange</SpanProperty> function.
        </p>
        <p>Here is how to do that for class component: </p>
        <Code language={Language.TS} code={`public setBaseTextBoxValue(value:string):void{
                                                this.setState({baseTextBoxValue:value});
                                            }//Dont forget the bind if you pass it through a class method.`}/>
        <p>Or in functional component, make the state, and pass the '<SpanProperty>set</SpanProperty>' method</p>
        <Code language={Language.TS} code={`const [baseTextBoxValue, setBaseTextBoxValue] = useState('');`}/>
    </>);
    return (
        <ExempleLayout children={children} usageExemple={usageExemple} typeScriptExemple={typeScriptExemple}/>
    );
}
