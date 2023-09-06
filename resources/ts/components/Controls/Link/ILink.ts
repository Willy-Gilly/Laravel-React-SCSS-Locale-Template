import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties } from "react";

export interface ILinkProps{
    children?: React.ReactNode | React.ReactNode[];//Nothing will be displayed in the body otherwise
    onClick: () => any;//Function called on click
    disabled?: boolean;//Define if the Link should be disabled
    style?: ILinkStyle;//Custom styles
    classNames?: ILinkClassNames;//Custom classNames
    icon?: IconProp;
}

export interface ILinkStyle{
    root: CSSProperties;
}
export interface ILinkClassNames{
    root: string;
}
