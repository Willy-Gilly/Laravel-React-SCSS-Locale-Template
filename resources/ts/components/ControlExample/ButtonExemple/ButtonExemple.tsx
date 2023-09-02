import React, {ReactElement} from "react";
import Button from "../../Controls/Button/Button";
import Code from "../../Controls/Code/Code";
import {Language} from "../../Controls/Code/ICode";
import Card from "../../Controls/Card/Card";
import {IButtonDisplay} from "../../Controls/Button/IButton";
import ExempleLayout, {SpanObjectProperty, SpanProperty, SpanTypeProperty} from "../ExempleLayout";
import styles from "./ButtonExemple.module.scss";

export default function ButtonExemple(): ReactElement{
    const onClick = () => console.log("Clicked");
    const children = (<div className={styles.childSeparator}>
        <div>
            <label>Default</label>
            <Button onClick={onClick}/>
        </div>
        <div>
            <Button onClick={onClick}>With text inside</Button>
        </div>
        <small style={{fontSize:"10px", fontStyle:"italic"}}>From now we will keep text inside for better display</small>
        <div>
            <Button onClick={onClick} disabled={true}>Disabled</Button>
        </div>
        <div>
            <Button onClick={onClick} disableAnimation={true}>Disabled Animation</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.Confirm}>Confirm</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.Error}>Error</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.Warning}>Warning</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.Primary}>Primary</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.PrimaryConfirm}>Primary Confirm</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.PrimaryError}>Primary Error</Button>
        </div>
        <div>
            <Button onClick={onClick} display={IButtonDisplay.PrimaryWarning}>Primary Warning</Button>
        </div>
    </div>);
    const usageExemple = (<>
        <Card headerContent={"Base usage"}>
            <Code language={Language.HTML} code={`<Button onClick={onclick}/>`}/>
            <p>You can pass a method that will be executed <SpanProperty>onClick</SpanProperty></p>
        </Card>
        <Card headerContent={"With text inside"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick}>Test</Button>`}/>
            <Code language={Language.HTML} code={`<Button onClick={onClick} children={"Text"}/>`}/>
            <p>You can either set the text inside element or by <SpanProperty>children</SpanProperty> property, it accepts any <SpanObjectProperty>ReactElement</SpanObjectProperty> value.</p>
        </Card>
        <Card headerContent={"Disabled"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} disabled={true}>Test</Button>`}/>
            <p>Set property <SpanProperty>disabled</SpanProperty> with a <SpanTypeProperty>boolean</SpanTypeProperty></p>
            <p>Note : <SpanProperty>disabled</SpanProperty> also disable animations.</p>
        </Card>
        <Card headerContent={"Disabled Animation"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} disableAnimation={true}>Disabled Animation</Button>`}/>
            <p>Define <SpanProperty>disabledAnimation</SpanProperty> to <SpanTypeProperty>true</SpanTypeProperty> to disable animations on click.</p>
        </Card>
        <Card headerContent={"Confirm"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.Confirm}>Confirm</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>Confirm</SpanTypeProperty> value to set a default confirmation appearance.</p>
        </Card>
        <Card headerContent={"Error"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.Error}>Error</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>Error</SpanTypeProperty> value to set a default error appearance.</p>
        </Card>
        <Card headerContent={"Warning"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.Warning}>Warning</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>Warning</SpanTypeProperty> value to set a default warning appearance.</p>
        </Card>
        <Card headerContent={"Primary"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.Primary}>Primary</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>Primary</SpanTypeProperty> value to set a default primary appearance.</p>
        </Card>
        <Card headerContent={"Primary Confirm"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.PrimaryConfirm}>Primary Confirm</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>PrimaryConfirm</SpanTypeProperty> value to set a default primary confirmation appearance.</p>
        </Card>
        <Card headerContent={"Primary Error"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.PrimaryError}>Primary Error</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>PrimaryError</SpanTypeProperty> value to set a default primary error appearance.</p>
        </Card>
        <Card headerContent={"Primary Warning"}>
            <Code language={Language.HTML} code={`<Button onClick={onClick} display={IButtonDisplay.PrimaryWarning}>Primary Warning</Button>`}/>
            <p>Use the <SpanProperty>display</SpanProperty> in combinaison with the <SpanObjectProperty>IButtonDisplay </SpanObjectProperty>
                set to the <SpanTypeProperty>PrimaryWarning</SpanTypeProperty> value to set a default primary warning appearance.</p>
        </Card>
    </>);

    const typeScriptExemple = (<>
        <p>
            You only have one required property, the onClick property, use it to define what happens when you click on your button.
            <br/>This function must return <SpanObjectProperty>void</SpanObjectProperty> type
            <br/>Sometimes you might also want to use <SpanProperty>type</SpanProperty> property for
            <SpanObjectProperty> "submit"</SpanObjectProperty> or <SpanObjectProperty>"reset"</SpanObjectProperty>,
            you can do it, but pass the value <SpanTypeProperty>undefined</SpanTypeProperty> to <SpanProperty>onClick</SpanProperty>.
        </p>
        <p>Here is an exemple of <SpanProperty>onClick</SpanProperty> method : </p>
        <Code language={Language.TS} code={`public onClick():void{
                                                this.setState({clicked:true}, () => console.log("Hi!"));
                                            }//Dont forget the bind if you pass it through a class method.`}/>
        <p>Or the arrowed functions :</p>
        <Code language={Language.TS} code={`const onClick = () => console.log("Hi!");`}/>
    </>);


    return (<ExempleLayout children={children} usageExemple={usageExemple} typeScriptExemple={typeScriptExemple}/>);
}
