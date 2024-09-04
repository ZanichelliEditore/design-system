import { r as registerInstance, c as createEvent, h } from './index-ab5f1eaa.js';
import { e as ControlSize, Y as AccordionVariant } from './index-a7f69d42.js';

const stylesCss = ":host,:host *,:host ::slotted(*){-webkit-box-sizing:border-box;box-sizing:border-box}:host{--z-accordion-highlight-color:transparent;--z-accordion-bg:var(--color-surface01);--z-accordion-label-color:var(--color-default-text);--z-accordion-disabled-label-color:var(--color-text03);--z-accordion-content-bg:var(--color-surface01);--z-accordion-content-fg:var(--color-default-text);--z-accordion-hover-color:var(--color-surface03);--z-accordion-left-padding:calc(var(--space-unit) * 2);--z-accordion-right-padding:var(--space-unit);--z-accordion-label-font-weight:var(--font-sb);display:block;border-top:var(--border-size-small) solid var(--color-surface03);border-bottom:var(--border-size-small) solid var(--color-surface03);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host([variant=\"background\"]){border:var(--border-size-small) solid var(--color-surface03);border-radius:var(--border-radius)}:host([variant=\"background\"][shadow]){-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2)}details{background-color:transparent}summary{--summary-x-small-height:32px;--summary-small-height:36px;--summary-big-height:44px;--summary-height:var(--summary-big-height);--summary-y-padding:var(--space-unit);position:relative;display:-ms-flexbox;display:flex;height:var(--summary-height);-ms-flex-align:center;align-items:center;padding:var(--summary-y-padding) var(--z-accordion-right-padding) var(--summary-y-padding)\n    var(--z-accordion-left-padding);background-color:var(--z-accordion-bg);-webkit-column-gap:var(--space-unit);-moz-column-gap:var(--space-unit);column-gap:var(--space-unit);cursor:pointer;list-style:none}:host([size=\"x-small\"]) summary{--summary-height:var(--summary-x-small-height)}:host([size=\"small\"]) summary{--summary-height:var(--summary-small-height)}:host(:is([size=\"x-small\"],[size=\"small\"])) summary{--summary-y-padding:calc(var(--space-unit) / 2)}:host([variant=\"background\"]) summary{padding-right:calc(var(--space-unit) * 2);border-radius:calc(var(--border-radius) - var(--border-size-small))}:host([variant=\"background\"][open]) summary{border-bottom-left-radius:0;border-bottom-right-radius:0}:host([is-disabled]) summary{cursor:default}summary:focus:focus-visible{background-color:var(--z-accordion-hover-color);-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}summary::before,:host([highlight][variant=\"background\"]) .z-accordion-content::before{position:absolute;top:0;left:0;display:block;width:var(--space-unit);height:100%;content:\"\"}:host([highlight][variant=\"background\"]) summary::before{border-top-left-radius:calc(var(--border-radius) - var(--border-size-small))}:host([highlight][variant=\"background\"]:not([open])) summary::before,:host([highlight][variant=\"background\"][open]) .z-accordion-content::before{border-bottom-left-radius:calc(var(--border-radius) - var(--border-size-small))}:host([highlight]) summary::before,:host([highlight][variant=\"background\"]) .z-accordion-content::before{background-color:var(--z-accordion-highlight-color, transparent)}:host([is-disabled][highlight]) summary::before,:host([is-disabled][highlight][variant=\"background\"]) .z-accordion-content::before{background-color:var(--z-accordion-disabled-label-color)}summary>z-icon{fill:var(--z-accordion-label-color)}:host([is-disabled]) summary>z-icon{fill:var(--z-accordion-disabled-label-color)}.z-accordion-label{color:var(--z-accordion-label-color);font-size:var(--font-size-3);font-weight:var(--z-accordion-label-font-weight)}:host([size=\"x-small\"]) .z-accordion-label{font-size:var(--font-size-2)}:host([size=\"x-small\"]) :is(.z-accordion-label-icon,.z-accordion-chevron){--z-icon-width:16px;--z-icon-height:16px}.z-accordion-tags{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-column-gap:calc(var(--space-unit) / 2);-moz-column-gap:calc(var(--space-unit) / 2);column-gap:calc(var(--space-unit) / 2)}summary z-icon.z-accordion-chevron{margin-left:auto}.z-accordion-content{position:relative;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);background-color:var(--z-accordion-content-bg);color:var(--z-accordion-content-fg);font-size:var(--font-size-2);}:host(:is([size=\"x-small\"],[size=\"small\"])) .z-accordion-content{padding-bottom:var(--space-unit)}:host([size=\"x-small\"]) .z-accordion-content{font-size:var(--font-size-1)}:host([variant=\"background\"]) .z-accordion-content{padding-right:calc(var(--space-unit) * 2)}:host([is-disabled]) .z-accordion-label{color:var(--z-accordion-disabled-label-color)}:host([is-disabled]) .z-accordion-tags ::slotted(z-tag[slot=\"tag\"]){--z-tag-bg:var(--z-accordion-disabled-label-color) !important;--z-tag-text-color:var(--color-text-inverse) !important}@media (hover: hover){summary:focus:focus-visible{position:relative;z-index:1}:host(:not([is-disabled])) summary:hover{background-color:var(--z-accordion-hover-color)}:host(:not([is-disabled])) summary:hover .z-accordion-label{text-decoration:underline}}@media (hover: none){:host([size]) summary{--summary-height:var(--summary-big-height);--summary-y-padding:var(--space-unit)}:host([size]) .z-accordion-label{font-size:var(--font-size-3)}:host([size]) .z-accordion-content{font-size:var(--font-size-2)}:host([size]) :is(.z-accordion-label-icon,.z-accordion-chevron){--z-icon-width:18px;--z-icon-height:18px}}z-accordion+z-accordion{border-top:none}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]{border-radius:0}z-accordion[variant=\"background\"]:first-of-type:not(:last-of-type){border-bottom-left-radius:0;border-bottom-right-radius:0}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]:last-of-type{border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}z-accordion[variant=\"background\"]:first-of-type:not(:last-of-type)::part(summary){border-bottom-left-radius:0;border-bottom-right-radius:0}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]::part(summary){border-radius:0}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]:last-of-type:not([open])::part(summary){border-bottom-left-radius:calc(var(--border-radius) - var(--border-size-small));border-bottom-right-radius:calc(var(--border-radius) - var(--border-size-small))}";
const ZAccordionStyle0 = stylesCss;

const ZAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggled = createEvent(this, "toggled", 7);
        this.label = undefined;
        this.icon = undefined;
        this.size = ControlSize.BIG;
        this.isDisabled = false;
        this.open = false;
        this.highlight = false;
        this.variant = AccordionVariant.DEFAULT;
        this.shadow = true;
    }
    onDisabledChange() {
        if (this.isDisabled) {
            this.open = false;
        }
    }
    /**
     * Handle `details` element toggle.
     * If currently disabled, prevent toggling by forcing the `open` state to `false`.
     * Unfortunately the "toggle" event is not cancelable and when catched, the `open` state is already changed.
     */
    onDetailsToggle() {
        if (this.isDisabled) {
            this.open = false;
            this.detailsElm.open = false;
            return;
        }
        this.open = this.detailsElm.open;
        this.toggled.emit(this.open);
    }
    render() {
        return (h("details", { key: '38787e09f78228eedda870ebd2380feae9f221ef', ref: (elm) => (this.detailsElm = elm), onToggle: this.onDetailsToggle.bind(this), open: this.open }, h("summary", { key: '5eebc1fe756b6ef603bd0170fd53aa9548e02dec', tabIndex: this.isDisabled ? -1 : null, part: "summary" }, this.icon && (h("z-icon", { key: '741eab4038e866bc34259348e66d0115a55ad333', class: "z-accordion-label-icon", name: this.icon })), h("span", { key: 'e82c28a47084aba4a031ce947ac22e73d9c0c26d', class: "z-accordion-label" }, this.label), h("span", { key: '20279a9c0935c533a909a124a1f87f266d5783a3', class: "z-accordion-tags" }, h("slot", { key: '697e5e1cfb5764da59ded7eec41a3e7a2edd56b4', name: "tag" })), h("z-icon", { key: '079968872230475ee1783077819387e205ebdf72', class: "z-accordion-chevron", name: this.open ? "chevron-up" : "chevron-down" })), !this.isDisabled && (h("div", { key: '4377a46e29de0d5e079f1e8011b3e6e10bf1a876', class: "z-accordion-content", part: "content" }, h("slot", { key: 'e998671e6f42b524ab26d2ef71931acf5ed680b7' })))));
    }
    static get watchers() { return {
        "isDisabled": ["onDisabledChange"]
    }; }
};
ZAccordion.style = ZAccordionStyle0;

export { ZAccordion as z_accordion };

//# sourceMappingURL=z-accordion.entry.js.map