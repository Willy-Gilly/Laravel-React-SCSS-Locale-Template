import React from "react";
import { ReactElement, useContext, useState } from "react";
import {IToolTipProps} from "./IToolTip";

export default function ToolTip(props:IToolTipProps): ReactElement{
    const [isHovered, setIsHovered] = useState(false);
    const {children, content} = props;
    if(!content) return (<>{children}</>);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{minWidth:'fit-content', maxWidth:"100%", position:isHovered ? "relative": undefined}}
        >
            {isHovered && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '110%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    {content}
                </div>
            )}
            {children}
        </div>
    );
}
