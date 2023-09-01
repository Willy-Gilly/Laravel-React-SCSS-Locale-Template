import * as React from 'react';
import {ICodeProps} from './ICode';
import Highlight from 'react-highlight';
import {IThemeContext, ThemeContext} from "../../../Context/ThemeContext";

export default class Code extends React.Component<ICodeProps> {
    constructor(props,context) {
        super(props,context);
    }
    public static contextType = ThemeContext;
    public context!: React.ContextType<typeof ThemeContext>;
    public componentDidMount(){
        let str = ((this.props.theme == undefined ? this.context as IThemeContext : this.props.theme) == IThemeContext.Light ? 'Light' : 'Dark');
        console.log(str, this.props.theme, this.context);
        if(!document.getElementById('themeCode')){
            let head = document.head;
            let themeCode = document.createElement('link');
            themeCode.id = 'themeCode';
            themeCode.rel = 'stylesheet';
            themeCode.type = 'text/css';
            themeCode.href = 'http://127.0.0.1:5173/resources/ts/components/Controls/Code/Code'+str+'.css';
            themeCode.media = 'all';
            head.append(themeCode);
        }
    }
    public render() : React.ReactElement {
        const {
            code, theme, style, classNames, language
        } = this.props;
            return (
                <div>
                    <Highlight className={language}>
                        {code}
                    </Highlight>
                </div>
            );


    }
}
