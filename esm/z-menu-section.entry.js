import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';

const stylesCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host(:is([active],[open])) .label,.label:hover{border-color:var(--color-secondary01)}:host(:is([active],[open])) .label ::slotted(*),.label:focus:focus-visible ::slotted(*),.label:hover ::slotted(*){font-weight:var(--font-bd)}.label{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2);border:0;border-bottom:var(--border-size-small) solid var(--color-surface05);margin:0;background:transparent;border-radius:0;cursor:pointer;text-align:left}::slotted([data-text]){display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column}::slotted([data-text])::after{overflow:hidden;height:0;content:attr(data-text);content:attr(data-text) / \"\";font-weight:var(--font-bd);pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25}.label:focus:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:var(--color-default-icon)}.items{display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;padding:calc(var(--space-unit) / 2);padding-bottom:calc(var(--space-unit) * 1.5)}.items>::slotted([slot=\"item\"]){display:-ms-inline-flexbox;display:inline-flex;padding:calc(var(--space-unit) / 2);margin:0;font-size:var(--font-size-2);line-height:1.4;outline:none}.items>::slotted([slot=\"item\"]:focus:focus-visible){-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);color:var(--color-secondary01)}.items>::slotted([slot=\"item\"]:hover),.items>::slotted([slot=\"item\"]:focus:focus-visible),.items>::slotted([slot=\"item\"][active]){color:var(--color-secondary01);font-weight:var(--font-bd)}";
const ZMenuSectionStyle0 = stylesCss;

const ZMenuSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.opened = createEvent(this, "opened", 7);
        this.closed = createEvent(this, "closed", 7);
        this.active = undefined;
        this.open = undefined;
        this.hasContent = undefined;
    }
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
        this.open ? this.opened.emit() : this.closed.emit();
    }
    /** Close the list when a click is performed outside of this Element. */
    handleClick(ev) {
        if (!this.open || this.hostElement.contains(ev.target)) {
            return;
        }
        this.open = false;
        this.closed.emit();
    }
    /**
     * Check if some content slot is set.
     */
    checkContent() {
        this.hasContent = this.hostElement.querySelectorAll('[slot="item"]').length > 0;
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = (labelElement === null || labelElement === void 0 ? void 0 : labelElement.innerText) || null;
    }
    componentWillLoad() {
        this.checkContent();
    }
    render() {
        return (h(Host, { key: '7261f7c68d7e097fe0a70e6f8c0b513958605dbd', role: "menu", open: this.open }, h("button", { key: '74fd64a789a7f9ea93ec118dc2978809e70c5312', class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this) }, h("slot", { key: 'b8e32ae6fc27571d5318eb71ceddea6d87ca3ffa', onSlotchange: this.onLabelSlotChange.bind(this) }), this.hasContent && h("z-icon", { key: '5500c12ff4f374564c03e887a69ceba287a8d577', name: this.open ? "chevron-up" : "chevron-down" })), this.open && (h("div", { key: 'ff66588a6fa8fe8968ec9d7e12d6fac3bb1bb45f', class: "items" }, h("slot", { key: 'de19fdba5a89f0a048b6f8e824feacaa80bbe3fc', name: "item", onSlotchange: this.checkContent.bind(this) })))));
    }
    get hostElement() { return getElement(this); }
};
ZMenuSection.style = ZMenuSectionStyle0;

export { ZMenuSection as z_menu_section };

//# sourceMappingURL=z-menu-section.entry.js.map