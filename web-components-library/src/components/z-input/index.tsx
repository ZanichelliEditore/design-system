import {
  Component,
  Prop,
  State,
  h,
  Method,
  Event,
  EventEmitter,
  Watch
} from "@stencil/core";
import {
  InputTypeBean,
  InputTypeEnum,
  InputStatusBean,
  SelectItemBean
} from "../../beans";
import { randomId, handleKeyboardSubmit } from "../../utils/utils";

@Component({
  tag: "z-input",
  styleUrls: [
    "styles.css",
    "styles-text.css",
    "styles-textarea.css",
    "styles-checkbox.css",
    "styles-select.css"
  ],
  shadow: true
})
export class ZInput {
  /** the id of the input element */
  @Prop() htmlid: string = randomId();
  /** input types */
  @Prop() type: InputTypeBean;
  /** the input name */
  @Prop() name?: string;
  /** the input label */
  @Prop() label?: string;
  /** the input value */
  @Prop() value?: string;
  /** the input is disabled */
  @Prop() disabled?: boolean = false;
  /** the input is readonly */
  @Prop() readonly?: boolean = false;
  /** checked: available for checkbox, radio */
  @Prop({ mutable: true }) checked?: boolean = false;
  /** the input placeholder (optional) */
  @Prop() placeholder?: string;
  /** the input html title (optional) */
  @Prop() htmltitle?: string;
  /** the input status (optional) */
  @Prop() status?: InputStatusBean;
  /** input helper message (optional) */
  @Prop() message?: string;
  /** the input label position: available for checkbox, radio */
  @Prop() labelafter?: boolean = true;
  /** timeout setting before trigger `inputChange` event (optional) */
  @Prop() typingtimeout?: number = 300;
  /** items: available for select */
  @Prop() items?: SelectItemBean[] | string;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";
  @State() isOpen: boolean = false;

  private statusIcons = {
    success: "circle-check",
    error: "circle-cross-stroke",
    warning: "circle-warning"
  };
  private timer;
  private itemsList: SelectItemBean[] = [];

  constructor() {
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  @Watch("items")
  watchItems() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    let selectedItem = this.itemsList.find(
      (item: SelectItemBean) => item.selected
    );
    if (!selectedItem) {
      this.itemsList[0].selected = true;
      selectedItem = this.itemsList[0];
    }
    this.value = selectedItem.id;
  }

  /** get the input value */
  @Method()
  async getValue(): Promise<string> {
    return this.value;
  }

  /** set the input value */
  @Method()
  async setValue(value: string): Promise<void> {
    this.value = value;
  }

  /** get checked status */
  @Method()
  async isChecked(): Promise<boolean> {
    switch (this.type) {
      case InputTypeEnum.checkbox:
        return this.checked;
      default:
        return false;
    }
  }

