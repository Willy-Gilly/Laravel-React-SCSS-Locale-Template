import {GlobalProps} from "../IMainComponent";
import {ILangOptionsProps} from "../Controls/LangOptions/ILangOptions";

export interface IControlExempleProps extends GlobalProps{
    langProps:ILangOptionsProps;
}
export interface IControlExempleStates{
    page:SubPage;
}
export enum SubPage{
    Base,
    CheckBox,
    Toggle,
    TextBox,
    DropDown,
    SearchBox,
    SpinButton,//InputNumber
    ChoiceGroup,//RadioButton
    Slider,
    ColorPicker,
    DatePicker,
    TimePicker,

    Button,
    NavButton,
    Link,
    ToolTip,

    Label,
    Calendar,
    NavBar,
    Modal,
    Panel,
    Notification,
    MessageBar,
    Spinner,

    Table,
    List,

    ItemPicker,
    PeoplePicker,
}
