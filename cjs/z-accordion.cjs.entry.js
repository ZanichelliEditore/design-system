'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');

const stylesCss = ":host,:host *,:host ::slotted(*){box-sizing:border-box}:host{--z-accordion-highlight-color:transparent;--z-accordion-bg:var(--color-surface01);display:block;border-top:var(--border-size-small) solid var(--color-surface03);border-bottom:var(--border-size-small) solid var(--color-surface03);background-color:var(--z-accordion-bg);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host([variant=\"background\"]){border:var(--border-size-small) solid var(--color-surface03);border-radius:var(--border-radius)}:host([variant=\"background\"][shadow]){box-shadow:var(--shadow-2)}details{background-color:transparent}summary{--summary-x-small-height:32px;--summary-small-height:36px;--summary-big-height:44px;--summary-height:var(--summary-big-height);--summary-y-padding:var(--space-unit);position:relative;display:flex;height:var(--summary-height);align-items:center;padding:var(--summary-y-padding) var(--space-unit) var(--summary-y-padding) calc(var(--space-unit) * 2);column-gap:var(--space-unit);cursor:pointer;list-style:none}:host([size=\"x-small\"]) summary{--summary-height:var(--summary-x-small-height)}:host([size=\"small\"]) summary{--summary-height:var(--summary-small-height)}:host(:is([size=\"x-small\"],[size=\"small\"])) summary{--summary-y-padding:calc(var(--space-unit) / 2)}:host([variant=\"background\"]) summary{padding-right:calc(var(--space-unit) * 2);border-radius:calc(var(--border-radius) - var(--border-size-small))}:host([variant=\"background\"][open]) summary{border-bottom-left-radius:0;border-bottom-right-radius:0}:host([is-disabled]) summary{cursor:default}summary:focus:focus-visible{background-color:var(--color-surface03);box-shadow:var(--shadow-focus-primary);outline:none}summary::before,:host([highlight][variant=\"background\"]) .z-accordion-content::before{position:absolute;top:0;left:0;display:block;width:var(--space-unit);height:100%;content:\"\"}:host([highlight][variant=\"background\"]) summary::before{border-top-left-radius:calc(var(--border-radius) - var(--border-size-small))}:host([highlight][variant=\"background\"]:not([open])) summary::before,:host([highlight][variant=\"background\"][open]) .z-accordion-content::before{border-bottom-left-radius:calc(var(--border-radius) - var(--border-size-small))}:host([highlight]) summary::before,:host([highlight][variant=\"background\"]) .z-accordion-content::before{background-color:var(--z-accordion-highlight-color, transparent)}:host([is-disabled][highlight]) summary::before,:host([is-disabled][highlight][variant=\"background\"]) .z-accordion-content::before{background-color:var(--color-text03)}summary>z-icon{fill:var(--color-text01)}:host([is-disabled]) summary>z-icon{fill:var(--color-text03)}.z-accordion-label{color:var(--color-text01);font-size:var(--font-size-3);font-weight:var(--font-sb)}:host([size=\"x-small\"]) .z-accordion-label{font-size:var(--font-size-2)}:host([size=\"x-small\"]) :is(.z-accordion-label-icon,.z-accordion-chevron){--z-icon-width:16px;--z-icon-height:16px}.z-accordion-tags{display:flex;align-items:center;column-gap:calc(var(--space-unit) / 2)}summary z-icon.z-accordion-chevron{margin-left:auto}.z-accordion-content{position:relative;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);font-size:var(--font-size-2);}:host(:is([size=\"x-small\"],[size=\"small\"])) .z-accordion-content{padding-bottom:var(--space-unit)}:host([size=\"x-small\"]) .z-accordion-content{font-size:var(--font-size-1)}:host([variant=\"background\"]) .z-accordion-content{padding-right:calc(var(--space-unit) * 2)}:host([is-disabled]) .z-accordion-label{color:var(--color-text03)}:host([is-disabled]) .z-accordion-tags ::slotted(z-tag[slot=\"tag\"]){--z-tag-bg:var(--color-text03) !important;--z-tag-text-color:var(--color-text-inverse) !important}@media (hover: hover){summary:focus:focus-visible{position:relative;z-index:1}:host(:not([is-disabled])) summary:hover{background-color:var(--color-surface03)}:host(:not([is-disabled])) summary:hover .z-accordion-label{text-decoration:underline}}@media (hover: none){:host([size]) summary{--summary-height:var(--summary-big-height);--summary-y-padding:var(--space-unit)}:host([size]) .z-accordion-label{font-size:var(--font-size-3)}:host([size]) .z-accordion-content{font-size:var(--font-size-2)}:host([size]) :is(.z-accordion-label-icon,.z-accordion-chevron){--z-icon-width:18px;--z-icon-height:18px}}z-accordion+z-accordion{border-top:none}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]{border-radius:0}z-accordion[variant=\"background\"]:first-of-type:not(:last-of-type){border-bottom-left-radius:0;border-bottom-right-radius:0}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]:last-of-type{border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}z-accordion[variant=\"background\"]:first-of-type:not(:last-of-type)::part(summary){border-bottom-left-radius:0;border-bottom-right-radius:0}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]::part(summary){border-radius:0}z-accordion[variant=\"background\"]+z-accordion[variant=\"background\"]:last-of-type:not([open])::part(summary){border-bottom-left-radius:calc(var(--border-radius) - var(--border-size-small));border-bottom-right-radius:calc(var(--border-radius) - var(--border-size-small))}";

const ZAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggled = index.createEvent(this, "toggled", 7);
    /**
     * Size of the component.
     */
    this.size = index$1.ControlSize.BIG;
    /**
     * Disabled state of the accordion.
     */
    this.isDisabled = false;
    /**
     * The open state of the accordion.
     */
    this.open = false;
    /**
     * Enable highlight band on the `summary`'s left edge.
     */
    this.highlight = false;
    /**
     * Accordion variant.
     */
    this.variant = index$1.AccordionVariant.DEFAULT;
    /**
     * Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`.
     */
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
    return (index.h("details", { ref: (elm) => (this.detailsElm = elm), onToggle: this.onDetailsToggle.bind(this), open: this.open }, index.h("summary", { tabIndex: this.isDisabled ? -1 : null, part: "summary" }, this.icon && (index.h("z-icon", { class: "z-accordion-label-icon", name: this.icon })), index.h("span", { class: "z-accordion-label" }, this.label), index.h("span", { class: "z-accordion-tags" }, index.h("slot", { name: "tag" })), index.h("z-icon", { class: "z-accordion-chevron", name: this.open ? "chevron-up" : "chevron-down" })), !this.isDisabled && (index.h("div", { class: "z-accordion-content", part: "content" }, index.h("slot", null)))));
  }
  static get watchers() { return {
    "isDisabled": ["onDisabledChange"]
  }; }
};
ZAccordion.style = stylesCss;

exports.z_accordion = ZAccordion;