  /** Emitted on input value change, returns value, keycode */
  @Event() inputChange: EventEmitter;
  emitInputChange(value: string, keycode: number) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }

    this.value = value;
    this.inputChange.emit({ value, keycode });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.emitStopTyping(this.value);
    }, this.typingtimeout);
  }

  /** Emitted when user starts typing */
  @Event() startTyping: EventEmitter;
  emitStartTyping() {
    this.isTyping = true;
    this.startTyping.emit();
  }

  /** Emitted when user stops typing, returns value */
  @Event() stopTyping: EventEmitter;
  emitStopTyping(value: string) {
    this.isTyping = false;
    this.stopTyping.emit({ value: value });
  }

  /** Emitted on checkbox check/uncheck, returns id, checked */
  @Event() inputCheck: EventEmitter;
  emitInputCheck(checked: boolean) {
    this.inputCheck.emit({ id: this.htmlid, checked: checked });
  }

  /** Emitted on select option selection, returns select id, selected option id */
  @Event() optionSelect: EventEmitter;
  emitOptionSelect(value: string) {
    this.value = value;
    this.optionSelect.emit({ id: this.htmlid, selected: value });
  }

  componentWillLoad() {
    if (this.type === InputTypeEnum.select) {
      this.watchItems();
    }
  }

  /* START text/password/email/number */

  getTextAttributes() {
    return {
      id: this.htmlid,
      name: this.name,
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      title: this.htmltitle,
      class: `
        ${this.status ? "input_" + this.status : "input_default"}
        ${this.isTyping && "istyping"}
        ${!this.isTyping && this.value && "filled"}
      `,
      onInput: (e: any) => this.emitInputChange(e.target.value, e.keyCode)
    };
  }

  renderInputText(type = InputTypeEnum.text) {
    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>
          <input {...this.getTextAttributes()} type={type} />
          {this.renderResetIcon()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }

  renderLabel() {
    if (!this.label) return;
    return (
      <label htmlFor={this.htmlid} class={this.disabled && "disabledLabel"}>
        {this.label}
      </label>
    );
  }

  renderResetIcon() {
    if (!this.value || this.disabled || this.readonly) return;

    return (
      <z-icon
        name="close"
        onClick={(e: any) => this.emitInputChange("", e.keyCode)}
      />
    );
  }

  renderMessage() {
    if (!this.message) return;

    return (
      <span class={`statusMsg msg_${this.status}`}>
        {this.status ? (
          <z-icon name={this.statusIcons[this.status]} width={14} height={14} />
        ) : null}
        <span innerHTML={this.message}></span>
      </span>
    );
  }

  /* END text/password/email/number */

  /* START textarea */

  renderTextarea() {
    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>{this.renderTextareaBody()}</div>
        {this.renderMessage()}
      </div>
    );
  }

  renderTextareaBody() {
    const attributes = this.getTextAttributes();

    return (
      <div
        class={`
            textareaWrapper
            ${attributes.class}
            ${attributes.disabled && " disabled"}
            ${attributes.readonly && " readonly"}
            ${this.isTyping && " istyping"}
            ${this.textareaWrapperFocus}
            ${this.textareaWrapperHover}
          `}
      >
        <textarea
          {...attributes}
          onFocus={() => (this.textareaWrapperFocus = "focus")}
          onBlur={() => (this.textareaWrapperFocus = "")}
          onMouseOver={() => (this.textareaWrapperHover = "hover")}
          onMouseOut={() => (this.textareaWrapperHover = "")}
        />
      </div>
    );
  }

  /* END textarea */

  /* START checkbox */

  handleCheckboxChange() {
    this.checked = !this.checked;
    this.emitInputCheck(this.checked);
  }

  renderCheckbox() {
    return (
      <div class="checkboxWrapper">
        <input
          id={this.htmlid}
          type="checkbox"
          name={this.name}
          checked={this.checked}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onChange={() => this.handleCheckboxChange()}
        />

        <label
          htmlFor={this.htmlid}
          class={`checkboxLabel ${this.labelafter ? "after" : "before"}`}
        >
          <z-icon
            name={this.checked ? "checkbox-selected" : "checkbox-unchecked"}
            aria-hidden={true}
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
  }

  /* END checkbox */

  /* START select */

  renderSelect() {
    return (
      <div class="selectWrapper">
        {this.renderLabel()}
        {this.renderSelectUl()}
        {this.renderMessage()}
      </div>
    );
  }

  renderSelectUl() {
    return (
      <div>
        <ul
          role="listbox"
          tabindex={this.disabled || this.readonly ? -1 : 0}
          id={this.htmlid}
          aria-activedescendant={this.value}
          class={`
            ${this.isOpen ? "open" : "closed"}
            ${this.disabled && " disabled"}
            ${this.readonly && " readonly"}
            ${this.status ? "input_" + this.status : "input_default"}
          `}
          onClick={() => (this.isOpen = !this.isOpen)}
          onKeyUp={(e: KeyboardEvent) =>
            handleKeyboardSubmit(e, this.toggleSelectUl)
          }
        >
          {this.renderSelectedItem()}
          {this.renderSelectItems()}
        </ul>
      </div>
    );
  }

  renderSelectedItem() {
    const selectedItem = this.itemsList.find(
      (item: SelectItemBean) => item.selected === true
    );

    return (
      <li class="selected">
        <span>{selectedItem.name}</span>
        <z-icon name="drop-down" />
      </li>
    );
  }

  renderSelectItems() {
    if (!this.isOpen) return;

    return this.itemsList.map((item: SelectItemBean) => (
      <li
        role="option"
        tabindex={item.disabled ? -1 : 0}
        aria-selected={!!item.selected}
        class={item.disabled && "disabled"}
        onClick={() => this.selectItem(item)}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(e, this.selectItem, item)
        }
      >
        <span>{item.name}</span>
      </li>
    ));
  }

  selectItem(item: SelectItemBean) {
    if (item.disabled) return;

    this.itemsList = this.itemsList.map((i: SelectItemBean) => {
      if (i.selected) i.selected = false;
      if (i === item) i.selected = true;
      return i;
    });

    this.emitOptionSelect(item.id);
  }

  toggleSelectUl() {
    this.isOpen = !this.isOpen;
  }

  /* END select */

  render() {
    switch (this.type) {
      case InputTypeEnum.text:
      case InputTypeEnum.password:
      case InputTypeEnum.number:
      case InputTypeEnum.email:
        return this.renderInputText(this.type);
      case InputTypeEnum.textarea:
        return this.renderTextarea();
      case InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case InputTypeEnum.select:
        return this.renderSelect();
      default:
        return this.renderInputText();
    }
  }
}
