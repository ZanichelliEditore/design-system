import {
  Component,
  Prop,
  State,
  h,
  Method,
  Event,
  EventEmitter,
  Watch,
  Element,
  Listen
} from "@stencil/core";
import {
  InputTypeBean,
  InputTypeEnum,
  InputStatusBean,
  SelectItemBean,
  keybordKeyCodeEnum
} from "../../../beans";
import {
  randomId,
  handleKeyboardSubmit,
  getClickedElement,
  getElementTree
} from "../../../utils/utils";

@Component({
  tag: "z-input",
  styleUrl: "styles.css",
  shadow: true
})
export class ZInput {
  @Element() hostElement: HTMLElement;

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
  /** the input status (optional): available for text, password, number, email, textarea, select */
  @Prop() status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() hasmessage?: boolean = true;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() message?: string;
  /** the input label position: available for checkbox, radio */
  @Prop() labelafter?: boolean = true;
  /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
  @Prop() typingtimeout?: number = 300;
  /** items: available for select */
  @Prop() items?: SelectItemBean[] | string;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";
  @State() isOpen: boolean = false;

  private statusIcons = {
    success: "circle-check",
    error: "circle-cross",
    warning: "circle-warning"
  };
  private timer;
  private itemsList: SelectItemBean[] = [];
  private selectedItem: SelectItemBean;

  constructor() {
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }

  @Watch("items")
  watchItems() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedItem = this.itemsList.find(
      (item: SelectItemBean) => item.selected
    );
    if (this.selectedItem) {
      this.value = this.selectedItem.id;
    }
  }

  @Listen("inputCheck", { target: "document" })
  inputCheckListener(e: CustomEvent) {
    const data = e.detail;
    switch (this.type) {
      case InputTypeEnum.radio:
        if (
          data.type === InputTypeEnum.radio &&
          data.name === this.name &&
          data.id !== this.htmlid
        ) {
          this.checked = false;
        }
      default:
        return;
    }
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
      case InputTypeEnum.radio:
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

  /** Emitted on checkbox check/uncheck, returns id, checked, type, name */
  @Event() inputCheck: EventEmitter;
  emitInputCheck(checked: boolean) {
    this.inputCheck.emit({
      id: this.htmlid,
      checked: checked,
      type: this.type,
      name: this.name
    });
  }

  /** Emitted on select option selection, returns select id, selected option id */
  @Event() optionSelect: EventEmitter;
  emitOptionSelect(item: SelectItemBean) {
    this.value = item.id;
    this.selectedItem = item;
    this.optionSelect.emit({ id: this.htmlid, selected: item.id });
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

    let attributes = {};
    if (this.type === InputTypeEnum.textarea) {
      attributes = this.getTextareaExtraAttributes();
    }

    return (
      <label
        htmlFor={this.htmlid}
        class={this.disabled && "disabledLabel"}
        {...attributes}
      >
        {this.label}
      </label>
    );
  }

  renderResetIcon() {
    if (!this.value || this.disabled || this.readonly) return;

    return (
      <z-icon
        name="cross"
        onClick={(e: any) => this.emitInputChange("", e.keyCode)}
      />
    );
  }

  renderMessage() {
    if (!this.hasmessage) return;

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
        <textarea {...attributes} {...this.getTextareaExtraAttributes()} />
      </div>
    );
  }

  getTextareaExtraAttributes() {
    return {
      onFocus: () => (this.textareaWrapperFocus = "focus"),
      onBlur: () => (this.textareaWrapperFocus = ""),
      onMouseOver: () => (this.textareaWrapperHover = "hover"),
      onMouseOut: () => (this.textareaWrapperHover = "")
    };
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

  /* START radio */

  handleRadioChange() {
    this.checked = true;
    this.emitInputCheck(this.checked);
  }

  renderRadio() {
    return (
      <div class="radioWrapper">
        <input
          id={this.htmlid}
          type="radio"
          name={this.name}
          checked={this.checked}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onChange={() => this.handleRadioChange()}
        />

        <label
          htmlFor={this.htmlid}
          class={`radioLabel ${this.labelafter ? "after" : "before"}`}
        >
          <z-icon
            name={this.checked ? "radio-button-checked" : "radio-button"}
            aria-hidden={true}
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
  }
  /* END radio */

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
            ${this.status ? " input_" + this.status : " input_default"}
            ${this.selectedItem ? " filled" : ""}
          `}
          onClick={() => this.toggleSelectUl()}
          onKeyUp={(e: KeyboardEvent) =>
            handleKeyboardSubmit(e, this.toggleSelectUl)
          }
          onKeyDown={(e: KeyboardEvent) =>
            this.arrowsSelectNav(
              e,
              this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : -1
            )
          }
        >
          {this.renderSelectedItem()}
          {this.renderSelectItems()}
        </ul>
      </div>
    );
  }

  renderSelectedItem() {
    return (
      <li class="selected">
        {this.selectedItem ? (
          <span>{this.selectedItem.name}</span>
        ) : (
          <span class="placeholder">{this.placeholder}</span>
        )}
        <z-icon name="drop-down" />
      </li>
    );
  }

  renderSelectItems() {
    if (!this.isOpen) return;

    return this.itemsList.map((item: SelectItemBean, key) => (
      <li
        role="option"
        tabindex={item.disabled ? -1 : 0}
        aria-selected={!!item.selected}
        class={item.disabled && "disabled"}
        id={`${this.htmlid}_${key}`}
        onClick={() => this.selectItem(item)}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(e, this.selectItem, item)
        }
        onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, key)}
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

    this.emitOptionSelect(item);
  }

  arrowsSelectNav(e: KeyboardEvent, key: number) {
    const arrows = [keybordKeyCodeEnum.ARROW_DOWN, keybordKeyCodeEnum.ARROW_UP];
    if (!arrows.includes(e.keyCode)) return;

    e.preventDefault();
    e.stopPropagation();

    if (!this.isOpen) this.toggleSelectUl();

    let index: number;
    if (e.keyCode === keybordKeyCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    } else if (e.keyCode === keybordKeyCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }

    const focusElem = this.hostElement.shadowRoot.querySelector(
      `#${this.htmlid}_${index}`
    ) as HTMLElement;
    if (focusElem) focusElem.focus();
  }

  toggleSelectUl(selfFocusOnClose: boolean = false) {
    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    } else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        const elem = this.hostElement.shadowRoot.querySelector(
          `#${this.htmlid}`
        ) as HTMLElement;
        elem.focus();
      }
    }

    this.isOpen = !this.isOpen;
  }

  handleSelectFocus(e: MouseEvent | KeyboardEvent) {
    if (e instanceof KeyboardEvent && e.keyCode === keybordKeyCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }

    if (e instanceof KeyboardEvent && e.keyCode !== keybordKeyCodeEnum.TAB) {
      return;
    }

    const tree = getElementTree(getClickedElement());
    const parent = tree.find(
      (elem: any) =>
        elem.nodeName.toLowerCase() === "ul" && elem.id === this.htmlid
    );

    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
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
      case InputTypeEnum.radio:
        return this.renderRadio();
      case InputTypeEnum.select:
        return this.renderSelect();
      default:
        return this.renderInputText();
    }
  }
}
