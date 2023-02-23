'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-132f3901.js');

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:flex;width:fit-content;flex-direction:column;align-items:flex-start;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);line-height:1.5rem;text-transform:uppercase}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);line-height:2rem}:host([uppercase]:not([uppercase=\"false\"])) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";

const ZSectionTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Divider position for the primary title.
     * This prop only works if the secondary title is not set.
     */
    this.dividerPosition = index$1.ZSectionTitleDividerPosition.BEFORE;
    /**
     * Whether the primary title text is uppercase.
     */
    this.uppercase = true;
  }
  componentWillRender() {
    this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === index$1.ZSectionTitleDividerPosition.BEFORE && (index.h("z-divider", { size: index$1.DividerSize.LARGE, color: "z-section-title--divider-color" })), index.h("slot", { name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === index$1.ZSectionTitleDividerPosition.AFTER && (index.h("z-divider", { size: index$1.DividerSize.LARGE, color: "z-section-title--divider-color" }))));
  }
  get host() { return index.getElement(this); }
};
ZSectionTitle.style = stylesCss;

exports.z_section_title = ZSectionTitle;
