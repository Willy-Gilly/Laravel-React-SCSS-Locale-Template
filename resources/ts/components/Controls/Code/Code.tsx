import * as React from 'react';
import styles from './Code.module.scss';
import {HTMLElement, HTMLTypes, ICodeLanguage, ICodeProps, ICodeStates} from './ICode';


export default class Code extends React.Component<ICodeProps,ICodeStates> {
    constructor(props) {
        super(props);
        this.stateInitializer();
    }
    private stateInitializer():void {
        this.state = {
            renderedCode: '',
        };
    }
    public componentDidMount(){
        //console.log("code mounted")
        if(this.props.language == ICodeLanguage.HTML) this.renderHtmlCode();
        else this.renderTsCode();
    }

    public render() : React.ReactElement {
        const {

        } = this.props;
        const renderedCode = this.state.renderedCode;
        return (
            <code>
                {renderedCode}
            </code>
        );
    }

    public renderHtmlCode(){
        //console.log("Rendering HTML Code")
        const codeToDisplay = this.props.code;
        let regexStartElement = new RegExp('<[a-zA-Z]+');//<aBc
        let regexEndElement = new RegExp('\/>|<\/[a-zA-Z]+>')//   /> </aBc>
        let regexAttr = new RegExp('[a-zA-Z]*=');// attr=  without =
        let regexAttrValue = new RegExp('{[^}]+}');// {anything} with curly brackets
        let regexBrackets = new RegExp('[{}]'); //  { and }
        let regexQuotes = new RegExp(`["']([^"']+)["']`); // catches anything between " " or between ' '
        let regexLiteral = new RegExp(`>.*`);
        let regexBreak = new RegExp(`<br/>`);
        let arrElement:HTMLElement[] = [];
        //</span> ©
        //<span> ֍
        let encodedString:string = ""+ codeToDisplay;
        let iteration:number = 0; // to be sure it doesn't infinite loop

        const getPosition = (arr:HTMLElement[], element:HTMLElement) => {
            let newArr:HTMLElement[] = [];
            for (let i = 0; i < arr.length; i++) {
                newArr.push({
                    position: undefined,
                    type: arr[i].type,
                    value: arr[i].value
                })
            }
            let e = element;
            e.position = undefined;
            if(newArr.lastIndexOf(e) != -1){
                return newArr.lastIndexOf(e);
            }
            else{
                return 0;
            }
        };

        while(encodedString.length != 0){
            const pastString = ""+encodedString;
            encodedString = encodedString.replace(regexStartElement, (match, value) => {
                const firstIndex = codeToDisplay.indexOf(match);
                const newE:HTMLElement = {
                    position: codeToDisplay.indexOf(match, firstIndex),
                    type: HTMLTypes.OpeningElement,
                    value: match
                }
                newE.position = newE.position + getPosition(arrElement, newE);
                arrElement.push(newE);
                return ``;
            });
            encodedString = encodedString.replace(regexEndElement, (match, value) => {
                const firstIndex = codeToDisplay.indexOf(match);
                const newE:HTMLElement = {
                    position: codeToDisplay.indexOf(match, firstIndex),
                    type: HTMLTypes.ClosingElement,
                    value: match
                }
                newE.position = newE.position + getPosition(arrElement, newE);
                arrElement.push(newE);
                return ``;
            });
            encodedString = encodedString.replace(regexAttr, (match, value) => {
                const firstIndex = codeToDisplay.indexOf(match);
                const newE:HTMLElement = {
                    position: codeToDisplay.indexOf(match, firstIndex),
                    type: HTMLTypes.Attribute,
                    value: match
                }
                newE.position = newE.position + getPosition(arrElement, newE);
                arrElement.push(newE);
                return ``;
            });
            encodedString = encodedString.replace(regexAttrValue, (match, value) => {
                const firstIndex = codeToDisplay.indexOf(match);
                const newE:HTMLElement = {
                    position: codeToDisplay.indexOf(match, firstIndex),
                    type: HTMLTypes.AttributeValue,
                    value: match
                }
                newE.position = newE.position + getPosition(arrElement, newE);
                arrElement.push(newE);
                return ``;
            });
            // encodedString = encodedString.replace(regexBrackets,(match, value) => {
            //     arrElement.push(`${match}`);
            //     return ``;
            // });
            // encodedString = encodedString.replace(regexQuotes, (match, value) => {
            //     arrElement.push(`${match}`);
            //     return ``;
            // });
            if(pastString == encodedString){
                encodedString = encodedString.replace(regexLiteral, (match, value) => {
                    const firstIndex = codeToDisplay.indexOf(match);
                    const newE:HTMLElement = {
                        position: codeToDisplay.indexOf(match, firstIndex),
                        type: HTMLTypes.StringValue,
                        value: match
                    }
                    newE.position = newE.position + getPosition(arrElement, newE);
                    arrElement.push(newE);
                    return ``;
                });
            }
            iteration++;
            if(iteration > 100 || encodedString.trim() == "") break;
        }
        encodedString = encodedString.trim();

        arrElement.sort((a, b) => a.position - b.position);

        let arrStr:React.ReactNode[] = [];
        for (let j = 0; j < arrElement.length; j++) {
            let newStr:React.ReactNode;
            switch(arrElement[j].type){
                case HTMLTypes.Attribute: {
                    arrStr.push(" ");
                    newStr = (<span key={"codeSpan" + arrElement[j].value + j} className={styles.attribute}>{arrElement[j].value.replace('=','')}</span>);
                    arrStr.push(newStr);
                    arrStr.push((<span key={"codeSpan" + arrElement[j].value + j + "other"} className={styles.otherChar}>=</span>));
                    break;
                }
                case HTMLTypes.AttributeValue: {
                    if(arrElement[j].value.indexOf('{') != -1) arrStr.push((<span key={"codeSpan" + arrElement[j].value + j + "other1"} className={styles.otherChar}>{"{"}</span>));
                    newStr = (<span key={"codeSpan" + arrElement[j].value + j} className={styles.attributeValue}>{arrElement[j].value.replace('{','').replace('}','')}</span>);
                    arrStr.push(newStr);
                    if(arrElement[j].value.indexOf('{') != -1) arrStr.push((<span key={"codeSpan" + arrElement[j].value + j + "other2"} className={styles.otherChar}>{"}"}</span>));
                    break;
                }
                case HTMLTypes.ClosingElement: {
                    newStr = (<span key={"codeSpan" + arrElement[j].value + j} className={styles.closingTag}>{arrElement[j].value}</span>);
                    arrStr.push(newStr);
                    break;
                }
                case HTMLTypes.OpeningElement: {
                    newStr = (<span key={"codeSpan" + arrElement[j].value + j} className={styles.openingTag}>{arrElement[j].value}</span>);
                    arrStr.push(newStr);
                    break;
                }
                case HTMLTypes.StringValue: {
                    arrStr.push((<span key={"codeSpan" + arrElement[j].value + j + "other"} className={styles.openingTag}>{">"}</span>));
                    newStr = (<span key={"codeSpan" + arrElement[j].value + j} className={styles.otherChar}>{arrElement[j].value.trim().replace('>','').trim()}</span>);
                    arrStr.push(newStr);
                    break;
                }
            }
        }
        //console.log({codeToDisplay, encodedString, arrElement});
        this.setState({renderedCode: arrStr});
    }
    public renderTsCode(){
        const codeToDisplay = this.props.code;
    }
}
