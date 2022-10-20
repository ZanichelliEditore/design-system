import { EventEmitter } from "../../stencil-public-runtime";
import { InputType, SelectItem, InputStatus } from "../../beans";
export declare class ZInputDeprecated {
  hostElement: HTMLZInputDeprecatedElement;
  /** the id of the input element */
  htmlid: string;
  /** input types */
  type: InputType;
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
  /** the input status (optional): available for text, password, number, email, textarea, select */
  status?: InputStatus;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  hasmessage?: boolean;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  message?: string;
  /** the input label position: available for checkbox, radio */
  labelafter?: boolean;
  /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
  typingtimeout?: number;
  /** items (optional): available for select */
  items?: SelectItem[] | string;
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
  /** Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple) */
  optionSelect: EventEmitter;
  private getValidity;
  private getTextAttributes;
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
  private renderSelect;
  render(): HTMLDivElement | HTMLZSelectElement;
}
