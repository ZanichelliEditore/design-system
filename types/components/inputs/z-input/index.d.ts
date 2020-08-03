import { EventEmitter } from "../../../stencil-public-runtime";
import { InputTypeBean, InputTypeEnum, InputStatusBean, SelectItemBean } from "../../../beans";
export declare class ZInput {
    hostElement: HTMLElement;
    /** the id of the input element */
    htmlid: string;
    /** input types */
    type: InputTypeBean;
    /** the input name */
    name?: string;
    /** the input label */
    label?: string;
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
    /** the input status (optional): available for text, password, number, email, textarea, select */
    status?: InputStatusBean;
    /** show input helper message (optional): available for text, password, number, email, textarea, select */
    hasmessage?: boolean;
    /** input helper message (optional): available for text, password, number, email, textarea, select */
    message?: string;
    /** the input label position: available for checkbox, radio */
    labelafter?: boolean;
    /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
    typingtimeout?: number;
    /** items: available for select */
    items?: SelectItemBean[] | string;
    isTyping: boolean;
    textareaWrapperHover: string;
    textareaWrapperFocus: string;
    isOpen: boolean;
    private timer;
    private itemsList;
    private selectedItem;
    constructor();
    watchItems(): void;
    inputCheckListener(e: CustomEvent): void;
    /** get the input value */
    getValue(): Promise<string>;
    /** set the input value */
    setValue(value: string): Promise<void>;
    /** get checked status */
    isChecked(): Promise<boolean>;
    /** Emitted on input value change, returns value, keycode, validity */
    inputChange: EventEmitter;
    emitInputChange(value: string, keycode: number): void;
    /** Emitted when user starts typing */
    startTyping: EventEmitter;
    emitStartTyping(): void;
    /** Emitted when user stops typing, returns value, validity */
    stopTyping: EventEmitter;
    emitStopTyping(value: string, validity: any): void;
    /** Emitted on checkbox check/uncheck, returns id, checked, type, name, value, validity */
    inputCheck: EventEmitter;
    emitInputCheck(checked: boolean): void;
    /** Emitted on select option selection, returns select id, selected option id */
    optionSelect: EventEmitter;
    emitOptionSelect(item: SelectItemBean): void;
    componentWillLoad(): void;
    getValidity(type: string): ValidityState;
    getTextAttributes(): {
        id: string;
        name: string;
        placeholder: string;
        value: string;
        disabled: boolean;
        readonly: boolean;
        required: boolean;
        title: string;
        class: string;
        onInput: (e: any) => void;
    };
    renderInputText(type?: InputTypeEnum): any;
    renderLabel(): any;
    renderResetIcon(): any;
    renderMessage(): any;
    renderTextarea(): any;
    renderTextareaBody(): any;
    getTextareaExtraAttributes(): {
        onFocus: () => string;
        onBlur: () => string;
        onMouseOver: () => string;
        onMouseOut: () => string;
    };
    handleCheckboxChange(): void;
    renderCheckbox(): any;
    handleRadioChange(): void;
    renderRadio(): any;
    renderSelect(): any;
    renderSelectUl(): any;
    renderSelectedItem(): any;
    renderSelectItems(): any[];
    selectItem(item: SelectItemBean): void;
    arrowsSelectNav(e: KeyboardEvent, key: number): void;
    toggleSelectUl(selfFocusOnClose?: boolean): void;
    handleSelectFocus(e: MouseEvent | KeyboardEvent): void;
    render(): any;
}
