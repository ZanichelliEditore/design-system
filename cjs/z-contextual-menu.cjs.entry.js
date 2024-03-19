'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg)}button{width:100%;height:100%;padding:0;border:none;background:transparent;cursor:pointer}z-popover{overflow:hidden}.popover-content-container{position:relative;min-width:112px;max-width:280px;background-color:var(--color-surface02);box-shadow:var(--shadow-2);white-space:nowrap}.element-container:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.element-text{overflow:hidden;font-size:14px;text-overflow:ellipsis}.element-container,.disabled-element-container{display:flex;min-height:calc(var(--space-unit) * 4);box-sizing:border-box;align-items:center;padding:calc(var(--space-unit) / 2) var(--space-unit);fill:var(--color-disabled03);gap:var(--space-unit)}.element-container{fill:var(--color-primary01)}.element-icon{display:flex}";
const ZContextualMenuStyle0 = stylesCss;

const ZContextualMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickContextualMenu = index.createEvent(this, "clickContextualMenu", 7);
        this.elements = undefined;
        this.color = "color-primary01";
        this.popoverPosition = index$1.PopoverPosition.BOTTOM_RIGHT;
    }
    componentWillRender() {
        if (this.elements) {
            this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
        }
    }
    componentDidLoad() {
        this.popoverEl.bindTo = this.triggerButton;
    }
    showIcon() {
        return !this.jsonElements.some((element) => !element.icon);
    }
    togglePopover() {
        if (!this.popoverEl.open) {
            this.popoverEl.open = true;
        }
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: 'c16eb50a3fd4c78f414d64bf45b59961269a030a' }, index.h("button", { key: '2b5ef74579725d6b1dbc4e526cb2fa2516fb4a15', ref: (el) => (this.triggerButton = el), "aria-label": ((_a = this.popoverEl) === null || _a === void 0 ? void 0 : _a.open) ? "chiudi menu contestuale" : "apri menu contestuale", onClick: () => this.togglePopover() }, index.h("z-icon", { key: 'e1818a8a1eb9c4b4cf3c364e0e31eb33b887590e', name: "contextual-menu", fill: this.color })), index.h("z-popover", { key: 'fbe8db8d27abee320aa5faf64d6964b64f416cd1', ref: (el) => (this.popoverEl = el), position: this.popoverPosition }, index.h("div", { key: 'c3fd6e9dc17712abe5ae95cd1048497b20767ec5', class: "popover-content-container" }, index.h("z-list", { key: 'dfa04ca3235257d404f861f85e56ea8c5a918a74' }, index.h("z-list-group", { key: '86e27e74ea9a7b09d2cf4f2a9cd761b7bb07823f', "divider-type": "element" }, (_b = this.jsonElements) === null || _b === void 0 ? void 0 : _b.map((element, index$1) => (index.h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index$1, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, index.h("div", { class: element.disabled ? "disabled-element-container" : "element-container" }, this.showIcon() && (index.h("div", { class: "element-icon" }, index.h("z-icon", { name: element.icon, width: 16, height: 16 }))), index.h("div", { class: "element-text" }, index.h("span", null, element.text))))))))))));
    }
};
ZContextualMenu.style = ZContextualMenuStyle0;

exports.z_contextual_menu = ZContextualMenu;

//# sourceMappingURL=z-contextual-menu.cjs.entry.js.map