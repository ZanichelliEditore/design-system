import { EventEmitter } from "../../stencil-public-runtime";
import { ControlSize, InputStatus, InputType, LabelPosition } from "../../beans";
export declare class ZInput {
    hostElement: HTMLZInputElement;
    /** the id of the input element */
    htmlid: string;
    /** input types */
    type: InputType;
    /** the input name */
    name?: string;
    /** the input label */
    label?: string;
    /** the input aria-label */
    ariaLabel: string;
    /** the input aria-expaded: available for text, password, number, email */
    ariaExpanded: string;
    /** the input aria-controls (optional): available for text, password, number, email */
    ariaControls?: string;
    /** the input aria-autocomplete (optional): available for text, password, number, email */
    ariaAutocomplete?: string;
    /** the input aria-activedescendant (optional): available for text, password, number, email */
    ariaActivedescendant?: string;
    /** the input value */
    value?: string;
    /** the input is disabled */
    disabled?: boolean;
    /** the input is readonly */
    readonly?: boolean;
    /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
    required?: boolean;
    /** checked: available for checkbox, radio */
    checked?: boolean;
    /** the input placeholder (optional) */
    placeholder?: string;
    /** the input html title (optional) */
    htmltitle?: string;
    /** the input status (optional): available for text, password, number, email, textarea */
    status?: InputStatus;
    /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
    message?: string | boolean;
    /** the input label position: available for checkbox, radio */
    labelPosition?: LabelPosition;
    /** the input has autocomplete option (optional): available for text, password, number, email */
    autocomplete?: string;
    /** the input role */
    role: string;
    /** render clear icon when typing (optional): available for text */
    hasclearicon?: boolean;
    /** render icon (optional): available for text */
    icon?: string;
    /** min number value (optional): available for number */
    min?: number;
    /** Min length value (optional): available for text */
    minlength?: number;
    /** max number value (optional): available for number */
    max?: number;
    /** Max length value (optional): available for text */
    maxlength?: number;
    /** step number value (optional): available for number */
    step?: number;
    /** pattern value (optional): available for tel, text, search, url, email, password*/
    pattern?: string;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    size?: ControlSize;
    isTyping: boolean;
    passwordHidden: boolean;
    private timer;
    private typingtimeout;
    private inputRef;
    inputCheckListener(e: CustomEvent): void;
    /** get checked status */
    isChecked(): Promise<boolean>;
    /** Emitted on input value change, returns value, validity */
    inputChange: EventEmitter;
    private emitInputChange;
    /** Emitted when user starts typing */
    startTyping: EventEmitter;
    private emitStartTyping;
    /** Emitted when user stops typing, returns value, validity */
    stopTyping: EventEmitter;
    private emitStopTyping;
    /** Emitted on checkbox check/uncheck, returns id, checked, type, name, value, validity */
    inputCheck: EventEmitter;
    private emitInputCheck;
    /** Emitted on input focus */
    inputFocus: EventEmitter;
    private emitInputFocus;
    /** Emitted on input blur */
    inputBlur: EventEmitter;
    private emitInputBlur;
    private getValidity;
    private getTextAttributes;
    private getNumberAttributes;
    private getPatternAttribute;
    private getRoleAttribute;
    private getAriaAttrubutes;
    private getFocusBlurAttributes;
    private renderInputText;
    private renderLabel;
    private renderIcons;
    private renderIcon;
    private renderResetIcon;
    private renderShowHidePassword;
    private renderMessage;
    private renderTextarea;
    private handleCheck;
    private renderCheckbox;
    private renderRadio;
    render(): HTMLInputElement | HTMLDivElement;
}
