import { EventEmitter } from "../../../stencil-public-runtime";
import { InputTypeBean, InputStatusBean, SelectItemBean } from "../../../beans";
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
  /** items (optional): available for select */
  items?: SelectItemBean[] | string;
  /** the input has autocomplete option (optional): available for select, input */
  autocomplete?: boolean | string;
  /** multiple options can be selected (optional): available for select */
  multiple?: boolean;
  /** render clear icon when typing (optional): available for text */
  hasclearicon?: boolean;
  /** render icon (optional): available for text, select */
  icon?: string;
  isTyping: boolean;
  textareaWrapperHover: string;
  textareaWrapperFocus: string;
  passwordHidden: boolean;
  private timer;
  private selectElem;
  inputCheckListener(e: CustomEvent): void;
  /** get the input value */
  getValue(): Promise<string | string[]>;
  /** set the input value */
  setValue(value: string | string[]): Promise<void>;
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
  /** Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple) */
  optionSelect: EventEmitter;
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
  renderInputText(type?: InputTypeBean): any;
  renderLabel(): any;
  renderIcons(): any;
  renderIcon(): any;
  renderResetIcon(): any;
  renderShowHidePassword(): any;
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
  render(): any;
}
