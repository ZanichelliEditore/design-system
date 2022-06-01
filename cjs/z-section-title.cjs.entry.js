'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-78d71393.js');

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:flex;flex-direction:column;align-items:flex-start;width:fit-content;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);text-transform:uppercase;font-size:var(--font-size-3);line-height:1.5rem}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);line-height:2rem}:host([uppercase]) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";

const ZSectionTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Divider position for the primary title.
     * This prop only works if the secondary title is not set.
     */
    this.dividerPosition = index$1.ZSectionTitleDividerPositions.before;
    /**
     * Whether the primary title text is uppercase.
     */
    this.uppercase = true;
  }
  componentWillRender() {
    this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
  }
  render() {
    return [
      index.h("slot", { name: "secondary-title" }),
      !this.hasSecondaryTitle &&
        this.dividerPosition == index$1.ZSectionTitleDividerPositions.before &&
        index.h("z-divider", { size: index$1.DividerSize.large, color: "z-section-title--divider-color" }),
      index.h("slot", { name: "primary-title" }),
      !this.hasSecondaryTitle &&
        this.dividerPosition == index$1.ZSectionTitleDividerPositions.after &&
        index.h("z-divider", { size: index$1.DividerSize.large, color: "z-section-title--divider-color" }),
    ];
  }
  get host() { return index.getElement(this); }
};
ZSectionTitle.style = stylesCss;

exports.z_section_title = ZSectionTitle;
