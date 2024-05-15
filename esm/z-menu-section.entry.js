import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-f16bc2ca.js';

const stylesCss = ":host{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host(:is([active],[open])) .label,.label:hover{border-color:var(--color-secondary01)}:host(:is([active],[open])) .label ::slotted(*),.label:focus:focus-visible ::slotted(*),.label:hover ::slotted(*){font-weight:var(--font-bd)}.label{display:flex;width:100%;align-items:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2);border:0;border-bottom:var(--border-size-small) solid var(--color-surface05);margin:0;background:transparent;border-radius:0;cursor:pointer;text-align:left}::slotted([data-text]){display:inline-flex;flex-direction:column}::slotted([data-text])::after{overflow:hidden;height:0;content:attr(data-text);content:attr(data-text) / \"\";font-weight:var(--font-bd);pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25}.label:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:var(--color-default-icon)}.items{display:flex;width:100%;flex-direction:column;padding:calc(var(--space-unit) / 2);padding-bottom:calc(var(--space-unit) * 1.5)}.items>::slotted([slot=\"item\"]){display:inline-flex;padding:calc(var(--space-unit) / 2);margin:0;font-size:var(--font-size-2);line-height:1.4;outline:none}.items>::slotted([slot=\"item\"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);color:var(--color-secondary01)}.items>::slotted([slot=\"item\"]:hover),.items>::slotted([slot=\"item\"]:focus:focus-visible),.items>::slotted([slot=\"item\"][active]){color:var(--color-secondary01);font-weight:var(--font-bd)}";
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
        return (h(Host, { key: 'beadad10be10337d069e96c4144372b3ae9188d7', role: "menu", open: this.open }, h("button", { key: 'd76a6e7da3bb60238571b5a4e9c76b2923b07a97', class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this) }, h("slot", { key: 'ba6a653482a7e3f5de77877e7e69225c236b85f8', onSlotchange: this.onLabelSlotChange.bind(this) }), this.hasContent && h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" })), this.open && (h("div", { class: "items" }, h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) })))));
    }
    get hostElement() { return getElement(this); }
};
ZMenuSection.style = ZMenuSectionStyle0;

export { ZMenuSection as z_menu_section };

//# sourceMappingURL=z-menu-section.entry.js.map