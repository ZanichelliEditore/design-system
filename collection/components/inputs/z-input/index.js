import { Component, Prop, State, h, Method, Event, Watch, Element } from "@stencil/core";
import { InputTypeEnum, keybordKeyCodeEnum } from "../../../beans";
import { randomId, handleKeyboardSubmit, getClickedElement, getElementTree } from "../../../utils/utils";
export class ZInput {
    constructor() {
        /** the id of the input element */
        this.htmlid = randomId();
        /** the input is disabled */
        this.disabled = false;
        /** the input is readonly */
        this.readonly = false;
        /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
        this.required = false;
        /** checked: available for checkbox, radio */
        this.checked = false;
        /** show input helper message (optional): available for text, password, number, email, textarea, select */
        this.hasmessage = true;
        /** the input label position: available for checkbox, radio */
        this.labelafter = true;
        /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
        this.typingtimeout = 300;
        this.isTyping = false;
        this.textareaWrapperHover = "";
        this.textareaWrapperFocus = "";
        this.isOpen = false;
        this.statusIcons = {
            success: "circle-check",
            error: "circle-cross-stroke",
            warning: "circle-warning"
        };
        this.itemsList = [];
        this.toggleSelectUl = this.toggleSelectUl.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.handleSelectFocus = this.handleSelectFocus.bind(this);
    }
    watchItems() {
        this.itemsList =
            typeof this.items === "string" ? JSON.parse(this.items) : this.items;
        this.selectedItem = this.itemsList.find((item) => item.selected);
        if (this.selectedItem) {
            this.value = this.selectedItem.id;
        }
    }
    /** get the input value */
    async getValue() {
        return this.value;
    }
    /** set the input value */
    async setValue(value) {
        this.value = value;
    }
    /** get checked status */
    async isChecked() {
        switch (this.type) {
            case InputTypeEnum.checkbox:
                return this.checked;
            default:
                return false;
        }
    }
    emitInputChange(value, keycode) {
        if (!this.isTyping) {
            this.emitStartTyping();
        }
        let validity = {};
        if (this.type === InputTypeEnum.textarea) {
            validity = this.getValidity("textarea");
        }
        else {
            validity = this.getValidity("input");
        }
        this.value = value;
        this.inputChange.emit({ value, keycode, validity });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.emitStopTyping(this.value, validity);
        }, this.typingtimeout);
    }
    emitStartTyping() {
        this.isTyping = true;
        this.startTyping.emit();
    }
    emitStopTyping(value, validity) {
        this.isTyping = false;
        this.stopTyping.emit({
            value: value,
            validity: validity,
        });
    }
    emitInputCheck(checked) {
        this.inputCheck.emit({ id: this.htmlid, checked: checked, validity: this.getValidity("input") });
    }
    emitOptionSelect(item) {
        this.value = item.id;
        this.selectedItem = item;
        this.optionSelect.emit({ id: this.htmlid, selected: item.id });
    }
    componentWillLoad() {
        if (this.type === InputTypeEnum.select) {
            this.watchItems();
        }
    }
    getValidity(type) {
        const input = this.hostElement.shadowRoot.querySelector(type);
        return input.validity;
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
            required: this.required,
            title: this.htmltitle,
            class: `
        ${this.status ? "input_" + this.status : "input_default"}
        ${this.isTyping && "istyping"}
        ${!this.isTyping && this.value && "filled"}
      `,
            onInput: (e) => this.emitInputChange(e.target.value, e.keyCode)
        };
    }
    renderInputText(type = InputTypeEnum.text) {
        return (h("div", { class: "textWrapper" },
            this.renderLabel(),
            h("div", null,
                h("input", Object.assign({}, this.getTextAttributes(), { type: type })),
                this.renderResetIcon()),
            this.renderMessage()));
    }
    renderLabel() {
        if (!this.label)
            return;
        let attributes = {};
        if (this.type === InputTypeEnum.textarea) {
            attributes = this.getTextareaExtraAttributes();
        }
        return (h("label", Object.assign({ htmlFor: this.htmlid, class: this.disabled && "disabledLabel" }, attributes), this.label));
    }
    renderResetIcon() {
        if (!this.value || this.disabled || this.readonly)
            return;
        return (h("z-icon", { name: "close", onClick: (e) => this.emitInputChange("", e.keyCode) }));
    }
    renderMessage() {
        if (!this.hasmessage)
            return;
        return (h("span", { class: `statusMsg msg_${this.status}` },
            this.status && this.message ? (h("z-icon", { name: this.statusIcons[this.status], width: 14, height: 14 })) : null,
            h("span", { innerHTML: this.message })));
    }
    /* END text/password/email/number */
    /* START textarea */
    renderTextarea() {
        return (h("div", { class: "textWrapper" },
            this.renderLabel(),
            h("div", null, this.renderTextareaBody()),
            this.renderMessage()));
    }
    renderTextareaBody() {
        const attributes = this.getTextAttributes();
        return (h("div", { class: `
            textareaWrapper
            ${attributes.class}
            ${attributes.disabled && " disabled"}
            ${attributes.readonly && " readonly"}
            ${this.isTyping && " istyping"}
            ${this.textareaWrapperFocus}
            ${this.textareaWrapperHover}
          ` },
            h("textarea", Object.assign({}, attributes, this.getTextareaExtraAttributes()))));
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
        return (h("div", { class: "checkboxWrapper" },
            h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, value: this.value, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: () => this.handleCheckboxChange() }),
            h("label", { htmlFor: this.htmlid, class: `checkboxLabel ${this.labelafter ? "after" : "before"}` },
                h("z-icon", { name: this.checked ? "checkbox-selected" : "checkbox-unchecked", "aria-hidden": true }),
                this.label && h("span", { innerHTML: this.label }))));
    }
    /* END checkbox */
    /* START select */
    renderSelect() {
        return (h("div", { class: "selectWrapper" },
            this.renderLabel(),
            this.renderSelectUl(),
            this.renderMessage()));
    }
    renderSelectUl() {
        return (h("div", null,
            h("ul", { role: "listbox", tabindex: this.disabled || this.readonly ? -1 : 0, id: this.htmlid, "aria-activedescendant": this.value, class: `
            ${this.isOpen ? "open" : "closed"}
            ${this.disabled && " disabled"}
            ${this.readonly && " readonly"}
            ${this.status ? " input_" + this.status : " input_default"}
            ${this.selectedItem ? " filled" : ""}
          `, onClick: () => this.toggleSelectUl(), onKeyUp: (e) => handleKeyboardSubmit(e, this.toggleSelectUl), onKeyDown: (e) => this.arrowsSelectNav(e, this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : -1) },
                this.renderSelectedItem(),
                this.renderSelectItems())));
    }
    renderSelectedItem() {
        return (h("li", { class: "selected" },
            this.selectedItem ? (h("span", null, this.selectedItem.name)) : (h("span", { class: "placeholder" }, this.placeholder)),
            h("z-icon", { name: "drop-down" })));
    }
    renderSelectItems() {
        if (!this.isOpen)
            return;
        return this.itemsList.map((item, key) => (h("li", { role: "option", tabindex: item.disabled ? -1 : 0, "aria-selected": !!item.selected, class: item.disabled && "disabled", id: `${this.htmlid}_${key}`, onClick: () => this.selectItem(item), onKeyUp: (e) => handleKeyboardSubmit(e, this.selectItem, item), onKeyDown: (e) => this.arrowsSelectNav(e, key) },
            h("span", null, item.name))));
    }
    selectItem(item) {
        if (item.disabled)
            return;
        this.itemsList = this.itemsList.map((i) => {
            if (i.selected)
                i.selected = false;
            if (i === item)
                i.selected = true;
            return i;
        });
        this.emitOptionSelect(item);
    }
    arrowsSelectNav(e, key) {
        const arrows = [keybordKeyCodeEnum.ARROW_DOWN, keybordKeyCodeEnum.ARROW_UP];
        if (!arrows.includes(e.keyCode))
            return;
        e.preventDefault();
        e.stopPropagation();
        if (!this.isOpen)
            this.toggleSelectUl();
        let index;
        if (e.keyCode === keybordKeyCodeEnum.ARROW_DOWN) {
            index = key + 1 === this.itemsList.length ? 0 : key + 1;
        }
        else if (e.keyCode === keybordKeyCodeEnum.ARROW_UP) {
            index = key <= 0 ? this.itemsList.length - 1 : key - 1;
        }
        const focusElem = this.hostElement.shadowRoot.getElementById(`${this.htmlid}_${index}`);
        if (focusElem)
            focusElem.focus();
    }
    toggleSelectUl(selfFocusOnClose = false) {
        if (!this.isOpen) {
            document.addEventListener("click", this.handleSelectFocus);
            document.addEventListener("keyup", this.handleSelectFocus);
        }
        else {
            document.removeEventListener("click", this.handleSelectFocus);
            document.removeEventListener("keyup", this.handleSelectFocus);
            if (selfFocusOnClose) {
                this.hostElement.shadowRoot.getElementById(this.htmlid).focus();
            }
        }
        this.isOpen = !this.isOpen;
    }
    handleSelectFocus(e) {
        if (e instanceof KeyboardEvent && e.keyCode === keybordKeyCodeEnum.ESC) {
            e.stopPropagation();
            return this.toggleSelectUl(true);
        }
        if (e instanceof KeyboardEvent && e.keyCode !== keybordKeyCodeEnum.TAB) {
            return;
        }
        const tree = getElementTree(getClickedElement());
        const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "ul" && elem.id === this.htmlid);
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
            case InputTypeEnum.select:
                return this.renderSelect();
            default:
                return this.renderInputText();
        }
    }
    static get is() { return "z-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "htmlid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the id of the input element"
            },
            "attribute": "htmlid",
            "reflect": false,
            "defaultValue": "randomId()"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "InputTypeBean",
                "resolved": "InputTypeEnum.checkbox | InputTypeEnum.email | InputTypeEnum.number | InputTypeEnum.password | InputTypeEnum.select | InputTypeEnum.text | InputTypeEnum.textarea",
                "references": {
                    "InputTypeBean": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "input types"
            },
            "attribute": "type",
            "reflect": false
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input name"
            },
            "attribute": "name",
            "reflect": false
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input label"
            },
            "attribute": "label",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input value"
            },
            "attribute": "value",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input is disabled"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "readonly": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input is readonly"
            },
            "attribute": "readonly",
            "reflect": false,
            "defaultValue": "false"
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input is required (optional): available for text, password, number, email, textarea, checkbox"
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        },
        "checked": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "checked: available for checkbox, radio"
            },
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input placeholder (optional)"
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "htmltitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input html title (optional)"
            },
            "attribute": "htmltitle",
            "reflect": false
        },
        "status": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "InputStatusBean",
                "resolved": "InputStatusEnum.error | InputStatusEnum.success | InputStatusEnum.warning",
                "references": {
                    "InputStatusBean": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input status (optional): available for text, password, number, email, textarea, select"
            },
            "attribute": "status",
            "reflect": false
        },
        "hasmessage": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "show input helper message (optional): available for text, password, number, email, textarea, select"
            },
            "attribute": "hasmessage",
            "reflect": false,
            "defaultValue": "true"
        },
        "message": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "input helper message (optional): available for text, password, number, email, textarea, select"
            },
            "attribute": "message",
            "reflect": false
        },
        "labelafter": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "the input label position: available for checkbox, radio"
            },
            "attribute": "labelafter",
            "reflect": false,
            "defaultValue": "true"
        },
        "typingtimeout": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "timeout setting before trigger `inputChange` event (optional): available for text, textarea"
            },
            "attribute": "typingtimeout",
            "reflect": false,
            "defaultValue": "300"
        },
        "items": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "SelectItemBean[] | string",
                "resolved": "SelectItemBean[] | string",
                "references": {
                    "SelectItemBean": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "items: available for select"
            },
            "attribute": "items",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isTyping": {},
        "textareaWrapperHover": {},
        "textareaWrapperFocus": {},
        "isOpen": {}
    }; }
    static get events() { return [{
            "method": "inputChange",
            "name": "inputChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on input value change, returns value, keycode, validity"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "startTyping",
            "name": "startTyping",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when user starts typing"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "stopTyping",
            "name": "stopTyping",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when user stops typing, returns value, validity"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "inputCheck",
            "name": "inputCheck",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on checkbox check/uncheck, returns id, checked, validity"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "optionSelect",
            "name": "optionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on select option selection, returns select id, selected option id"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getValue": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "get the input value",
                "tags": []
            }
        },
        "setValue": {
            "complexType": {
                "signature": "(value: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "set the input value",
                "tags": []
            }
        },
        "isChecked": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "get checked status",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "hostElement"; }
    static get watchers() { return [{
            "propName": "items",
            "methodName": "watchItems"
        }]; }
}
