import * as React from 'react';
import styles from './TextBoxExemple.module.scss';
import TextBox from "../../Controls/TextBox/TextBox";
import Card from "../../Controls/Card/Card";
import Code from "../../Controls/Code/Code";
import {IThemeContext, ThemeContext} from "../../../Context/ThemeContext";
import {Language} from "../../Controls/Code/ICode";
import {useContext, useState } from 'react';

export default function TextBoxExemple():React.ReactElement {
    const [baseTextBoxValue, setBaseTextBoxValue] = useState('');
    const context = useContext(ThemeContext);
    return (
        <>
            <Card headerContent={"Theme Dark"} collapsable={true} theme={IThemeContext.Dark} collapsed={context != 0}>
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
                    <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} regex={"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"}/>
                </div>
                <div>
                    <label>Required</label>
                    <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} required={true}/>
                </div>
                <div>
                    <label>Required + Regex (here a valid email)</label>
                    <TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue} regex={"^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"} required={true}/>
                </div>
            </Card>
            <Card headerContent={"Light Theme"} theme={IThemeContext.Light} collapsable={true} collapsed={context == 0}>
                <div>
                    <label>Base</label>
                    <TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>
                </div>
                <div>
                    <label>Disabled</label>
                    <TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue} disabled={true}/>
                </div>
                <div>
                    <label>Named field</label>
                    <TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue} name={"nameExemple"}/>
                </div>
                <div>
                    <label>With a Regex (here, 1 uppercase, 1 lowercase, 1 number, 1 special character and at least 8 length)</label>
                    <TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue} regex={"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"}/>
                </div>
                <div>
                    <label>Required</label>
                    <TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue} required={true}/>
                </div>
                <div>
                    <label>Required + Regex (here a valid email)</label>
                    <TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue} regex={"^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"} required={true}/>
                </div>
            </Card>
            <Card headerContent={"How to use ?"} collapsable={true}>
                <div className={styles.cardSeparator}>
                    <Card headerContent={"Base usage"}>
                        <Code language={Language.HTML} code={`<TextBox onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
                        <p>You must have a function to update your state value in <span className={"hljs-attr"}>onChange</span>, and a value, both are the required props</p>
                    </Card>
                    <Card headerContent={"Light Theme"}>
                        <Code language={Language.HTML} code={`<TextBox theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
                        <p>You just need to add the property called <span className={"hljs-attr"}>theme</span> then set the theme to light with the Enum value <span className={"hljs-string"}>IThemeContext.Light</span></p>
                        <p>Note : <span className={"hljs-string"}>IThemeContext.Dark</span> value also exist, but it is its default value if no theme is selected with <span className={"hljs-built_in"}>ContextTheme</span>.</p>
                    </Card>
                    <Card headerContent={"Disabled"}>
                        <Code language={Language.HTML} code={`<TextBox disabled={true} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`} /*language={ICodeLanguage.HTML}*//>
                        <p>Just add the propertie <span className={"hljs-attr"}>disabled</span>, it only accept <span className={"hljs-built_in"}>string</span> value</p>
                    </Card>
                    <Card headerContent={"Named Field"}>
                        <Code language={Language.HTML} code={`<TextBox name={"nameExemple"} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
                        <p>
                            By adding a name to your field (like "password") it can make the navigator recognize the type of the value,<br/>
                            To do so, add a <span className={"hljs-attr"}>name</span> attribute, containing a <span className={"hljs-built_in"}>string</span> value.
                        </p>
                    </Card>
                    <Card headerContent={"With a Regex"}>
                        <Code language={Language.HTML} code={`<TextBox regex={"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"} theme={IThemeContext.Light} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
                        <p>
                            By adding a <span className={"hljs-attr"}>regex</span> value, you trigger the styles <span className={"hljs-attr"}>valid</span> and <span className={"hljs-attr"}>invalid</span>.
                            Note : It WILL accept empty value.
                        </p>
                    </Card>
                    <Card headerContent={"Required"}>
                        <Code language={Language.HTML} code={`<TextBox required={true} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
                        <p>By adding a <span className={"hljs-attr"}>required</span> value, you trigger the styles <span className={"hljs-string"}>valid</span> and <span className={"hljs-string"}>invalid</span> depending of the field is empty or not.</p>
                    </Card>
                    <Card headerContent={"Required + Regex"}>
                        <Code language={Language.HTML} code={`<TextBox regex={"^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"} required={true} onChange={setBaseTextBoxValue} value={baseTextBoxValue}/>`}/>
                        <p>
                            In the case of where you need to validate the value AND is not an empty <span className={"hljs-built_in"}>string</span>, you can add both
                            <span className={"hljs-attr"}> regex</span> and <span className={"hljs-attr"}>required</span>.
                            This will display <span className={"hljs-string"}>valid</span> / <span className={"hljs-string"}>invalid</span> styles properly.
                        </p>
                    </Card>
                    <Card headerContent={"TypeScript Code Exemple"}>
                        <p>
                            You must have two required props, <span className={"hljs-attr"}>onChange</span> and <span className={"hljs-attr"}>value</span>
                            , <span className={"hljs-attr"}> value</span> is type of <span className={"hljs-built_in"}>string</span> and must be a state that you update in <span className={"hljs-attr"}>onChange</span> function.
                        </p>
                        <p>Here is how to do that for class component: </p>
                        <Code language={Language.TS} code={`public onChangeBaseTextBox(value:string):void{
                                                this.setState({baseTextBoxValue:value});
                                            }`}/>
                        <p>Or in functional component, make the state, and pass the '<span className={"hljs-attr"}>set</span>' method</p>
                        <Code language={Language.TS} code={`const [baseTextBoxValue, setBaseTextBoxValue] = useState('');`}/>
                    </Card>
                </div>
            </Card>
        </>
    );
}
