import { EventEmitter } from "../../../stencil-public-runtime";
import { InputTypeBean, InputStatusBean, LabelPosition } from "../../../beans";
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
  /** the input aria-label */
  ariaLabel?: string;
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
  status?: InputStatusBean;
  /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
  message?: string | boolean;
  /** the input label position: available for checkbox, radio */
  labelPosition?: LabelPosition;
  /** the input has autocomplete option (optional): available for text, password, number, email */
  autocomplete?: string;
  /** render clear icon when typing (optional): available for text */
  hasclearicon?: boolean;
  /** render icon (optional): available for text */
  icon?: string;
  /** min number value (optional): available for number */
  min?: number;
  /** max number value (optional): available for number */
  max?: number;
  /** step number value (optional): available for number */
  step?: number;
  /** pattern value (optional): available for tel, text, search, url, email, password*/
  pattern?: string;
  isTyping: boolean;
  passwordHidden: boolean;
  private timer;
  private typingtimeout;
  inputCheckListener(e: CustomEvent): void;
  /** get checked status */
  isChecked(): Promise<boolean>;
  /** Emitted on input value change, returns value, validity */
  inputChange: EventEmitter;
  emitInputChange(value: string): void;
  /** Emitted when user starts typing */
  startTyping: EventEmitter;
  emitStartTyping(): void;
  /** Emitted when user stops typing, returns value, validity */
  stopTyping: EventEmitter;
  emitStopTyping(value: string, validity: any): void;
  /** Emitted on checkbox check/uncheck, returns id, checked, type, name, value, validity */
  inputCheck: EventEmitter;
  emitInputCheck(checked: boolean): void;
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
    class: {
      [x: string]: boolean;
      filled: boolean;
    };
    autocomplete: string;
    onInput: (e: any) => void;
  };
  getNumberAttributes(type: InputTypeBean): {
    min: number;
    max: number;
    step: number;
  };
  getPatternAttribute(type: InputTypeBean): {
    pattern: string;
  };
  renderInputText(type?: InputTypeBean): any;
  renderLabel(): any;
  renderIcons(): any;
  renderIcon(): any;
  renderResetIcon(): any;
  renderShowHidePassword(): any;
  renderMessage(): any;
  renderTextarea(): any;
  handleCheck(ev: any): void;
  renderCheckbox(): any;
  renderRadio(): any;
  render(): any;
}
