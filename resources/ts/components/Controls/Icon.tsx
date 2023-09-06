import React from "react";
import { ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface IIconProps{
    icon:IconProp;
}
export default function Icon(props:IIconProps): ReactElement{
    return <FontAwesomeIcon icon={props.icon}/>;
}
