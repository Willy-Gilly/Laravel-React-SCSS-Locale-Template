import React from "react";
import { ReactElement} from "react";
import {IImageProps} from "./IImage";

export default function Image(props:IImageProps): ReactElement{
    const {width, height, src, onClick} = props;
    const containerStyle: React.CSSProperties = {
        width: width || height || 'auto',
        height: height || width || 'auto',
        cursor: onClick ? 'pointer' : 'default',
    };

    return (
        <div style={containerStyle} onClick={onClick}>
            <img src={src} alt="Image" style={{ width: '100%', height: '100%' }} />
        </div>
    );
}
